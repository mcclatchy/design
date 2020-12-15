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
      }

      .window {
        position: relative;
        overflow: hidden;
      }

      .grid {
        height: 100%;
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
          grid-template-columns: repeat(var(--columns), 1fr);
        }

        :host(.freshcut) .grid .hl {
          display: none;
        }
      }

      @media(orientation: portrait) {
        .grid {
          grid-template-columns: repeat(var(--rows), 1fr);
        }

        :host(.freshcut) .grid .hp {
          display: none;
        }
      }
    </style>

    <slot name="above"></slot>
    <div class="window">
      <div class="grid"></div>
      <bio-grid-panel></bio-grid-panel>
    </div>
    <slot name="below"></slot>
    `;
    return t;
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(this.template.content.cloneNode(true));
    this._tick = 0;
  }

  async connectedCallback() {
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

    // Loaded up show it if hidden
    this.hidden = false;
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

    while(grid.firstChild) {
      grid.firstChild.remove();
    }

    // Randomize if set
    let people = this.shuffle ? this._shuffle(sheet) : sheet;

    // Cap it if set
    if(this.max) {
      people = people.slice(0, this.max);
    }

    // Figure out the columns 
    // I couldn't figure out a formula these numbers are random trial and error
    let sqrt = Math.sqrt(people.length);
    let columns = Math.ceil(sqrt / .75);
    let rows = Math.ceil(sqrt / 1.25);

    // Set the appropriate columns for landscape and portrait
    this.style.setProperty("--columns", columns);
    this.style.setProperty("--rows", rows);

    // Here we go
    people.forEach((row) => {
      let card = document.createElement("bio-grid-card");
      card.person = row;
      card.src = eval('`' + this.pattern + '`');
      grid.appendChild(card);
    });

    // Checks how many remainders we would have and adds the class to hide
    if(this.freshcut) {
      let lWidows = grid.querySelectorAll(`:nth-last-child(-n + ${people.length % columns})`);
      lWidows.forEach((ele) => { ele.classList.add("hl") });

      let pWidows = grid.querySelectorAll(`:nth-last-child(-n + ${people.length % rows})`);
      pWidows.forEach((ele) => { ele.classList.add("hp") });
      
      this.classList.add("freshcut");
    }

    // Store our elements randomly for timer
    let children = this.shadowRoot.querySelectorAll("bio-grid-card");
    this._random = this._shuffle(Array.from(children));
  }

  deselectAll() {
    this.shadowRoot.querySelectorAll("[selected]").forEach((s) => {
      s.selected = false;
    });
  }

  showNext() {
    if(this._tick > this._random.length) {
      this._tick = 0;
    }

    this.deselectAll();
    this._random[this._tick].click();
    this._tick += 1;
  }

  _handleBioClick(e) {
    let panel = this.shadowRoot.querySelector("bio-grid-panel");
    let template = this.querySelector("template[for='panel']");

    // Toggle the side
    panel.render(e.detail, template);
    panel.play();

    // Fill in the children
    let dataPoints = this.querySelectorAll("[data-column]");
    dataPoints.forEach((d) => {
      d.textContent = e.detail[d.dataset.column];
    });
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
