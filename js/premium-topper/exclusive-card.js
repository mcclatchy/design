/**
 * Exclusive card
 */

class ExclusiveCard extends HTMLElement {

  /**
   * Shadow DOM template
   */

  get template() {
    let t = document.createElement("template");
    t.innerHTML = `
    <style>
      :host {
        display: grid;
        grid-template-columns: 300px 60px;
        grid-gap: var(--spread, 10px);
        align-self: stretch;
        padding: 0px var(--half-gap);
        white-space: normal;
        text-align: left;
        font-family: var(--sans);
        --half-gap: calc(var(--gap) / 2);
        --ld: none;
        --lhd: underline;
        --lhc: var(--lc);
      }

      :host(:first-of-type) {
        padding-left: 0;
      }

      :host(:nth-of-type(n+2)) {
        border-left: 1px solid #ffffff30;
      }

      .content ::slotted(*) {
        margin: 3px 0 0;
      }

      .media {
        position: relative;
        width: 60px;
        height: 60px;
        top: 5px;
      }

      .media ::slotted(img) {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: 50% 20%;
        border-radius: 50%;
      }
    </style>

    <div class="content">
      <slot></slot>
    </div>

    <div class="media">
      <slot name="media"></slot>
    </div>`;
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
  }
}

// Register the element
customElements.define("exclusive-card", ExclusiveCard);

// ES export
export default ExclusiveCard;
