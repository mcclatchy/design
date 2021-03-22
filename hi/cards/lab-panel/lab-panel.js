/*
 * Fresno Bee education lab panel
 */

class LabPanel extends HTMLElement {
  get template() {
    let t = document.createElement("template");
    t.innerHTML = `
    <style>
    :host {
      display: flex;
      flex-direction: column;
      align-items: center;
      max-width: unset !important;
      --hf: var(--sans);
      --hw: bold;
      --ht: uppercase;
      --tf: var(--sans);
      --padding: 0;
    }

    .package {
      max-width: var(--story-width, 728px);
      padding: 45px 15px;
    }

    .package ::slotted(*) {
      position: relative;
      max-width: 100% !important;
    }

    /* Fill variant */

    :host(.fill) {
      position: relative;
      min-height: 45vw;
      justify-content: center;
      background-color: black;
      color: white;
      --lc: white;
    }

    :host(.fill) ::slotted(img) {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: 50% 20%;
      opacity: .2;
      max-width: unset !important;
    }

    /* Button grid popular */

    ::slotted(.lab-button-grid) {
      grid-gap: 15px !important;
      --columns: 1fr 1fr;
    }

    /* ENH headline style */

    ::slotted(.enh-panel-title) {
      --hw: 400px !important;
      font-size: calc(100vw/10) !important;
      line-height: 1em !important;
      letter-spacing: -1px;
      margin: 0;
    }

    @media(min-width: 600px) {
      ::slotted(.enh-panel-title) {
        font-size: 60px !important;
      }
    }
    </style>

    <div class="package">
      <slot></slot>
    </div>
    `;
    return t;
  }

  constructor() {
    super();
  }

  connectedCallback() {
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(this.template.content.cloneNode(true));
  }
}

customElements.define("lab-panel", LabPanel);
