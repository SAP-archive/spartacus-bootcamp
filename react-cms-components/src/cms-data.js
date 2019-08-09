import React from 'react';
import ReactDOM from 'react-dom';
import { CmsData } from './components/cms-data';

class CmsDataWebComponent extends HTMLElement {
  connectedCallback() {
    const mountPoint = document.createElement('span');
    this.attachShadow({ mode: 'open' }).appendChild(mountPoint);
    // get spartacus API from web component
    const cxApi = this.cxApi || {};
    ReactDOM.render(<CmsData {...cxApi}></CmsData>, mountPoint);
  }
}

customElements.define('cms-data', CmsDataWebComponent);
