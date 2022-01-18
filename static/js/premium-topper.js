/**
 * Premium Topper
 */

class PremiumTopper extends HTMLElement {

  /**
   * Shadow DOM template
   */

  get template() {
    let t = document.createElement("template");
    t.innerHTML = `
    <style>
      :host {
        display: block;
        --header-family: var(--premium-serif);
        --text-family: var(--sans);
      }

      :host(.loaded) ::slotted(*) {
        opacity: 1 !important;
      }

      slot {
        display: block;
        margin: 0;
      }

      .container {
        display: grid;
        gap: var(--gap);
        max-width: var(--section-width);
        margin: 0 auto;
      }

      .container > *,
      .label {
        margin: 0;
      }

      .label {
        font-size: 13px;
        font-family: var(--sans);
        font-weight: 400;
        color: var(--subYellow);
        text-transform: uppercase;
      }

      .headline {
        --header-size: calc(36px + (60 - 36) * ( 100vw - 400px) / (1440 - 400));
        --header-weight: 400;
        --line-height: 1.1em;
      }

      .headline::slotted(*) {
        margin: 0;
      }

      .slim {
        max-width: 450px;
      }

      @media(min-width: 768px) {
        .container {
          grid-template-columns: 1fr 1fr;
        }

        .container > * {
          grid-column: 1;
        }

        .label {
          grid-column: 1/-1;
        }

        .media {
          grid-column: 2;
          grid-row: span 3;
        }
      }
    </style>

    <div class="container">
      <h4 class="label"><b>Your community portal:</b> what you need to know</h4>
      <slot name="headline" class="headline"></slot>
      <slot name="media" class="media"></slot>
      <slot class="slim"></slot>
      <div class="other slim">
        <h4 class="label"><b>What else you need to know today</b></h4>
        <slot name="other"></slot>
      </div>
    </div>
    `;
    return t;
  }

  /**
   * Called once when instantiated
   */

  constructor() {
    super();

    // Add the Shadow DOM
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(this.template.content.cloneNode(true));

    // Fetch the data
    this.fetch();
  }

  /**
   * Fetches a structure from the ProdX app
   */

  fetch() {
    this.classList.add("loaded");
  }
}

// Register the element
customElements.define("premium-topper", PremiumTopper);

// ES export
export default PremiumTopper;
