/**
 * Labs custom skin
 */

import "./simple-grid.js";

class LabSkin extends window.SimpleGrid {

  connectedCallback() {
    if(this.shadowRoot) return;
    super.connectedCallback();

    // Allow extensions in teh DOM
    let addOns = this.querySelectorAll("[data-after]");
    addOns.forEach((d) => {
      this.insertBefore(d, this._articles[d.dataset.after]);
    });
  }

}

// Register the element
customElements.define("lab-skin", LabSkin);

// ES6 default export
export default LabSkin;
