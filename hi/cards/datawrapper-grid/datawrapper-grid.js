/**
 * Creates a grid for Datawrapper embeds
 */

class DatawrapperGrid extends HTMLElement {

  get template() {
    const t = document.createElement("template");
    t.innerHTML = `
    <style>
      :host {
        display: block;
        --ts: 0.875rem;
        --tf: var(--sans);
      }

      .grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
        grid-gap: 30px;
        align-items: stretch;
        margin-top: 15px;
        margin-bottom: 15px;
      }

      .intro ::slotted(*) {
        margin: 10px 0 0 0;
      }

      .intro ::slotted(::first-child) {
        margin-top: 0;
      }

      .credit {
        --tc: #707070;
        text-transform: uppercase;
      }
    </style>

    <div class="intro">
      <slot name="intro"></slot>
    </div>
    <div class="grid">
      <slot></slot>
    </div>
    <div class="credit">
      <slot name="credit"></slot>
    </div>
    `;
    return t;
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(this.template.content.cloneNode(true));
  }

  connectedCallback() {
    const embed = this.closest(".embed-infographic");
    if(embed) {
      embed.classList.add("wide");
    }
  }
}

// Register the element
customElements.define("datawrapper-grid", DatawrapperGrid);
