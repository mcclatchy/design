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
        --sans: "Noto Sans", "Inter", sans-serif;
      }

      :host ::slotted(*) {
        opacity: 1 !important;
      }

      /* Temporary fix pre-1.15.16 */
      slot[name="headline"]::slotted(.h1) {
        --hc: var(--premium-tc) !important;
        --ht: none !important;
      }

      .container {
        display: grid;
        grid-gap: var(--half-gap) var(--gap);
        max-width: var(--section-width);
        margin: 0 auto;
      }

      .label {
        font: 400 14px var(--sans);
        color: var(--premium-impact);
        text-transform: uppercase;
        margin: 0;
      }

      .content ::slotted(*) {
        margin-top: 0;
      }

      .content ::slotted(h3) {
        font: 700 14px var(--sans) !important;
      }

      .media ::slotted(.pt-video) {
        position: relative;
        width: 100%;
        padding-top: 56.25%;
      }

      /* Exclusives */

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

      :host(.exclusives-only) {
        padding-bottom: 0 !important;
      }

      :host(.exclusives-only) .container > .label,
      :host(.exclusives-only) .headline,
      :host(.exclusives-only) .content,
      :host(.exclusives-only) .media {
        display: none;
      }

      @media(min-width: 768px) {
        .container {
          grid-template-columns: 1fr 1fr;
          grid-template-rows: auto auto 1fr auto;
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
          max-width: 600px;
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

        /* Media layout changes */

        :host(.photo-media) .container {
          grid-template-columns: 2fr 1fr;
          grid-gap: var(--half-gap) calc(var(--gap) * 1.5);
        }

        /* Exclusives only layout changes */

        :host(.exclusives-only) .container {
          grid-template-rows: unset;
          grid-template-areas: "exclusives exclusives";
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

    // Subscriber flag
    this.subscriber = document.documentElement.classList.contains("msb");

    // Add the Shadow DOM
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(this.template.content.cloneNode(true));
  }

  /**
   * Called when added or moved in the DOM
   */

  connectedCallback() {
    if(!this.subscriber) {
      this.remove();
    } 
    else if(!this.moved) {
      // Render now returns a promise to better handle different outcomes
      let render = this.render();

      render.catch(err => {
        console.warn(err);
        this.remove();
      });

      render.then(() => {
        this.move();
        this.hidden = false;
      });
    }
  }

  /**
   * Fetches a structure from the ProdX app
   *
   * This function now returns a promise so we can handle errors more efficiently
   * and use them to determine visibility.
   */

  async render() {
    const endpoint = `https://storage.googleapis.com/mc-high-impact/prodx/premium-topper/docs/${this.dataset.id}.json`;
    const response = await fetch(endpoint);
    const data = await response.json();

    // Inject the content
    this.insertAdjacentHTML("afterbegin", data?.html.portal);

    // Add media
    switch(data.media.type) {
      case "photo":
        if(data.media.url) {
          this.classList.add("photo-media");
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
          this.classList.add("video-media");
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

    // Add exclusives
    if(data.exclusives?.length) {

      // Exclusives only has some custom styles
      if(!data.portal.length) {
        let bigNews = document.querySelector(".big-news");

        // We made the call to programmatically hide the topper if
        // there are only exclusives and if Big News is on the page
        if(bigNews) {
          return Promise.reject("premium-topper: exclusive-only with big-news will not render");
        } else {
          this.classList.add("exclusives-only");
        }
      }

      data.exclusives.slice(0, 3).forEach(e => {
        this.insertAdjacentHTML("beforeend", `
          <exclusive-card slot="exclusives">

            ${e.thumbnail ? `
            <img slot="media" src="${e.thumbnail}">
            ` : ''}

            <p><b>${e.title}</b></p>
            <p>${e.summary || e.caption || ""}</p>
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
    // This ties to SDS so please do not remove without a release
    this.classList.add("loaded");

    // Return a successful promise
    return Promise.resolve(true);
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
    if(parentSection?.children.length == 0) {
      parentSection.remove();
    }
  }
}

// Register the element
customElements.define("premium-topper", PremiumTopper);

// ES export
export default PremiumTopper;
