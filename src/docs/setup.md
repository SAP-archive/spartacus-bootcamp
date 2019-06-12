# Setup Spartacus

1. Create new application with Angular-CLI  
https://github.com/angular/angular-cli

2. Install `@spartacus/storefront` and the (peer)dependencies  
Use either with `npm` or `yarn`.

3. Configure the `app.module`  
  - Use the `B2cStorefrontModule` recipe
  - Configure backend OCC baseUrl and cms site
  - Configure static i18n translation resource
  - Import styles from style lib

4. Add `cx-storefront` component to `app.component.html`
