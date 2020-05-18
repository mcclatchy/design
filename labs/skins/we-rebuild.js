/**
 * We Rebuild section skin
 */

import SimpleGrid from "./simple-grid.js";

class WeRebuild extends SimpleGrid {

  /**
   * Require to extend
   */

  constructor() {
    super();
  }

  beforeShow() {
    // A little more style cleanup at the global level
    this.style.sheet.insertRule(`
    .subnav-section-name { 
      margin-top: 0; 
      line-height: 1em !important;
    }`);

    this.style.sheet.insertRule(`
    .subnav-section-icon { 
      align-self: center !important;
    }`);

    this.style.sheet.insertRule(`
    we-rebuild .ad-widget {
      margin: 0 auto;
    }`);
  }
}

// Register the element
customElements.define("we-rebuild", WeRebuild);
