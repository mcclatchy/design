/**
 * We Rebuild section skin
 */

import SimpleGrid from "./simple-grid.js";

class WeRebuild extends SimpleGrid {

  /**
   * Shadow DOM template
   */

  get template() {
    let t = document.createElement("template");
    t.innerHTML = `
    <link rel="stylesheet" href="${this.sds.href}">

    <style>
    :host {
      display: block;
      transition: opacity .5s;
    }

    :host(.faded) {
      opacity: 0;
    }

    .grid {
      grid-auto-flow: dense;
    }

    @media(min-width: 660px) {
      ::slotted(.lead-item) {
        grid-column: 1/-1;
      }

      ::slotted(.zone-el) {
        grid-column: 1;
        align-self: center;
        justify-self: center;
      }
    }
    </style>

    <slot name="above"></slot>
    <slot name="nav"></slot>
    <section>
      <slot class="grid"></slot>
    </section>
    <slot name="below"></slot>
    `;

    return t;
  }

  /**
   * Require to extend
   */

  constructor() {
    super();
  }

  /**
   * Fires when added to the DOM
   */

  connectedCallback() {
    // Do nothing if already run
    if(this.shadowRoot) return;

    // Attach the shadow
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(this.template.content.cloneNode(true));

    // Tweak the lead
    this.articles[0].classList.add("horizontal", "impact", "in-depth");

    // Append articles
    this.articles.forEach((a, i) => {
      this.appendChild(a);
    });

    // Zones
    this.insertBefore(this.zone(3), this.articles[4]);
    this.insertBefore(this.zone(5), this.articles[4]);
    this.insertBefore(this.zone(6), this.articles[4]);
    this.insertBefore(this.zone(7), this.articles[8]);

    let z8 = this.zone(8);
    z8.childNodes[1].hidden = true;
    z8.classList.add("d-md");
    this.insertBefore(z8, this.articles[8]);

    // Section nav
    let nav = this.main.querySelector("#nav-section-front");
    if(nav) {
      nav.setAttribute("slot", "nav");
      nav.querySelector("h2").textContent = "More Coverage";
      this.appendChild(nav);
    }

    // Remove tho old structure
    this.main.insertAdjacentElement("beforebegin", this);
    this.main.remove();

    // A little more style cleanup at the global level
    this.style.sheet.insertRule(".subnav-section-name { margin-top: 0; }");

    // Unfade
    window.requestAnimationFrame(() => {
      this.classList.remove("faded");
    });
  }
}

// Register the element
customElements.define("we-rebuild", WeRebuild);
