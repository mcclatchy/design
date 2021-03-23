/**
 * Series grid element
 */

import {trackInteraction, trackPassive} from "../../tracking.js";

class SeriesGrid extends HTMLElement {

  get template() {
    const t = document.createElement("template");
    t.innerHTML = `
    <style>
      :host {
        display: block;
        margin: 0;
        padding: 15px 0;
        max-width: 100%;
      }

      .content {
        margin: 0 auto;
        max-width: var(--section-width, 1140px);
      }

      .grid {
        display: grid;
        grid-gap: 30px;
        grid-template-columns: var(--columns, repeat(auto-fit, minmax(300px, auto)));
        padding: var(--grid-padding, 15px 0);
      }

      .intro {
        display: block;
        margin: 0 auto;
        max-width: var(--story-width);
        text-align: var(--intro-alignment, center);
      }

      .intro.not-empty {
        padding: var(--intro-padding, 15px);
      }

      .intro::slotted(*) {
        margin: var(--ps, 10px) 0 0 0;
      }

      .intro::slotted(*:first-child) {
        margin-top: 0;
      }

      :host([feature-next]) ::slotted(.next-story) {
        grid-row: 1;
        grid-column: 1/-1;
      }

      :host([inline]) {
        --lc: #222;
        --lhc: #222;
      }

      :host(.impact),
      :host(.promo) {
        --paper-color: transparent;
      }

      @media(min-width: 600px) {
        :host {
          padding: 15px;
        }

        :host([inline]) {
          --padding: 15px 0 0 0;
        }

        :host([inline]) ::slotted(.horizontal) {
          --padding: 15px;
        }
      }
    </style>

    <div class="content">
      <slot name="intro" class="intro"></slot>
      <slot class="grid"></slot>
    </div>
    `;
    return t;
  }

  constructor() {
    super();
  }

  get stories() {
    return document.querySelectorAll("#story-series .card");
  }

  get cards() {
    return Array.from(this.querySelectorAll(".card"));
  }

  get article() {
    return document.querySelector(".story-body");
  }

  get embed() {
    return this.closest(".embed-infographic");
  }

  get seriesCard() {
    return this.cards?.find((s) => {
      let sid = s.querySelector("a")?.href?.match(/[0-9]{7,}/);
      let tid = mistats?.cmsid?.match(/[0-9]{7,}/);
      return sid[0] == tid[0];
    });
  }

  get next() {
    return this.seriesCard?.nextElementSibling || this.cards?.[0];
  }

  // Fires when added to the DOM
  async connectedCallback() {
    // Only run this once
    if(this.shadowRoot) return;

    // Load the Shadow DOM
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(this.template.content.cloneNode(true));

    // Clone the stories from the series nav
    this.stories.forEach((s) => {
      let links = s.querySelectorAll("a");
      links.forEach((l) => {
        l.href = `${l.href}#storylink=series-grid`;
      })

      this.appendChild(s.cloneNode(true));
    });

    // Attribute flag enables the featured treatment
    if(this.hasAttribute("feature-next")) {
      this.highlightNextStory();
    } else {
      this.next?.classList.add("next-story");
    }

    // Attribute flag to de-dupe
    if(this.hasAttribute("de-dupe")) {
      this.seriesCard?.remove();
    }

    // Attribute flag to hide elements
    if(this.hasAttribute("hide")) {
      let qs = this.getAttribute("hide");
      this.hide(qs);
    }

    // Attribute flag to remove elements from the DOM
    if(this.hasAttribute("remove")) {
      let qs = this.getAttribute("remove");
      this.remove(qs);
    }

    // Add some padding to the intro if it has assigned elements
    let intro = this.shadowRoot.querySelector("slot[name=intro]");
    let notEmpty = intro.assignedElements().length > 0;
    intro.classList.toggle("not-empty", notEmpty);

    // Set up passive interaction tracking
    trackPassive(this);

    // Set up active interaction tracking
    this.addEventListener("click", (e) => {
      let a = e.target.href ? e.target : e.target.closest("a");
      if(a.href) {
        trackInteraction("series-grid-clicked", true);
      }
    });

    // Inline flag displays where embedded
    if(this.hasAttribute("inline")) {
      this.embed.classList.add("full-bleed");
      this.embed.style.margin = "0px";
    } else {
      this.move();
    }

    // Dispatch a complete event
    let e = new Event("series-grid-complete");
    this.dispatchEvent(e);
  }

  // Moves the grid underneath the story body and removes previous content
  move() {
    // this.moved = true;

    // Hide the embed to eliminate empty margin space
    this.embed.hidden = true;

    // Move this element under the article
    this.article.insertAdjacentElement("afterend", this);

    // Remove what was already there
    this.remove("series-grid ~ *");

    // Flag that the element has moved
    let e = new Event("series-grid-moved");
    this.dispatchEvent(e);
  }

  // Emphasize the next story in the list
  highlightNextStory() {
    this.next.classList.add("next-story", "impact", "horizontal", "in-depth");
    this.next.querySelector("h3").classList.add("h1");
  }

  // Adds the hidden attribute for all elements in the query selector 
  hide(qs) {
    let elements = document.querySelectorAll(qs);
    elements.forEach((ele) => {
      ele.hidden = true;
    });
  }

  // Removes all elements in the query selector 
  remove(qs) {
    let elements = document.querySelectorAll(qs);
    elements.forEach((ele) => {
      ele.remove();
    });
  }
}

// Register the element
customElements.define("series-grid", SeriesGrid);

// ES6 export
export default SeriesGrid;
