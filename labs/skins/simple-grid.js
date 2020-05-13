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
    <style>
    :host {
      display: block;
    }

    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      grid-gap: 30px;
      max-width: 1140px;
      margin: 30px auto;
    }

    @media(min-width: 660px) {
      ::slotted(.photo-lede) {
        grid-column: 1/-1;
      }

      ::slotted(.video-lede) {
        grid-column: 1/3;
        grid-row: 1/3;
      }
      
      ::slotted(.zone-el) {
        grid-column: 1;
        align-self: center;
        justify-self: center;
      }
    }

    /* Dark Theme */

    :host([theme=dark]) {
      background-color: #222;
      color: white;
      --tc: white;
      --lc: white;
    }

    :host([theme=dark]) ::slotted(.card) {
      background-color: #373737 !important;
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
    this.handleLedeStory();

    // Append articles
    this.articles.forEach((a, i) => {
      this.appendChild(a);
    });

    // Inject zones
    this.handleZones();

    // Entry point for extensions
    this.beforeMove();

    // Move this element into position
    this.main.insertAdjacentElement("beforebegin", this);
    this.main.remove();

    // Check for a set theme
    this.handleTheme();

    // Entry point for extensions 
    this.beforeShow();

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
   * Returns a new style tag in the head labeled for this element
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
   * Modifies the lead story
   */

  handleLedeStory() {
    let lede = this.articles[0];

    if(lede.querySelector(".video") != null) {
      lede.classList.add("video-lede");
    } else {
      this.articles[0].classList.add("photo-lede", "horizontal", "impact", "in-depth");
    }
  }

  /**
   * Makes adjutments based on theme
   */

  handleTheme() {
    let theme = this.getAttribute("theme");

    switch(theme) {
      case "dark":
        this.style.sheet.insertRule("body { background-color: #222 }");
        break;
      default:
        // Do nothing
    }
  }

  /**
   * Injects zones if specified
   */

  handleZones() {
    let zones = this.getAttribute("zones");

    switch(zones) {
      case "simple":
        this.insertBefore(this.zone(3), this.articles[4]);
        this.insertBefore(this.zone(5), this.articles[4]);
        this.insertBefore(this.zone(6), this.articles[4]);
        this.insertBefore(this.zone(7), this.articles[8]);

        let z8 = this.zone(8);
        z8.childNodes[1].hidden = true;
        z8.classList.add("d-md");
        this.insertBefore(z8, this.articles[8]);
        break;
      default:
        // Do nothing
    }
  }

  /**
   * Run right before the content is moved
   */

  beforeMove() {
    // Made for extending. Do nothing.
  }

  /**
   * Runs right before fade is removed
   */

  beforeShow() {
    // Made for extending. Do nothing.
  }
}

/**
 * Register the skin
 */

customElements.define("simple-grid", SimpleGrid);
