# Routing

## Configurable routes

All routes in sparatcus are driven by the CMS, expect for product and category pages. You can configure those pages with the `ConfigModule`.

These routes are configurable to reflect the preferred URLs, and allows to migrate existing storefronts to Spartacus.

New data attributes can be added to the URLs, but the data must be availabe.

### Route alias

Product and Category can have aliases so that mulitple URLs match these pages.

### Default routes for integrations

The product and category pages have a default route configured for integration purposes.

- Product: `/p/:code`
- Category: `/c/:code`

## Static routes

Any static pages can be added, using standard angular Router.

## Semantic routes

Pages that must be linked from different locations are called semantic links. These links can be controlled by Spartacus in a central location. Typical examples are the login page or cart page.
