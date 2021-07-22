/**
 * Generic offer card for landing pages
 */

class OfferCard extends HTMLElement {

  get template() {
    const t = document.createElement("template");
    t.innerHTML = `
    <style>
      :host {
        position: relative;
        display: flex;
        flex-wrap: wrap;
        background-color: var(--paper-color, white);
        box-shadow: var(--paper-shadow);
        --hf: var(--sans);
        --hw: bold;
        --tf: var(--sans);
        --ts: 1.1rem;
        --ps: 15px;
      }

      .background::slotted(*),
      .media ::slotted(*) {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      .media {
        position: relative;
        flex: 2 1 300px;
        min-height: var(--card-height, 300px);
        background-color: var(--media-color, transparent);
      }

      :host(.no-media) .media {
        display: none;
      }

      .info {
        position: relative;
        display: grid;
        grid-template-rows: auto 1fr;
        flex: 3 1 450px;
        min-height: var(--card-height, auto);
      }

      .kicker {
        display: flex;
        justify-content: center;
      }

      .kicker::slotted(*) {
        margin: 0;
        padding: 5px 8px;
        background-color: var(--kicker-color, #222);
        --tc: white;
      }

      .package {
        display: grid;
        grid-row-gap: var(--ps);
        align-self: center;
        justify-items: start;
        padding: 15px;
      }

      .package::slotted(*) {
        margin: 0;
      }

      :host(.center) .package {
        justify-items: center;
        text-align: center;
      }
    </style>

    <slot class="background" name="background"></slot>

    <div class="media">
      <slot name="media"></slot>
    </div>
    <div class="info">
      <slot class="kicker" name="kicker"></slot>
      <slot class="package"></slot>
    </div>
    `;
    return t;
  }

  constructor() {
    super();

    // Add the Shadow DOM
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(this.template.content.cloneNode(true));
  }

  connectedCallback() {
    const media = this.querySelector("[slot=media]");
    this.classList.toggle("no-media", !media);

    // Show this element
    this.hidden = false;
    requestAnimationFrame(() => {
      this.classList.remove("faded");
    });
  }
}

// Register the element
customElements.define("offer-card", OfferCard);

// ES6 export
export default OfferCard;
