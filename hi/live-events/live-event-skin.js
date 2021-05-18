/**
 * Live Event Skin (v2)
 * created 6/9/2020
 */

class LiveEventSkin extends HTMLElement {

  constructor() {
    super();
    let style = this.style = document.createElement("style");
    style.id = this.localName;

    style.innerText = `
    .lead-item figcaption {
      padding: 10px 0 0 !important;
    }

    #ConnatixVideoAd,
    .trinity-player-iframe-wrapper,
    .zone.grid.combo,
    #commenting-container,
    .transparency,
    .related-stories,
    .gallery.card,
    live-event-grid .zone {
      display: none !important;
    }

    .story-body {
      padding-bottom: 0;
    }

    .series-nav {
      padding: 0;
    }

    .mi-sticky-player-info {
      color: #222 !important;
      --tc: #222;
    }

    ${this.localName} {
      display: none;
    }
    `;

    document.head.appendChild(style);
  }
}


/**
 * Header that toggles views dependent on a video 
 * being in the lede asset slot.
 */

class LiveEventHeader extends HTMLElement {

  get template() {
    let t = document.createElement("template");
    t.innerHTML = `
    <style>
      :host {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 30px 15px !important;
        background-color: black;
        max-width: 100% !important;
        margin-bottom: 30px !important;
        --hf: var(--serif, "McClatchy Serif");
        --ht: none;
        --tc: white;
        color: white;
      }

      .logo {
        display: block;
        width: var(--logo-width, 350px);
        max-width: 90%;
        margin-bottom: 45px;
      }

      .row {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 45px;
      }

      .row span {
        display: inline-block;
        font: 700 0.875rem var(--sans, "McClatchy Sans");
        width: 105px;
        text-align: right;
        padding-right: 15px;
      }

      .sponsor {
        display: block;
        height: var(--sponsor-height, 30px);
      }

      .rsvp {
        color: var(--bc, white);
        background-color: var(--bbc, #31409F);
        font: 700 large var(--sans);
        border: 1px solid transparent;
        text-transform: uppercase;
        text-decoration: none;
        cursor: pointer;
        padding: .4em 1em;
        box-sizing: border-box;
        border-radius: 2px;
        margin-bottom: 45px;
      }

      :host(.streaming) .rsvp {
        display: none;
      }

      ::slotted(*) {
        margin-bottom: 30px;
        max-width: var(--story-width, 728px);
      }

      ::slotted(figure) {
        width: 100%;
        max-width: 920px;
        margin-bottom: 45px !important;
      }

      ::slotted(.h1) {
        text-align: center;
        margin-top: 0 !important;
      }

      @media(min-width: 768px) {
        :host(.promoting) ::slotted(.h1) {
          max-width: 920px !important;
          font-size: 2.5em !important;
          line-height: 1.25em;
        }
      }

      .newsroom p,
      .newsroom::slotted(p) {
        text-transform: uppercase;
        margin: 0 !important;
        font-family: var(--sans) !important;
        font-size: 1em !important;
      }
    </style>

    ${this.logo ? `
    <img class="logo" src="${this.logo}">
    ` : ""}

    ${this.sponsor ? `
    <div class="row">
      <slot name="sponsor-text"><span>PRESENTED BY</span></slot>
      <img class="sponsor" src="${this.sponsor}">
    </div>
    ` : ""}

    ${this.rsvp ? `
    <a class="rsvp" href="${this.rsvp}">RSVP FOR THE EVENT</a>
    ` : ""}

    <slot></slot>
    <slot class="newsroom" name="newsroom">
      <p>FROM THE 30 LOCAL NEWSROOMS THAT TOGETHER MAKE MCCLATCHY</p>
    </slot>
    `;
    return t;
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(this.template.content.cloneNode(true));
    this.rendered = false;
  }

  connectedCallback() {
    if(!this.rendered) {
      // Set up some variables
      let story = document.querySelector(".story-body");
      let header = story.querySelector(".header");
      let lede = story.querySelector(".header + figure"); 

      // Suck in the stuff we want
      if(lede && lede.querySelector(".video")) {
        this.appendChild(lede);
        this.classList.add("streaming");
      } else {
        lede.remove();
        this.classList.add("promoting");
      }

      this.appendChild(header.querySelector(".h1"));

      // Cleanup
      header.remove();
      
      // Show it then move it up
      this.rendered = true;
      this.hidden = false;
      story.prepend(this);
    }
  }

  get logo() {
    return this.getAttribute("logo");
  }

  get sponsor() {
    return this.getAttribute("sponsor");
  }

  get rsvp() {
    return this.getAttribute("rsvp");
  }
}


/**
 * Grid for the bottom of the page that uses mugshots
 * to organize structure.
 */

class LiveEventGrid extends HTMLElement {
  get template() {
    let t = document.createElement("template");
    t.innerHTML = `
    <style>
      :host {
        display: block;
        max-width: 100% !important;
        padding: 15px !important;
        background-color: black;
        margin: 30px auto 0 !important;
        --tc: white;
        --lc: #A9B1E5 !important;
        --lhc: #A9B1E5 !important;
      }

      .grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        grid-gap: 30px;
        max-width: 960px;
        margin: 0 auto;
        padding: 15px;
      }

      .grid::slotted(.package) {
        padding: 0 !important;
        align-items: center !important;
        text-align: center;
        --ts: 0.875rem;
        --tf: var(--sans);
        --lc: #808CD8 !important;
        --lhc: #808CD8 !important;
      }

      .header::slotted(.package) {
        color: white;
        align-items: center !important;
      }
    </style>

    <slot name="above" class="header"></slot>
    <slot class="grid"></slot>
    `;
    return t;
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(this.template.content.cloneNode(true));
    this.rendered = false;
  }

  connectedCallback() {
    if(!this.rendered) {
      let story = document.querySelector(".story-body");
      let thumbs = story.querySelectorAll("figure.mugshot");

      // Append the groupings
      thumbs.forEach((t, i) => {
        let wrapper = document.createElement("div");
        wrapper.classList.add("package");

        let children = this.nextUntil(t, "figure.mugshot");
        wrapper.appendChild(t);
        children.forEach((c) => {
          wrapper.appendChild(c);
        });

        this.appendChild(wrapper);
      });

      // Clean up the styles
      this.cleanup();

      // Flip it on
      this.rendered = true;
      this.hidden = false;
      story.insertAdjacentElement("beforeend", this);
    }
  }

  // Pulls all siblings between repeating elements
  nextUntil(elem, selector) {
    let siblings = [];
    elem = elem.nextElementSibling;

    while(elem) {
      if(elem.matches(selector)) break;
      siblings.push(elem);
      elem = elem.nextElementSibling;
    }

    return siblings;
  }

  // Cleans up some CSS and such
  cleanup() {
    let style = document.createElement("style");
    style.innerText = `
    ${this.localName} figure.mugshot {
      width: auto !important;
      padding: 0 !important;
    }

    ${this.localName} figure.mugshot .picture {
      margin-left: 0 !important;
      width: 125px;
      height: 125px;
      position: relative;
    }

    ${this.localName} figure.mugshot img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: 50% 20%;
      border-radius: 50%;
      filter: grayscale(1);
    }

    ${this.localName} figcaption {
      display: none;
    }
    `;

    document.head.appendChild(style);
  }
}

// Register the elements
customElements.define("live-event-skin", LiveEventSkin);
customElements.define("live-event-header", LiveEventHeader);
customElements.define("live-event-grid", LiveEventGrid);
