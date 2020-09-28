import React from 'react';
import ReactDOM from 'react-dom';
import { Breadcrumbs } from './components/breadcrumbs';

class BreadcrumbWebComponent extends HTMLElement {
  connectedCallback() {
    const mountPoint = document.createElement('span');
    this.attachShadow({ mode: 'open' }).appendChild(mountPoint);
    // get spartacus API from web component
    const cxApi = this.cxApi || {};
    ReactDOM.render(<Breadcrumbs {...cxApi} />, mountPoint);
  }
}

customElements.define('breadcrumb-cmp', BreadcrumbWebComponent);
