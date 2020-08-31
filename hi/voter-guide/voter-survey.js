/**
 * Candidate Survey element
 * 2020 Voter Guide
 */

import VoterBaseElement from "./voter-base-element.js";

class VoterSurvey extends VoterBaseElement {

  static get observedAttributes() {
    return ["sid"]
  }

  get template() {
    let t = document.createElement("template");
    t.innerHTML = `
    <link rel="stylesheet" href="${this.sds}" />
    <style>
      :host {
        display: flex;
        flex-direction: column;
        min-height: 100%;
      }

      .package {
        --hf: var(--sans);
        --hw: 700;
        --ht: uppercase;
        margin: 0;
      }

      .c-details {
        padding: 15px 0;
        --hf: var(--serif);
        --hw: normal;
        --ht: none;
      }

      .c-details > :nth-child(n+1) {
        margin-top: 5px;
      }

      .intro {
        flex: none;
        padding-bottom: 0;
      }

      .questions {
        flex: 1;
      }

      .question {
        --ht: none;
      }

      .expander {
        align-self: stretch;
        justify-content: space-between;
        align-items: flex-start;
      }

      .expander:after {
        min-width: 14px;
      }

      .party {
        display: inline-block;
        color: #757575;
        font-weight: bold;
        text-transform: uppercase;
        font-size: 0.875rem;
        font-family: var(--sans);
      }

      .about {
        background-color: #f4f4f4;
        flex: none;
      }

      :host([mode="story"]) {
        max-width: var(--story-width) !important;
        margin: 0 auto;
        padding: 30px 0;
        --tf: var(--sans);
      }

      :host([mode="story"]) .package {
        padding: 15px 0;
      }

      slot::slotted(:last-child) {
        margin-bottom: 0 !important;
      }
    </style>

    <div class="package intro">
      <h2>Compare the candidates</h2>
      <slot></slot>
    </div>

    <div class="questions">
      ${[...this.questions].map((q, i) => `
      <div class="package question">
        <h4 class="expander ${i == 0 && !this.storyMode ? "open" : ""}" onclick="this.classList.toggle('open')">${q}</h4>
        ${this.survey.map(s => `
        <p class="summary"><b>${s.name}${s.party ? ` (${s.party[0]})` : ''}:</b> ${s.questions[q]}</p>
        `).join('')}
      </div>
      `).join('')}
    </div>

    <div class="package about">
      <h4 class="expander" onclick="this.classList.toggle('open')">More about the candidates</h3>
      ${this.survey.map(s => `
      <div class="package c-details">
        <h3>${s.name} <span class="party">${s.party}</span></h3>
        ${Object.keys(s.details).map(k => `
        <p class="summary"><b>${k.replace(/\:\s*$/, "")}:</b> ${s.details[k]}</p>
        `).join('')}
      </div>
      `).join('')}
    </div>

    `;
    return t;
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  get storyMode() {
    return this.getAttribute("mode") == "story";
  }

  get sid() {
    return this.getAttribute("sid");
  }

  set sid(val) {
    if(!val) {
      this.removeAttribute("sid");
    } else {
      this.setAttribute("sid", val);
    }
  }

  attributeChangedCallback(name, ov, nv) {
    this.stamp();
  }

  async stamp() {
    let feed = await this.fetchSurvey(this.sid);

    try {
      this.survey = feed.data.survey.surveyData;

      this.questions = new Set();
      this.survey.forEach(s => {
        let keys = Object.keys(s.questions);
        keys.forEach(key => {
          this.questions.add(key);
        });
      });

      this.shadowRoot.appendChild(this.template.content.cloneNode(true));
    } catch(err) {
      console.error("Could not parse survey feed:", err);
    }

    // Let Grandma and Grandpa know we're done.
    let event = new CustomEvent("survey-loaded", {
      bubbles: true,
      composed: true
    });
    this.dispatchEvent(event);

    // Style the parent embed if story mode
    if(this.storyMode) {
      let embed = this.closest(".embed-infographic");
      embed.style.cssText = `max-width: 100%; background-color: #f4f4f4;`;
    }
  }
}

// Register the element
customElements.define("voter-survey", VoterSurvey);

// ES6 default export
export default VoterSurvey;
