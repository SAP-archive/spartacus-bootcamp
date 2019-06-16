import {
  CmsPageConfig,
  CmsSearchBoxComponent,
  CmsStructureConfig,
  ContentSlotComponentData,
} from '@spartacus/core';

export const staticComponents: {
  [key: string]: ContentSlotComponentData | any;
} = {
  SearchBoxComponent: {
    typeCode: 'SearchBoxComponent',
    flexType: 'SearchBoxComponent',
    displayProducts: true,
    displaySuggestions: true,
    maxProducts: 5,
    displayProductImages: true,
  } as CmsSearchBoxComponent,
};

export const staticPages: CmsPageConfig[] = [
  {
    ignoreBackend: false,
    pageId: '/faq',
    template: 'ContentPage1Template',
    slots: {
      StaticSlot: {
        componentIds: ['SearchBoxComponent'],
      },
    },
  },
  {
    ignoreBackend: true,
    pageId: '/static/page',
    template: 'ContentPage1Template',
    slots: {
      StaticSlot: {
        componentIds: ['SearchBoxComponent'],
      },
    },
  },
];

export const staticCmsonfig: CmsStructureConfig = {
  cmsStructure: {
    components: {
      ...staticComponents,
    },
    slots: {},
    pages: staticPages,
  },
};
