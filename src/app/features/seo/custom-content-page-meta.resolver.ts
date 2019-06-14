import { Injectable } from '@angular/core';
import {
  CmsParagraphComponent,
  ContentPageMetaResolver,
  ContentSlotData,
  Page,
  PageDescriptionResolver,
  PageMeta,
} from '@spartacus/core';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

/**
 * Demonstrates page meta resolver for content pages.
 * In this example we return the first paragraph text in the description.
 */
@Injectable({
  providedIn: 'root',
})
export class CustomContentPageMetaResolver extends ContentPageMetaResolver
  implements PageDescriptionResolver {
  resolve(): Observable<PageMeta> {
    return super.resolve().pipe(
      switchMap(pageMeta => {
        return this.resolveDescription().pipe(
          map(description => Object.assign(pageMeta, { description }))
        );
      })
    );
  }

  resolveDescription(): Observable<string> {
    return this.cms.getCurrentPage().pipe(
      map(page => {
        return this.getFirstContentComponent(page);
      }),
      switchMap(compUid => this.cms.getComponentData(compUid)),
      map(
        (paragraphComponent: CmsParagraphComponent) =>
          paragraphComponent.content
      )
    );
  }

  private getFirstContentComponent(page: Page) {
    const firstSlot = Object.keys(page.slots).find(uid => {
      return (
        (page.slots[uid] as ContentSlotData).components &&
        (page.slots[uid] as ContentSlotData).components.find(c => {
          return c.typeCode === 'CMSParagraphComponent';
        })
      );
    });
    // if there is a slot with CMS paragraph content, we return the first slot
    return firstSlot
      ? (page.slots[firstSlot] as ContentSlotData).components.find(c => {
          return c.typeCode === 'CMSParagraphComponent';
        }).uid
      : null;
  }
}
