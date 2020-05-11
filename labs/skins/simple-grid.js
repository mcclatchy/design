/**
 * Base section theming file
 * A simple grid with 
 */

class SimpleGrid extends HTMLElement {

  /**
   * Template for the Shadow DOM
   */

  get template() {
    let t = document.createElement("template");
    t.innerHTML = `
    <link rel="stylesheet" href="${this.sds.href}">

    <style>
    :host {
      display: block;
    }

    :host([theme=dark]) {
      background-color: #222;
      color: white;
      --tc: white;
      --lc: white;
    }

    :host([theme=dark]) ::slotted(.card) {
      background-color: #373737 !important;
    }

    ::slotted(.card:nth-of-type(20)) {
      display: none !important;
    }

    ::slotted(.lead-item) {
      grid-column: 1/-1;
    }
    </style>

    <slot name="above"></slot>
    <section>
      <slot class="grid"></slot>
    </section>
    <slot name="below"></slot>
    `;
    return t;
  }

  /**
   * Required to extend an element
   */

  constructor() {
    super();
  }

  /**
   * Fires when appended to DOM
   */

  connectedCallback() {
    // Skip if already done
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

    // Move this element into position
    this.main.insertAdjacentElement("beforebegin", this);
    this.main.remove();

    // Check for dark theme
    if(this.theme == "dark") {
      this.style.sheet.insertRule("body { background-color: #222 }");
    }

    // Unfade
    window.requestAnimationFrame(() => {
      this.classList.remove("faded");
    });
  }

  /**
   * Returns the main container element
   */

  get main() {
    if(!this._main) {
      this._main = document.querySelector("#main-content");
    }

    return this._main;
  }

  /**
   * Returns an array of all article cards on the page
   */

  get articles() {
    let list = this.main.querySelectorAll("article.card");
    return Array.from(list).filter((a) => {
      return a.querySelector(".label") == null;
    });
  }

  /**
   * Returns an array of all the digests on the page
   */

  get digests() {
    let list = this.main.querySelectorAll(".digest");
    return Array.from(list);
  }

  /**
   * Returns an array of all the zones on the page
   */

  get zones() {
    let list = this.main.querySelectorAll(".zone-el");
    return Array.from(list).map((z) => {
      z.classList.remove("flex-columns", "rail", "main-stage");
      return z;
    });
  }

  /**
   * Returns the first zone to match a query selector
   * Can take a query string or an integer to get the zone.
   */

  zone(qs) {
    if(Number.isInteger(qs)) qs = `#zone-el-${qs}`;
    return this.zones.find((z) => {
      return z.matches(qs);
    });
  }

  /**
   * Gets the SDS stylesheet from the main site to use in the Shadow DOM
   */

  get sds() {
    let mi = document.head.querySelector("link[href*=mi-styles]");
    let sds = document.head.querySelector("link[href*=sds]");
    return mi || sds;
  }

  /**
   * Returns a new style tag in the head for this element
   */

  get style() {
    // Check to see if there is already one there
    let current = document.head.querySelector(`style[data-element=${this.localName}]`);
    if(current) return current;

    // Create a new on if not
    let style = document.createElement("style");
    style.dataset.element = this.localName;
    document.head.appendChild(style);
    return style;
  }

  /**
   * Returns the theme
   */

  get theme() {
    return this.getAttribute("theme");
  }
}

/**
 * Register the skin
 */

customElements.define("simple-grid", SimpleGrid);

/**
 * Export for module
 */

export default SimpleGrid;
