/**
 * Landing page base skin
 */

import "./offer-card.js";

class LandingPage extends HTMLElement {
  get template() {
    const t = document.createElement("template");
    t.innerHTML = `
    <style>
      :host {
        display: grid;
        grid-template-columns: 1fr minmax(auto, var(--section-width)) 1fr;
        grid-gap: var(--gap, 30px);
        padding: var(--gap, 30px) 0px;
        transition: opacity var(--fade-duration, .5s) ease;
      }

      @media(max-width: 600px) {
        :host {
          grid-column-gap: 0px;
        }
      }

      ::slotted(*) {
        grid-column: 2;
        max-width: 100%;
      }

      ::slotted(.full-bleed) {
        grid-column: 1/-1;
      }

      ::slotted(.grid) {
        grid-gap: var(--gap, 30px) !important;
      }

      /* Panel display */
      :host(.panels) {
        display: block;
        text-align: center;
        --gap: 0px;
        --card-items: center;
        --card-content: center;
      }

      :host(.panels) ::slotted(*) {
        min-height: var(--card-height, 450px);
      }
    </style>

    <slot></slot>
    `;
    return t;
  }

  constructor() {
    super();

    // Add the Shadow DOM
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(this.template.content.cloneNode(true));

    // Flags
    this.stamped = false;
  }

  connectedCallback() {
    // Trigger this fire only once
    if(!this.stamped) {
      const story = document.querySelector(".story-body");

      // Remove story sublings
      document.querySelectorAll(".story-body ~ *").forEach(ele => ele.remove());

      // Insert this node
      this.stamped = true;
      story.insertAdjacentElement('beforebegin', this);

      // Remove the story body
      story.remove();

      // Show this element
      this.hidden = false;
      requestAnimationFrame(() => {
        this.classList.remove("faded");
      });
    }
  }

  get baseUrl() {
    return import.meta.url.split("/").slice(0, -1).join("/");
  }

}

// Register the element
customElements.define("landing-page", LandingPage);

// ES6 export
export default LandingPage;
