/**
 * Base section theming file
 * A simple grid with some options and slots above and below. 
 */

export default class SimpleGrid extends HTMLElement {

  /**
   * Template for the Shadow DOM
   */

  get template() {
    let t = document.createElement("template");
    t.innerHTML = `
    <style>
    :host {
      display: block;
      transition: opacity .5s;
    }

    :host(.faded) {
      opacity: 0;
    }

    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      grid-gap: 30px;
      grid-auto-flow: dense;
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

    :host([data-theme=dark]) {
      background-color: #222;
      color: white;
      --tc: white;
      --lc: white;
    }

    :host([data-theme=dark]) ::slotted(.card) {
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

    this.events = {
      moved: new Event("moved"),
      visible: new Event("visible")
    }
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

    // Entry point for extensions
    this.beforeMove();

    // Append articles
    this.articles.forEach((a, i) => {
      this.appendChild(a);
    });

    // Inject zones
    this.handleZones();

    // Move this element into position and alert
    this.main.insertAdjacentElement("beforebegin", this);
    this.dispatchEvent(this.events.moved);
    this.main.remove();

    // Check for nav 
    this.handleNav();

    // Check for a set theme
    this.handleTheme();

    // Entry point for extensions 
    this.beforeShow();

    // Unfade
    this.dispatchEvent(this.events.visible);
    window.setTimeout(() => {
      this.classList.remove("faded");
    }, 50);
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
    function digest(a) {
      return a.querySelector(".label") == null;
    }

    let qs = "article.card";
    let list = this.main.querySelectorAll(qs);
    let arr = Array.from(list).filter(digest);

    if(arr.length == 0) {
      list = this.querySelectorAll(qs);
      arr = Array.from(list).filter(digest);
    }

    return arr;
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
   * Runs right before the articles are moved.
   * Default adjusts the lede story based on what type it is.
   */

  beforeMove() {
    let lede = this.articles[0];
    if(lede.querySelector(".video") != null) {
      lede.classList.add("video-lede");

      // global adjustments to the card
      this.style.sheet.insertRule(`
      .video-lede .new-video-design { 
        display: flex;
        flex-direction: column;
        flex: 1;
      }`);

      this.style.sheet.insertRule(`
      @media(min-width: 960px) {
        .video-lede .h1 {
          font-size: 38px;
          line-height: 1.3em;
          font-weight: normal;
          max-width: 550px;
        }
      }
      `);
    } else {
      this.articles[0].classList.add("photo-lede", "horizontal", "impact", "in-depth");
    }
  }

  /**
   * Makes adjutments based on theme
   */

  handleTheme() {
    let theme = this.dataset.theme;

    switch(theme) {
      case "dark":
        this.style.sheet.insertRule(`
          body { 
            background-color: #222 
          }`);

        this.style.sheet.insertRule(`
          .subnav-section-front-organism .subnav-section-title .subnav-section-name,
          .subnav-section-front-organism .subnav-section-container .subnav-section-list .subnav-section-list-item a { 
            color: white !important; 
          }`);

        this.style.sheet.insertRule(`
          .subnav-section-front-organism .subnav-section-title .subnav-section-icon {
            filter: invert(1);
          }
        `);
        break;
      default:
        // Do nothing
    }
  }

  /**
   * Injects zones if specified
   */

  handleZones() {
    switch(this.dataset.zones) {
      case "simple":
        try {
          this.insertBefore(this.zone(3), this.articles[4]);
          this.insertBefore(this.zone(5), this.articles[4]);

          let z6 = this.zone(6);
          z6.setAttribute("slot", "");
          this.insertBefore(z6, this.articles[4]);
        } catch(e) {
          console.warn("Error moving zones:", e);
        }
        break;
      default:
        // Do nothing
    }
  }

  /**
   * Moves section nav on request
   */

  handleNav() {
    switch(this.dataset.nav) {
      case "standard":
        let nav = this.main.querySelector("#nav-section-front");
        if(nav) {
          nav.setAttribute("slot", "nav");
          nav.querySelector("h2").textContent = "More Coverage";
          this.appendChild(nav);
        }
        break;

      default:
        // Do nothing
    }
  }

  /**
   * Runs right before fade is removed
   */

  beforeShow() {
    // Made for extending. Does nothing here.
  }
}

/**
 * Register the skin
 */

customElements.define("simple-grid", SimpleGrid);
