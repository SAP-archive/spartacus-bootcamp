import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import {
  ContentPageMetaResolver,
  PageDescriptionResolver,
  BasePageMetaResolver,
  Page,
  ContentSlotData,
  PageMeta,
  PageMetaResolver,
} from '@spartacus/core';
import { CmsParagraphComponent } from '@spartacus/core';

/**
 * Demonstrates page meta resolver for content pages.
 * In this example we return the first paragraph text in the description.
 */
@Injectable({
  providedIn: 'root',
})
export class CustomContentPageMetaResolver extends ContentPageMetaResolver
  implements PageDescriptionResolver {

  override resolveDescription(): Observable<string | undefined> {
    return  super.basePageMetaResolver.resolveDescription().pipe(
      switchMap(() => {
        return this.getCurrentPage().pipe(
          map((page) => this.getFirstContentComponent(page)),
          switchMap((compUid) => this.getComponentData(compUid)),
          map((paragraphComponent: CmsParagraphComponent) => paragraphComponent.content),
        );
      })
    );
  }

  private getCurrentPage(): Observable<any> {
    return super.basePageMetaResolver['cmsService'].getCurrentPage();
  }

  private getComponentData(componentUid: string): Observable<any> {
    return super.basePageMetaResolver['cmsService'].getComponentData(componentUid);
  }


  private getFirstContentComponent(page: Page): string {
    if (!page) {
      return null as any;
    }
    const firstSlot = Array.isArray(page.slots)? 
    Object.keys(page.slots).find(uid => {
      return (
        (page.slots?.[uid] as ContentSlotData)?.components &&
        !!(page.slots?.[uid] as ContentSlotData).components?.find(c => {
          return c.typeCode === 'CMSParagraphComponent';
        })
      );
    }) : null ;
    // if there is a slot with CMS paragraph content, we return the first slot
    return firstSlot ? 
  (page.slots?.[firstSlot] as ContentSlotData)?.components?.find(c => {
    return c.typeCode === 'CMSParagraphComponent';
  })?.uid
    : null as any;
  }

  /**
   * Another way is to return either the UID of the first CMS paragraph component in a content slot 
   * or an empty string if there is no CMS paragraph component in any of the content slots.
   */
  // private getFirstContentComponent(page: Page): string {
  // if (!page) {
  //  return null as any;
  // }
  // let firstCmsParagraphComponentUid: string = '';
  // const contentSlots = Array.isArray(page.slots)? 
  // page.slots.filter(slot => slot.slotType === 'ContentSlot'): [];
  // if (contentSlots) {
  //   for (const slot of contentSlots) {
  //     const contentSlotComponentData: ContentSlotComponentData[] = slot.components;
  //     for (const component of contentSlotComponentData) {
  //       if (component.typeCode === 'CMSParagraphComponent') {
  //         firstCmsParagraphComponentUid = component.uid || '';
  //         break;
  //       }
  //     }
  //     if (firstCmsParagraphComponentUid) {
  //       break;
  //     }
  //   }
  // }
  // return firstCmsParagraphComponentUid;
  // }

}