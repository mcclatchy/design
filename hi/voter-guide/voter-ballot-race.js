/**
 * Ballot Race
 * 2020 Voter Guide
 */

import VoterBaseElement from "./voter-base-element.js";

class VoterBallotRace extends VoterBaseElement {

  get template() {
    let t = document.createElement("template");
    t.innerHTML = `
    <link rel="stylesheet" href="${this.sds}">
    <style>
      :host {
        position: relative;
        display: flex;
        flex-direction: column;
        background-color: white;
        box-shadow: 
          0 1px 2px 0 rgba(0, 0, 0, .2), 
          0 1px 5px 0 rgba(0, 0, 0, .13);
        align-self: stretch;
        --icon-size: 24px;
      }

      .candidates {
        margin: 0;
        flex: 1;
      }

      input[type="radio"] {
        display: none;
      }

      .race-name {
        padding: 10px 15px;
        min-height: 40px;
        justify-content: center;
        align-items: center;
        text-align: center;
        flex: none;
      }

      .description {
        margin-top: 5px;
        color: #c1c1c1;
      }

      .info {
        flex: 1;
        cursor: pointer;
      }

      .party {
        color: #757575;
        font-weight: bold;
        text-transform: uppercase;
      }

      .check {
        padding: 15px;
      }

      .checkbox {
        position: relative;
        display: block;
        height: 16px;
        width: 16px;
        border: 1px solid #333;
        border-radius: 2px;
      }

      .ballot-details {
        padding: 15px;
        text-align: center;
      }

      .ballot-details {
        cursor: pointer;
        --lc: #5169B8;
        --lhc: #31409F;
        --lhd: underline;
      }

      .survey {
        padding: 15px;
        align-self: unset;
      }

      .incomplete {
        padding: 15px;
        color: #757575;
        text-align: center;
        font-style: italic;
      }

      /* Checked state */
      input:checked ~ .info {
        background-color: #e8f3dd;
      }

      input:checked ~ .info .checkbox {
        border-color: #53AD10;
        background-color: #53AD10;
      }

      input:checked ~ .info .checkbox:after {
        content: "";
        display: block;
        position: absolute;
        left: 5px;
        top: 2px;
        width: 4px;
        height: 8px;
        border: solid white;
        border-width: 0 2px 2px 0;
        transform: rotate(45deg);
      }

      :host(.enh) .ballot-details,
      :host(.enh) .survey.button {
        display: none;
      }

      @media print {
        :host {
          display: block;
          margin: 0;
          padding: 15px 0;
          box-shadow: none;
          page-break-inside: avoid;
          border-bottom: 2px solid #ddd;
        }

        :host(:not([selected])) {
          display: none !important;
        }

        .race-name {
          align-items: flex-start;
          color: #222;
          background-color: unset;
          padding: 0;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: flex-start;
          min-height: unset;
          margin-bottom: 10px;
        }

        .race-name .caps {
          position: relative;
          top: 1px;
        }

        .race-name .description {
          color: #222;
          margin: 0 0 0 5px;
          border-left: 1px solid #222;
          padding-left: 5px;
        }

        .candidates {
          display: block;
        }

        .candidate .package {
          padding: 0;
        }

        input:checked ~ .info {
          background-color: transparent !important;
        }

        input:not(:checked) ~ .info {
          display: none;
        }

        .ballot-details, .survey.button, .info .check {
          display: none;
        }
      }
    </style>

    <div class="impact race-name package">
      <h5 class="caps">${this.race.name}</h5>
    </div>

    <form class="candidates">
      ${this.race.candidates.map((c, i) => `
        <div class="candidate">
          <input type="radio" name="${this.race.position_id}" value="${c.id}" id="${c.id}">
          <label class="info flex" for="${c.id}">
            <div class="package">
              <h3>${this.normalizeName(c)}</h3>
              <summary><span class="party">${c.party_name}</summary>
            </div>
            <div class="check">
              <span class="checkbox"></span>
            </div>
          </label>
        </div>
      `).join('')}

      ${this.race.candidates.length == 0 ? `
      <div class="incomplete">
        <h4>Data not yet available <small style="display: block;">(or no candidates have filed)</small></h4>
      </div>
      ` : ''}
    </form>

    <a class="summary ballot-details">See more candidate information</a>

    ${this.race.candidate_survey ? `
    <a class="survey button promo" href="#">Compare the candidates</a>
    ` : ""}
    `;
    return t;
  }

  constructor() {
    super();
    this._race = {};
    this.attachShadow({ mode: "open" });
  }

  // Restamps on race change
  get race() {
    return this._race;
  }

  set race(race) {
    this._race = race;
    this.dataset.id = race.position_id;
    this.stamp();
  }

  get form() {
    return this.shadowRoot.querySelector("form");
  }

  get choice() {
    let sel = this.shadowRoot.querySelector("input:checked");
    return sel ? sel.value : undefined;
  }

  get selected() {
    return this.getAttribute("selected");
  }

  set selected(val) {
    if(!val) {
      this.removeAttribute("selected");
    } else {
      this.setAttribute("selected", val);

      // Select the input
      let ele = this.shadowRoot.querySelector(`input[value="${val}"]`);
      if(ele) ele.checked = true;
    }
  }

  get summary() {
    // Split out the first part repeating the name
    let parts = this.race.name.split("-");
    return parts.slice(1).join("-");
  }

  get selectedName() {
    let c = this.race.candidates.find(d => {
      return d.id == this.choice;
    });

    return this.normalizeName(c);
  }

  stamp() {
    // Out with the old
    while(this.shadowRoot.firstChild) {
      this.shadowRoot.firstChild.remove();
    }

    // In with the new
    this.shadowRoot.appendChild(this.template.content.cloneNode(true));
    
    // Set up the change event handler
    this.form.addEventListener("change", () => {
      this.selected = this.choice;

      let event = new CustomEvent("selection-made", { 
        bubbles: true,
        detail: {
          id: this.race.position_id,
          choice: this.selected
        }
      });
      this.dispatchEvent(event);
    });

    // Set up the survey event handler
    let sb = this.shadowRoot.querySelector(".survey");
    if(sb) {
      sb.addEventListener("click", (e) => {
        e.preventDefault();
        let event = new CustomEvent("survey-clicked", {
          bubbles: true,
          detail: {
            race: this.race
          }
        });
        this.dispatchEvent(event);
      });
    }

    // Set up the ballot ready additional info handler
    let mb = this.shadowRoot.querySelector(".ballot-details");
    mb.addEventListener("click", (e) => {
      e.preventDefault();
      let event = new CustomEvent("details-clicked", {
        bubbles: true,
        detail: {
          race: this.race
        }
      });
      this.dispatchEvent(event);
    });
  }
}

// Define the element
customElements.define("voter-ballot-race", VoterBallotRace)

// ES6 default export
export default VoterBallotRace;
