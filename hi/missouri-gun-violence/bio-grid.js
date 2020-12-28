/**
 * Bio Grid custom element
 * created for the 2020 KC gun project
 */

import "./bio-grid-card.js";
import "./bio-grid-panel.js";

class BioGrid extends HTMLElement {

        // grid-template-columns: repeat(var(--columns), 1fr);
  
  get template() {
    const t = document.createElement("template");
    t.innerHTML = `
    <style>
      :host {
        display: block;
        margin: 0 auto;
      }

      .grid {
        display: grid;
      }

      slot {
        display: block;
        margin: 0 auto;
        max-width: var(--story-width);
        padding: 0 15px;
      }

      slot::slotted(*) {
        margin: 0 0 10px 0;
      }

      @media(orientation: landscape) {
        .grid {
          height: 56.25vw;
          grid-template-columns: repeat(var(--columns), 1fr);
        }
      }

      @media(orientation: portrait) {
        .grid {
          height: 170vw;
          grid-auto-flow: column;
          grid-template-rows: repeat(var(--columns), 1fr);
          grid-template-columns: unset;
        }
      }
    </style>

    <slot name="above"></slot>
    <div class="grid"></div>
    <slot name="below"></slot>
    <bio-grid-panel></bio-grid-panel>
    `;
    return t;
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(this.template.content.cloneNode(true));
    this.tick = 0;
  }

  async connectedCallback() {
    // Loaded up show it if hidden
    this.hidden = false;

    // Style the wrapper
    this.parentElement.classList.add("full-bleed");

    // Get the data
    let response = await fetch(this.src);
    let sheet = await response.json();
    this.render(sheet);

    // Listen for child events
    this.addEventListener("bio-click", this._handleBioClick);
    this.addEventListener("panel-close", this.deselectAll);
    this.addEventListener("panel-ready", this.showNext);
  }

  get src() {
    return this.getAttribute("src");
  }

  get max() {
    return this.getAttribute("max");
  }

  get freshcut() {
    return this.hasAttribute("freshcut");
  }

  get shuffle() {
    return this.hasAttribute("shuffle");
  }

  get pattern() {
    return this.getAttribute("pattern");
  }

  render(sheet) {
    const grid = this.shadowRoot.querySelector(".grid");
    while(grid.firstChild) { grid.firstChild.remove(); }

    // Randomize if set
    let people = this.shuffle ? this._shuffle(sheet) : sheet;

    // Cap it if set
    if(this.max) {
      people = people.slice(0, this.max);
    }

    // Figure out the columns 
    let sqrt = Math.sqrt(people.length);
    let columns = Math.ceil(sqrt / .75);
    this.style.setProperty("--columns", columns);

    // Here we go
    people.forEach((row) => {
      let card = document.createElement("bio-grid-card");
      card.person = row;
      card.src = eval('`' + this.pattern + '`');
      grid.appendChild(card);
    });

    // Checks how many remainders we would have and adds the class to hide
    if(this.freshcut) {
      this.classList.add("freshcut");
      let widows = grid.querySelectorAll(`:nth-last-child(-n + ${people.length % columns})`);
      widows.forEach((ele) => { ele.hidden = true });
    }

    // Store our elements randomly for timer
    this.cards = this.shadowRoot.querySelectorAll("bio-grid-card:not([hidden])");
  }

  deselectAll() {
    this.shadowRoot.querySelectorAll("[selected]").forEach((s) => {
      s.selected = false;
    });
  }

  showNext() {
    this.tick += 1;
    if(this.tick > this.cards.length) {
      this.tick = 0;
    }

    this.deselectAll();
    this.cards[this.tick].click();
  }

  _handleBioClick(e) {
    let panel = this.shadowRoot.querySelector("bio-grid-panel");
    let template = this.querySelector("template[for='panel']");

    // Toggle the side
    panel.render(e.detail, template);
    panel.play();

    let path = e.composedPath();
    if(path && path[0]) {
      this.tick = Array.from(this.cards).indexOf(path[0]);
    }
  }

  _shuffle(array) {
    let m = array.length, t, i;
    while (m) {
      i = Math.floor(Math.random() * m--);
      t = array[m];
      array[m] = array[i];
      array[i] = t;
    }
    return array;
  }
}

// Define the element
customElements.define("bio-grid", BioGrid);

// ES export
export default BioGrid;
