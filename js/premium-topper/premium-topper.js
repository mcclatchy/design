/**
 * Premium Topper
 */

import "./exclusive-card.js";

class PremiumTopper extends HTMLElement {

  /**
   * Shadow DOM template
   */

  get template() {
    let t = document.createElement("template");
    t.innerHTML = `
    <style>
      :host {
        display: block;
        --hf: var(--premium-serif);
        --half-gap: calc(var(--gap) / 2);
      }

      :host(.loaded) ::slotted(*) {
        opacity: 1 !important;
      }

      /* Temporary fix pre-1.15.16 */
      slot[name="headline"]::slotted(.h1) {
        --hc: var(--premium-tc) !important;
        --ht: none !important;
      }

      .container {
        display: grid;
        gap: var(--gap);
        max-width: var(--section-width);
        margin: 0 auto;
      }

      .content {
        max-width: 450px;
      }

      .label {
        font: 400 13px var(--sans);
        color: var(--premium-impact);
        text-transform: uppercase;
        margin: 0;
      }

      .content::slotted(*) {
        margin-top: 0;
      }

      .media::slotted(.pt-video) {
        position: relative;
        width: 100%;
        padding-top: 56.25%;
      }

      .exclusives {
        overflow: hidden;
      }

      .exclusives .label {
        display: block;
        font-weight: bold;
        padding-bottom: var(--spread);
        border-bottom: 1px solid #ffffff30;
      }

      .slider {
        width: auto;
        overflow-x: scroll;
      }

      .row {
        display: inline-flex;
        align-items: center;
        padding: var(--half-gap) 0;
      }

      .slider::-webkit-scrollbar {
        height: 3px;
      }

      .slider::-webkit-scrollbar-thumb {
        background: #ffffff30;
      }

      .slider::--webkit-scrollbar-track {
        background: transparent;
      }

      @media(min-width: 768px) {
        .container {
          grid-template-columns: 1fr 1fr;
          grid-template-rows: auto auto 1fr;
          grid-template-areas:
            "label label"
            "headline media"
            "content media"
            "exclusives exclusives";
        }

        .label {
          grid-area: label;
        }

        .headline {
          grid-area: headline;
        }
        
        .media {
          grid-area: media;
        }

        .content {
          grid-area: content;
        }

        .exclusives {
          grid-area: exclusives;
        }
      }

      @media(min-width: 1024px) {
        .row {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
        }

        .row ::slotted(exclusive-card) {
          grid-template-columns: 1fr 60px;
        }
      }
    </style>

    <div class="container grid">
      <span class="label"><b>Your community portal:</b> what you need to know</span>

      <div class="headline">
        <slot name="headline"></slot>
      </div>

      <div class="media">
        <slot name="media"></slot>
      </div>

      <div class="content">
        <slot></slot>
      </div>

      <div class="exclusives">
        <span class="label">Insider Exclusives</span>
        <div class="slider">
          <div class="row">
            <slot name="exclusives"></slot>
          </div>
        </div>
      </div>
    </div>
    `;
    return t;
  }

  /**
   * Getters and setters
   */

  get moved() {
    return this.dataset.moved;
  }

  set moved(val) {
    this.dataset.moved = val;
  }

  /**
   * Called once when instantiated
   */

  constructor() {
    super();

    // Add the Shadow DOM
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(this.template.content.cloneNode(true));

    // Fetch the data
    this.render();
  }

  /**
   * Called when added or moved in the DOM
   */

  connectedCallback() {
    if(!this.moved) {
      this.move();
    }
  }

  /**
   * Fetches a structure from the ProdX app
   *
   * Note: prolly need to check for a bas status message here
   */

  async render() {
    const endpoint = `https://storage.googleapis.com/mc-high-impact/prodx/premium-topper/docs/${this.dataset.id}.json`;
    const response = await fetch(endpoint);
    const data = await response.json();
    
    // Inject the content
    this.insertAdjacentHTML("afterbegin", data?.html.portal);

    // Add in the media
    switch(data.media?.type) {
      case "photo":
        if(data.media.url) {
          this.insertAdjacentHTML("beforeend", `
          <figure slot="media">
            <img src="${data.media.url}">
            <figcaption>${data.media?.caption || ""} <span class="byline">${data.media.photographer?.toUpperCase() || ""}</span></figcaption>
          </figure>`);
        } else {
          console.warn("No image source for premium topper");
        }
        break;
      case "video":
        if(data.media.url) {
          this.insertAdjacentHTML("beforeend", `
          <figure slot="media">
            <div class="embed-video-wrapper">
              <iframe src="${data.media.url}"></iframe>
            </div>
            <figcaption>${data.media?.caption || ""} <span class="byline">${data.media.photographer?.toUpperCase() || ""}</span></figcaption>
          </figure>`);
        }
        break;
    }

    // Add any exclusives
    if(data.exclusives.length) {
      data.exclusives.slice(0, 3).forEach(e => {
        this.insertAdjacentHTML("beforeend", `
          <exclusive-card slot="exclusives">

            ${e.thumbnail ? `
            <img slot="media" src="${e.thumbnail}">
            ` : ''}

            <p><b>${e.title}</b></p>
            <p><a href="${e.url}">${e.summary || e.caption || ""}</a></p>
          </exclusive-card>
        `);
      });
    } else {
      this.shadowRoot.querySelector(".exclusives").remove();
    }

    // Swap H1 elements for Dana/SEO
    this.querySelectorAll("h1").forEach(ele => {
      let h3 = document.createElement("h3");
      h3.classList.add("h1");
      h3.innerHTML = ele.innerHTML;
      h3.slot = "headline";

      ele.replaceWith(h3);
    });

    // Append a hash to all links for analytics
    this.querySelectorAll("a").forEach(ele => ele.hash = "subtopper");

    // Show it up
    this.classList.add("loaded");
  }

  /**
   * Moves the element into position
   */

  move() {
    const header = document.querySelector("#mastheadVueContainer");
    const parentSection = this.closest("section");

    // Only run this once
    this.moved = true;

    // Move it
    header.insertAdjacentElement("afterend", this);
    
    // Clean up the empty parent (if there)
    if(parentSection.children.length == 0) {
      parentSection.remove();
    }
  }
}

// Register the element
customElements.define("premium-topper", PremiumTopper);

// ES export
export default PremiumTopper;
