/**
 * Zone-Swapper base element
 * created 6/25/2020
 */

class ZoneSwap extends HTMLElement {

  get template() {
    let t = document.createElement("template");
    t.innerHTML = `
    <style>
      :host {
        display: block;
      }
    </style>

    <slot></slot>
    `;
    return t;
  }

  constructor() {
    super();
  }

  connectedCallback() {
    if(!this.shadowRoot) {
      this.attachShadow({ mode: "open" });
      this.shadowRoot.appendChild(this.template.content.cloneNode(true));
      this.updatePosition();
    }
  }

  get zone() {
    return this.getAttribute("zone");
  }

  set zone(z) {
    if(z) {
      this.setAttribute("zone", z);
    } else {
      this.removeAtribute("zone");
    }
  }

  zoneElement(qs = this.zone) {
    return document.querySelector(qs);
  }

  updatePosition() {
    let ele = this.zoneElement();

    if(ele) {
      this.hidden = false;
      ele.insertAdjacentElement("afterend", this);
      ele.remove();
    } else {
      console.warn(`${this.localName} is unable to replace zone ${this.zone}`);
    }
  }
}

// Register the custom element
customElements.define("zone-swap", ZoneSwap);

// Export for modules
export default ZoneSwap;
