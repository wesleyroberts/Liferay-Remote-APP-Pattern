import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';

class WebComponent extends HTMLElement {
  connectedCallback() {
    const properties = {
      dynamic_property_test: this.getAttribute('dynamic_property_test'),
    };

    ReactDOM.render(<App properties={properties} />, this);
  }
}

const ELEMENT_ID = 'remote-age-app';

if (!customElements.get(ELEMENT_ID)) {
  customElements.define(ELEMENT_ID, WebComponent);
}
