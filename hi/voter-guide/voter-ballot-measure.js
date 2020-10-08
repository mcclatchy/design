/**
 * Ballot Measure
 * 2020 Voter Guide
 */

import VoterBaseElement from "./voter-base-element.js";

class VoterBallotMeasure extends VoterBaseElement {

  get template() {
    let t = document.createElement("template");
    t.innerHTML = `
    <link rel="stylesheet" href="${this.sds}">
    <style>
      :host {
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
        color: var(--pc);
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
        background-color: #e5e5e5;
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
          margin-top: 15px;
          box-shadow: none;
          page-break-inside: avoid;
          margin-top: 0;
          padding: 15px 0;
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

        .pro-con {
          display: none;
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
      <h5 class="caps">${this.measure.name}</h5>
    </div>

    <div class="package pro-con">
      ${ !this.measure.pro_snippet || !this.measure.con_snippet ? `
      <p class="summary">${this.measure.text}</p>
      ` : `
      <p class="summary">${this.measure.pro_snippet}</p>
      <p class="summary">${this.measure.con_snippet}</p>
      `}
    </div>

    <form class="candidates">
      <div class="candidate">
        <input type="radio" name="${this.slug}" value="YES" id="YES">
        <label class="info flex" for="YES">
          <div class="package">
            <h3>${this.term("pro") || "YES"}</h3>
          </div>
          <div class="check">
            <span class="checkbox"></span>
          </div>
        </label>
      </div>
      <div class="candidate">
        <input type="radio" name="${this.slug}" value="NO" id="NO">
        <label class="info flex" for="NO">
          <div class="package">
            <h3>${this.term("con") || "NO"}</h3>
          </div>
          <div class="check">
            <span class="checkbox"></span>
          </div>
        </label>
      </div>
    </form>

    <a class="summary ballot-details">See more information</a>
    `;
    return t;
  }

  constructor() {
    super();
    this._measure = {};
  }

  // Restamps on race change
  get measure() {
    return this._measure;
  }

  set measure(measure) {
    this._measure = measure;
    this.dataset.id = this.slug;
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

  get slug() {
    return this.measure.name.replace(/ /g, "-").toLowerCase();
  }

  stamp() {
    if(!this.shadowRoot) {
      this.attachShadow({ mode: "open" });
    }

    this.shadowRoot.appendChild(this.template.content.cloneNode(true));
    
    // Set up the change event handler
    this.form.addEventListener("change", () => {
      this.selected = this.choice;

      let event = new CustomEvent("selection-made", { 
        bubbles: true,
        detail: {
          id: this.slug,
          choice: this.selected
        }
      });
      this.dispatchEvent(event);
    });

    let mb = this.shadowRoot.querySelector(".ballot-details");
    mb.addEventListener("click", (e) => {
      e.preventDefault();
      let event = new CustomEvent("details-clicked", {
        bubbles: true,
        detail: {
          measure: this.measure
        }
      });
      this.dispatchEvent(event);
    });
  }

  term(v) {
    let snippet = "";

    switch(v) {
      case "pro":
        snippet = this?.measure?.pro_snippet || "";
        break;
      case "con":
        snippet = this?.measure?.con_snippet || "";
        break;
    }

    let match = snippet.match(/"(\w+)"/);
    return match && match[1];
  }
}

// Define the element
customElements.define("voter-ballot-measure", VoterBallotMeasure)

// ES6 default export
export default VoterBallotMeasure;
