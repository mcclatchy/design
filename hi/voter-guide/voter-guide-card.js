/**
 * We rebuild homepage card
 */

class VoterGuideCard extends HTMLElement {

  get template() {
    let t = document.createElement("template");
    t.innerHTML = `
    <link rel="stylesheet" href="${this.sds}">
    <style>
      :host {
        display: grid;
        grid-gap: 15px;
        align-items: center;
        position: relative;
        background-color: white;
        box-shadow: 
          0 1px 2px 0 rgba(0, 0, 0, .2), 
          0 1px 5px 0 rgba(0, 0, 0, .13);
      }

      @media(min-width: 768px) {
        :host {
          grid-template-columns: 2fr 1fr;
        }
      }

      .video {
        position: relative;
        padding-top: 56.25%;
      }

      iframe {
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        outline: none;
      }

      .logo {
        display: block;
        width: 300px;
        max-width: 100%;
      }
    </style>

    <div class="video">
      <iframe src="${this.video}" frameborder="0" allowfullscreen="true"></iframe>
    </div>

    <div class="package">
      <img class="logo" src="https://media.mcclatchy.com/2020/voter_guide/qa/icons/vg-logo.svg">
      <p class="summary">Make informed choices in upcoming local elections with our Voter Guide. Subscribers can access in-depth surveys chronicling local candidates’ positions on the issues important to your community.</p>
      <a class="button big impact" href="/voter-guide/#hp-card">CHECK IT OUT</a>
    </div>

    `;
    return t;
  }

  constructor() {
    super();
  }

  connectedCallback() {
    // Do nothing if already created
    if(this.shadowRoot) return;

    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(this.template.content.cloneNode(true));

    if(this.page == "homepage") {
      let section = this.parentNode;
      let leadSection = document.querySelector(".lead-section");

      // There is one scenario where something else will 
      // be in the banner option slot along with this
      if(!this.matches(":only-child")) {
        section = document.createElement("section");
        section.appendChild(this);
      }

      if(leadSection) {
        this.hidden = false;
        leadSection.insertAdjacentElement('afterEnd', section);
      }
    }
  }

  get page() {
    // Let's use the settings instead of having to manually do it this time
    return pageInfo["marketInfo.pagelevel"] || this.getAttribute("page");
  }

  get video() {
    return `${this.getAttribute("video")}/video-embed`;
  }

  get sds() {
    let link = document.querySelector("link[href*='mi-styles']");
    if(link) return link.href;
  }
}

// Register the custom element
customElements.define("voter-guide-card", VoterGuideCard);

// ES6 default export
export default VoterGuideCard;
