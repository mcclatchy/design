/**
 * Missouri Gun Project
 */

class NamePanel extends HTMLElement {

  get template() {
    let t = document.createElement("template");
    t.innerHTML = `
    <style>
      :host {
        display: block;
        padding: 15px;
      }

      .wall {
        text-align: center;
        line-height: var(--name-line-height);
      }
      
      .wall.calculating {
        text-align: left;
      }

      span {
        display: inline-block;
        font-size: var(--name-size);
      }

      span:nth-of-type(n+2):not(.nb):before {
        content: "";
        display: inline-block;
        width: 0.35em;
        height: 0.35em;
        padding: 0 0.5em;
        vertical-align: middle;
        background: url("data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMiAyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxjaXJjbGUgY3g9IjEiIGN5PSIxIiByPSIxIiAvPjwvc3ZnPgo=") no-repeat center center;
        transform: translateY(-.1em);
      }

      span.faded,
      span.faded:before,
      span.faded + span:not(.faded):before {
        opacity: 0.1;
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

      .filters {
        display: flex;
        align-items: center;
        margin: 15px auto;
        max-width: var(--story-width);
        padding: 0 15px;
      }

      button {
        font: 0.875rem/1em var(--sans);
        text-transform: uppercase;
        background: none;
        border: 1px solid #222;
        border-radius: 2px;
        cursor: pointer;
        padding: 8px;
        margin: 0 4px;
      }
    </style>

    <slot name="above"></slot>
    <div class="wall"></div>
    <div class="filters">
      <button data-city="kansas city, mo">Kansas City, MO</button>
      <button data-city="kansas city, kan">Kansas City, KS</button>
      <button data-city="olathe">Olathe, KS</button>
    </div>
    <slot name="below"></div>
    `;
    return t;
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(this.template.content.cloneNode(true));

    // Bind the event handlers
    this.handleFilter = this.handleFilter.bind(this);
  }

  async connectedCallback() {
    // Style the wrapper
    this.parentElement.classList.add("full-bleed");

    // Get the data
    let response = await fetch(this.src);
    let sheet = await response.json();
    this.render(sheet);

    // We're good to show
    this.hidden = false;

    // Listen for the filters
    let filters = this.shadowRoot.querySelector(".filters");
    filters.addEventListener("click", this.handleFilter);

    // Watch for resizing
    // resizeObserver.observe(this);
  }

  get src() {
    return this.getAttribute("src");
  }

  render(sheet) {
    const wall = this.shadowRoot.querySelector(".wall");

    while(wall.firstChild) {
      wall.lastChild.remove();
    }

    sheet.forEach((row) => {
      let span = document.createElement("span");
      span.row = row;
      span.textContent = row["Victim name"];
      wall.appendChild(span);
    });

    this.cleanLeftNames();
  }

  // Clean up the left side
  cleanLeftNames() {
    const wall = this.shadowRoot.querySelector(".wall");

    let bounds = wall.getBoundingClientRect();
    wall.classList.add("calculating");

    Array.from(wall.children).forEach((s) => {
      let sBounds = s.getBoundingClientRect();
      s.classList.toggle("nb", sBounds.left - bounds.left == 0);
    });

    wall.classList.remove("calculating");
  }

  handleFilter(e) {
    const wall = this.shadowRoot.querySelector(".wall");

    let city = e.target.dataset.city;
    if(city) {
      for(let name of wall.children) {
        name.classList.toggle("faded", name.row["City"].toLowerCase() != city);
      }
    }
  }
}

// Clean up left on resize
const resizeObserver = new ResizeObserver((entries) => {
  for(let entry of entries) {
    debounce(entry.target.cleanLeftNames, 1000);
  }
});

const debounce = (callback, time) => {
  let interval;
  return (...args) => {
    clearTimeout(interval);
    interval = setTimeout(() => {
      interval = null;
      callback(...args);
    }, time);
  };
};

// Register the element
customElements.define("name-panel", NamePanel);

// ES export
export default NamePanel;
