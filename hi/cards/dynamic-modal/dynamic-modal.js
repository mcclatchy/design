/**
 * Dynamic Modal
 * Setup to allow serving through Adobe Target
 */

class DynamicModal extends HTMLElement {

  /**
   * Shadow DOM template
   */

  get template() {
    let t = document.createElement("template");
    t.innerHTML = `
    <style>
      :host {
        display: none;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        padding: 100px 0 30px;
        box-sizing: border-box;
        z-index: 9999;
        --bbc: #222;
        --bc: white;
        --hf: var(--sans);
        --tf: var(--sans);
        --ts: 0.875rem;
      }

      :host:before {
        content: "";
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: var(--screen-color, rgba(0,0,0,0.8));
      }

      :host(.showing) {
        display: block;
      }

      .card {
        position: relative;
        width: var(--story-width);
        max-width: calc(100vw - 30px);
        margin: 0 auto;
        padding-right: 50px;
        box-sizing: border-box;
        background-color: var(--paper-color, white);
      }

      .image {
        display: none;
      }
      
      .close {
        position: absolute;
        top: 0;
        right: 0;
        padding: 15px;
        cursor: pointer;
        fill: var(--close-color, #222);
      }

      .package {
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 15px;
      }

      .package > ::slotted(*) {
        margin: var(--ps, 10px) 0 0;
      }

      .package > ::slotted(:first-child) {
        margin-top: 0;
      }

      /**
       * Contains an image
       */

      @media(min-width: 730px) {
        :host(.has-img) .card {
          display: grid;
          grid-template-columns: 350px 1fr;
          grid-gap: 15px;
          min-height: 350px;
        }

        :host(.has-img) .image {
          display: block;
          position: relative;
        }

        :host(.has-img) .image ::slotted(img) {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }

      /**
       * Requires an action to close
       */

      :host(.requires-action) .card {
        padding-right: 0;
      }

      :host(.requires-action) .close {
        display: none;
      }
    </style>

    <div class="screen"></div>
    <div class="card">
      <div class="image">
        <slot name="image"></slot>
      </div>
      <div class="package">
        <slot id="main"></slot>
      </div>
      <svg class="close" width="20" height="20" viewBox="0 0 352 512"><path d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"/></svg>
    </div>
    `;
    return t;
  }

  /**
   * Constructor required
   */

  constructor() {
    super();

    // Attach Shadow DOM
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(this.template.content.cloneNode(true));

    // Load template into Shadow DOM
    const imgSlot = this.shadowRoot.querySelector("slot[name=image]");
    imgSlot.addEventListener("slotchange", (e) => {
      this.classList.toggle("has-img", imgSlot.assignedNodes().length > 0);
    });

    // Set up close events
    const cb = this.shadowRoot.querySelector(".close");
    cb.addEventListener("click", e => {
      this.close();
    });

    // Register events
    this.openEvent = new Event("open");
    this.closeEvent = new Event("close");
  }

  /**
   * Fires when added to the DOM
   */

  connectedCallback() {
    // Once this element has updated, let it decide to hide or show
    this.hidden = false;

    // Check for the showing class and dispatch the open event if there
    if(this.classList.contains("showing")) {
      this.dispatchEvent(this.openEvent);
    }
  }
  

  /**
   * Element methods
   */

  open() {
    this.classList.add("showing");
    this.dispatchEvent(this.openEvent);
  }

  close() {
    this.classList.remove("showing");
    this.dispatchEvent(this.closeEvent);
  }
}

/**
 * Register the element
 */

customElements.define("dynamic-modal", DynamicModal);
