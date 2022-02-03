/**
 * Premium Topper
 */

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
        --header-family: var(--premium-serif);
        --text-family: var(--sans);
      }

      :host(.loaded) ::slotted(*) {
        opacity: 1 !important;
      }

      slot {
        display: block;
        margin: 0;
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
        font-size: 13px;
        font-family: var(--sans);
        font-weight: 400;
        color: var(--subYellow);
        text-transform: uppercase;
        margin: 0;
      }

      .headline::slotted(h1) {
        --header-size: calc(36px + (60 - 36) * ( 100vw - 400px) / (1440 - 400));
        --header-weight: 400;
        --line-height: 1.1em;
        margin: 0;
      }

      .content::slotted(*) {
        margin-top: 0;
      }

      .content::slotted(h3) {
        --header-size: 13px;
        --header-weight: 400;
        --header-family: var(--sans);
        --header-color: var(--subYellow);
        --header-transform: uppercase;
        margin-top: var(--gap);
      }

      .media::slotted(.pt-video) {
        position: relative;
        width: 100%;
        padding-top: 56.25%;
      }

      @media(min-width: 768px) {
        .container {
          grid-template-columns: 1fr 1fr;
          grid-template-areas:
            "label label"
            "headline media"
            "content media";
        }

        .headline {
          grid-area: headline;
        }

        .content {
          grid-area: content;
        }

        .media {
          grid-area: media;
        }
      }
    </style>

    <div class="container grid">
      <h4 class="label"><b>Your community portal:</b> what you need to know</h4>
      <slot name="headline" class="headline"></slot>
      <slot name="media" class="media"></slot>
      <slot class="content"></slot>
    </div>
    `;
    return t;
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
    console.log(data.media);
    switch(data?.media?.type) {
      case "photo":
        if(data.media.url) {
          this.insertAdjacentHTML("beforeend", `
          <figure slot="media">
            <img src="${data.media.url}">
            <figcaption>${data.media.caption} <span class="byline">${data.media.photographer.toUpperCase()}</span></figcaption>
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
            <figcaption>${data.media.caption} <span class="byline">${data.media.photographer.toUpperCase()}</span></figcaption>
          </figure>`);
        }
        break;
    }

    // Clean up a bit
    this.querySelectorAll("h1").forEach(ele => ele.slot="headline");

    // Show it up
    this.classList.add("loaded");
  }
}

// Register the element
customElements.define("premium-topper", PremiumTopper);

// ES export
export default PremiumTopper;
