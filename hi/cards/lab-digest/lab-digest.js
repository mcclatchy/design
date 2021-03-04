/**
 * Lab link list digest
 */

class LabDigest extends HTMLElement {

  get template() {
    let t = document.createElement("template");
    t.innerHTML = `
    <link rel="stylesheet" href="${this.sds}">

    <style>
      :host {
        display: block;
        background-color: white;
        box-shadow: 
          0 1px 2px 0 rgba(0, 0, 0, .2), 
          0 1px 5px 0 rgba(0, 0, 0, .13);
        grid-row: var(--rows);
      }

      .label {
        --ht: uppercase;
      }

      ::slotted(a) {
        display: block;
        padding: var(--padding, 15px);
        font: 400 larger var(--serif);
        color: var(--lc, #222);
        --ld: none;
        --lhd: underline;
      }

      ::slotted(a:nth-child(n+${this.maxHeadlines + 1})) {
        display: none;
      }
    </style>

    <span class="label">
      <h5>${this.label}</h5>
    </span>

    <slot></slot>
    `;
    return t;
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(this.template.content.cloneNode(true));

    // handle changes in the number of children
    let mainSlot = this.shadowRoot.querySelector("slot");
    mainSlot.addEventListener("slotchange", this._handleSlotChange.bind(this));
  }

  get label() {
    return this.getAttribute("label") || "More info";
  }

  get headlinesPerRow() {
    return this.getAttribute("headlines-per-row") || 3;
  }

  get maxHeadlines() {
    return parseInt(this.getAttribute("max-headlines")) || 6;
  }

  get sds() {
    let mi = document.head.querySelector("link[href*=mi-styles]");
    let sds = document.head.querySelector("link[href*=sds]");
    return mi ? mi.href : sds.href;
  }

  get target() {
    return this.getAttribute("target");
  }

  _handleSlotChange(e) {
    let links = e.target.assignedElements();

    if(this.target) {
      links.forEach(l => {
        l.target = this.target;
      });
    }

    let headlines = Math.min(links.length, this.maxHeadlines);
    let rows = Math.ceil(headlines / this.headlinesPerRow);
    this.style.setProperty("--rows", `span ${rows}`);

    // Remove the hidden attribute
    this.hidden = false;
  }
}

// Register the element
customElements.define("lab-digest", LabDigest);
