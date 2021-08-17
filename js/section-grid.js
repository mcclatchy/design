/**
 * Sample section-grid concept
 */

class SectionGrid extends HTMLElement {

  get template() {
    let t = document.createElement("template");
    t.innerHTML = `
    <link rel="stylesheet" href="/design/css/section-grid.css">
    <link rel="stylesheet" href="/design/css/molecules/grid.css">

    <style>
      :host {
        display: block;
      }

      slot[name] {
        display: block;
      }
    </style>

    <slot name="above"></slot>

    <div class="section grid">
      <slot></slot>
    </div>

    <slot name="below"></slot>
    `;
    return t;
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(this.template.content.cloneNode(true));
  }
}

customElements.define("section-grid", SectionGrid);
