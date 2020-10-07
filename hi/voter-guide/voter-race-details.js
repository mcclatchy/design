/**
 * Ballot Ready race detail view
 * 2020 Voter Guide
 */

import VoterBaseElement from "./voter-base-element.js";

class VoterRaceDetails extends VoterBaseElement {

  get template() {
    let t = document.createElement("template");
    t.innerHTML = `
    <link rel="stylesheet" href="${this.sds}">
    <style>
      :host {
        display: block;
      }

      .package {
        --hf: var(--sans);
        --hw: 700;
        --ht: uppercase;
        margin: 0;
      }

      .candidate {
        grid-template-columns: 125px 1fr;
        grid-gap: 15px;
        padding: 15px;
      }

      .candidate:nth-child(odd) {
        background-color: #f4f4f4;
      }

      .candidate .package > :nth-child(n+1) {
        margin-top: 0;
      }

      .candidate .package .c-header {
        margin: 15px 0 0 !important;
      }

      .candidate .thumb {
        position: relative;
        height: 125px;
        background-color: #ddd;
      }

      .candidate .thumb img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: 50% 20%;
      }

      .candidate .name {
        --hw: normal;
        --hf: var(--serif);
        --ht: none;
      }

      .party {
        color: #757575;
        font-weight: bold;
        text-transform: uppercase;
      }

      .social-media {
        margin-top: 0;
        justify-content: unset;
      }

      .social-media img {
        display: block;
        height: 18px;
        width: 18px;
      }

      .d-list > :first-child {
        margin-top: 0;
      }

      .d-list > :last-child {
        margin-bottom: 0;
      }
    </style>

    <h1 class="package">${this.race.name}</h1>
    <div class="package">
      <h4>Description</h4>
      <p class="summary">${this.race.description}</p>
    </div>

    <h2 class="package">Candidates</h2>
    ${this.race.candidates.map((c, i) => `
    <div class="candidate grid">
      <figure class="thumb">
        ${c.thumb_url ? `<img src="${c.thumb_url}" alt="${this.normalizeName(c)} headshot">` : ''}
      </figure>
      <div class="package">
        <h3 class="name">${this.normalizeName(c)}</h3>
        <summary><span class="party">${c.party_name}</span></summary>

        <div class="experience d-list" data-id="${c.id}" hidden>
          <h4 class="c-header expander" onclick="this.classList.toggle('open')">Experience</h4>
        </div>

        <div class="education d-list" data-id="${c.id}" hidden>
          <h4 class="c-header expander" onclick="this.classList.toggle('open')">Education</h4>
        </div>

        <h4 class="c-header">Links</a>
        <div class="social-media">
          ${this.normalizeLinks(c).map((u, i) => `
          <a href="${u.url}" target="_blank" title="see this candidate's ${u.type} page">
            <img src="https://media.mcclatchy.com/hi/voter-guide/icons/${u.type}.svg" alt="${u.type} icon">
          </a>
          `).join('')}
          <a href="/search?q=${this.normalizeName(c).trim().replace(/\s+/, " ")}" target="_blank" title="search for stories about this candidate">
            <img src="https://media.mcclatchy.com/hi/voter-guide/icons/search.svg" alt="search icon">
          </a>
        </div>
      </div>
    </div>`).join('')}
    `;

    return t;
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  stamp() {
    this.shadowRoot.appendChild(this.template.content.cloneNode(true));

    // Need to fetch candidate info
    const feeds = this.race.candidates.map(c => {
      return this.fetchCandidate(c.id);
    });

    Promise.all(feeds).then(info => {
      info.forEach(i => {
        let data = i.data.voterguideCandidate.data;

        // Experience
        if(data.experience && data.experience.length > 0) {
          const experience = this.shadowRoot.querySelector(`.experience[data-id="${data.id}"]`);
          const sortedExperience = data.experience.sort((a, b) => {
            return a.start_year < b.start_year ? -1 : 1;
          });

          experience.insertAdjacentHTML("beforeend", this.normalizeExperience(sortedExperience));
          experience.hidden = false;
        }

        // Education
        if(data.education && data.education.length > 0) {
          const education = this.shadowRoot.querySelector(`.education[data-id="${data.id}"]`);
          education.insertAdjacentHTML("beforeend", this.normalizeEducation(data.education));
          education.hidden = false;
        }
      });

      // Let Grandma and Grandpa know we're done
      let event = new CustomEvent("details-loaded", { 
        bubbles: true,
        composed: true
      });
      this.dispatchEvent(event);
    });
  }

  // Standardizes the candidate urls for consistent display
  normalizeLinks(c) {
    let sorted = c.urls.sort((a, b) => {
      return a.type < b.type ? 1 : -1;
    });

    let filtered = sorted.filter(d => {
      return d.type && d.type.match(/(facebook|twitter|website)/);
    });

    return filtered;
  }

  // Standardizes experience data from BallotReady
  normalizeExperience(experience) {
    return experience.map((e, i) => {
      let years = '';
      let position = e.position || '';

      if(e.start_year && e.end_year) {
        years = `${e.start_year} &mdash; ${e.end_year}`;
      }

      let positionString = [position.trim(), e.company].filter(Boolean).join(', ');

      return `<p class="summary">${positionString} <span class="bold gray" style="display: block">${years}</span></p>`
    }).join('');
  }

  // Standardizes education data from BallotReady
  normalizeEducation(education) {
    let sorted = education.sort((a, b) => {
      return a.grad_year < b.grad_year ? -1 : 1;
    });

    return sorted.map((e, i) => {
      let schoolString = [ `${e.school.trim()}`, e.grad_year, e.degree ].filter(Boolean).join(", ");

      if(e.major) {
        return `<p class="summary">${schoolString} <span class="bold gray" style="display: block">${e.major}</span></p>`;
      } else {
        return `<p class="summary">${schoolString}</p>`;
      }
    }).join('');
  }
}

// Register the element
customElements.define("voter-race-details", VoterRaceDetails);

// ES6 default export
export default VoterRaceDetails;
