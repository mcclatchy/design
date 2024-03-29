/**
 * Dummy ad component
 */

class FakeAd extends HTMLElement {

  // Watch a couple of attributes for changes
  static get observedAttributes() {
    return ["order", "size"];
  }

  // Updating the order shifts where the ad sits in the grid
  get order() {
    return this.getAttribute("order");
  }

  set order(val) {
    if(val) {
      this.setAttribute("order", val);
    } else {
      this.removeAttribute("order");
    }
  }

  // Shadow DOM template
  get template() {
    let t = document.createElement("template");
    t.innerHTML = `
    <style>
      :host {
        display: flex !important;
        align-items: center;
        justify-content: center;
        order: var(--order);
      }

      .ad {
        display: none;
        background-color: var(--color, #f2b6be);
        font-family: var(--font-family, var(--sans));
        font-size: 24px;
      }

      :host(.rendered) .ad {
        display: flex;
        align-items: center;
        justify-content: center;
      }

      :host(.fill) {
        background-color: var(--color);
      }
    </style>

    <div class="ad">${this.text}</div>
    `;
    return t;
  }

  // Load the template on construction
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(this.template.content.cloneNode(true));

    // Convenience
    this.ad = this.shadowRoot.querySelector(".ad");
  }

  // Called when added to the DOM
  connectedCallback() {
    faIntersectionObserver.observe(this);
    faResizeObserver.observe(this);
  }

  // Called when removed from the DOM
  disconnectedCallback() {
    faResizeObserver.unobserve(this);
  }

  // Fires when a watched attribute changes
  attributeChangedCallback(name, ov, nv) {
    switch(name) {
      case "order":
        this.style.setProperty("--order", nv);
        break;
      case "size":
        this.renderAd(...this.size);
        break;
      default:
        // Do nothing
    }
  }

  // Size can take a single array, or nested array sizes 
  // using the following format: [width, height]
  get size() {
    let s = this.getAttribute("size");

    if(s) {
      try {
        let p = JSON.parse(s);

        if(Array.isArray(p[0])) {
          for(let i = 0; i < p.length; i++) {
            if(this.hasRoom(...p[i])) return p[i];
          }
        } else if(this.hasRoom(...p)) {
          return p;
        }
      } catch(e) {
        console.warn("fake-ad size could not be parsed", e);
      }
    }

    return [300, 250]
  }

  // Checks the width of the container to restrict ads
  hasRoom(width) {
    return width <= window.outerWidth;
  }

  // Render an ad
  renderAd(width, height) {
    this.ad.style.width = `${width}px`;
    this.ad.style.height = `${height}px`;

    // Adjust the container height
    let zone = this.closest(".zone");
    if(zone) {
      zone.style.setProperty("--height", `${height}px`);
    }
  }

  get text() {
    return this.getAttribute("text") || "";
  }
}

// ResizeObserver
var faResizeObserver = new ResizeObserver(entries => {
  entries.forEach(e => {
    let ad = e.target;
    ad.renderAd(...ad.size);
  });
});

// IntersectionObserver
var faIntersectionObserver = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if(e.isIntersecting) {
      let ad = e.target;
      setTimeout(() => {
        ad.renderAd(...ad.size);
        ad.classList.add("rendered");
      }, 150);
    }
  });
});


// Register the element
customElements.define("fake-ad", FakeAd);
