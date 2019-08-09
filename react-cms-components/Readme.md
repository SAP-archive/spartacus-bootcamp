# React based CMS  web component for Spartacus

## What is Spartacus?

Spartacus is a lean, Angular-based JavaScript storefront for SAP Commerce Cloud that communicates exclusively through the Commerce REST API.

https://github.com/SAP/cloud-commerce-spartacus-storefront

## What are cms components in Spartacus?

https://sap.github.io/cloud-commerce-spartacus-storefront-docs/customizing-cms-components/

## Build steps

`yarn && yarn buid`

## About the examples

Build will result in three JS files:

1. `cms-data.js`

    Condains Cms data example web component implementation. 
    It demonstrates `CmsComponentData` passed from Spartacus and displays it.

2. `breadcrumbs.js`
    
    Example Breadcrumb cms web component. 
    Uses routing service (part of `cxApi`) to display current route.  

3. `bundle.js` 

    One bundle file including both above components.
    
## Usage in spartacus

1. Copy files to assets folder in your shell app

2. Use cms component configration to use those new components:
    
    ```typescript
    {
      cmsComponents: {
        BreadcrumbComponent: {
          component: 'assets/breadcrumbs.js#breadcrumbs-cmp',
        },
        CMSParagraphComponent: {
          component: 'assets/cms-data.js#cms-data'
        }
      }
    }
    ```
    
    or using bundled version:
    ```typescript
    {
      cmsComponents: {
        BreadcrumbComponent: {
          component: 'assets/bundle.js#breadcrumb-cmp',
        },
        CMSParagraphComponent: {
          component: 'assets/bundle.js#cms-data'
        }
      }
    }
    ```
