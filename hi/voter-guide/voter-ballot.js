/**
 * Voter Ballot 
 * 2020 Voter Guide
 */

import VoterBaseElement from "./voter-base-element.js";
import "./voter-ballot-race.js";
import "./voter-ballot-measure.js";
import "./voter-panel.js";
import "./voter-ballot-save.js";
import "./mc-toast.js";
import { trackInteraction } from "https://media.mcclatchy.com/labs/tracking.js";
import "https://media.mcclatchy.com/labs/dynamic-modal.js";

class VoterBallot extends VoterBaseElement {

  // VG is over
  get template() {
    const t = document.createElement("template");
    t.innerHTML = `
    <link rel="stylesheet" href="${this.sds}">
    <style>
      :host {
        display: block;
        margin: 30px auto;
        max-width: 1140px;
        box-sizing: content-box;
      }

      .logo {
        display: block;
        width: 350px;
        margin: 0 auto;
      }

      .intro {
        max-width: var(--story-width);
        margin: 0 auto;
        padding: 0 15px;
        --hf: var(--sans);
        --ht: uppercase;
        --hw: bold;
        --lc: #5169B8;
        --lhc: #31409F;
        --ld: underline;
        --lhd: underline;
      }

      p {
        margin: 45px auto;
        text-align: center;
        font-style: italic;
      }
    </style>

    <div>
      ${this.enh ? `
      <img class="logo" src="https://media.mcclatchy.com/2020/voter_guide/qa/icons/vg-logo-enh.svg" alt="2020 Voter Guide logo">`:`
      <img class="logo" src="https://media.mcclatchy.com/hi/voter-guide/icons/vg-logo.svg" alt="Logo de Guía Electoral">`}
    </div>

    <div class="intro">
      ${this.enh ? `
      <p>Nuestra Guía Electoral para los comicios del 3 de noviembre ya no está disponible. Pero usted todavía puede leer más abajo toda nuestra cobertura de las elecciones locales que son importantes para su comunidad.</p>`:`
      <p>Our Voter Guide for the Nov. 3 election is no longer available. You can still read all of our coverage of the local elections that are important to your community below.</p>`}
    </div>
    `;
    return t;
  }

  // Shadow DOM template
  get originalTemplate() {
    const t = document.createElement("template");
    t.innerHTML = `
    <link rel="stylesheet" href="${this.sds}">
    <style>
      :host {
        display: block;
        margin: 30px auto;
        max-width: 1140px;
        box-sizing: content-box;
      }

      form {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 0 15px;
        margin: 30px 0;
      }

      form > * {
        margin: 15px auto 0;
      }

      form > :first-child {
        margin-top: 0;
      }

      .logo {
        display: block;
        width: 350px;
      }

      .address {
        grid-column: span 2;
      }

      :host(.no-address) .address {
        border-color: red;
        box-shadow: 0 0 3px red;
      }

      input {
        width: 100%;
        max-width: 728px;
        padding: 10px;
        box-sizing: border-box;
        background-color: transparent;
        border: 1px solid #222;
        border-radius: 2px;
        font-size: larger;
      }

      .button.submit {
        width: auto;
      }

      .button.signin {
        background-color: transparent;
        border: none;
        color: var(--bbc, #222);
      }

      .intro {
        max-width: var(--story-width);
        margin: 0 auto;
        padding: 0 15px;
        --hf: var(--sans);
        --ht: uppercase;
        --hw: bold;
        --lc: #5169B8;
        --lhc: #31409F;
        --ld: underline;
        --lhd: underline;
      }

      @media(min-width: 630px) {
        :host {
          padding: 0 15px;
        }

        .logo {
          width: 400px;
        }

        .intro {
          padding: 0;
        }
      }

      slot[name="description"] {
        display: block;
      }

      .summary {
        color: #757575;
        text-align: center;
      }

      h5 {
        margin-bottom: 10px;
      }

      .grid {
        grid-auto-flow: dense;
      }

      .empty-message {
        display: none;
        max-width: var(--story-width);
      }

      .empty-message .summary {
        color: #222;
      }

      :host(.empty) .empty-message {
        display: block;
      }

      .inline-print-logo {
        display: inline-block;
        vertical-align: middle;
        height: 12px;
        width: 12px;
        padding: 4px;
        background-color: #31409F;
        fill: white;
        border-radius: 50%;
      }

      .partial-message {
        display: none;
        text-align: left;
      }

      :host(.partial) .partial-message {
        display: block;
      }

      dynamic-modal {
        --story-width: 920px;
      }

      #races .grid {
        align-items: center;
      }

      @media print {
        .intro, .partial-message {
          display: none !important;
        }

        slot[name="races"].grid {
          display: block;
          margin-top: 15px;
        }

        #races {
          max-width: var(--story-width);
          margin: 0 auto;
        }

        #races:before {
          content: "The list below only includes your selected candidates.";
          display: block;
          margin-top: 30px;
          font-style: italic;
        }

        voter-ballot-save, voter-panel, .submit {
          display: none;
        }

        ::slotted(ballot-race) {
          border-top: 1px solid #ddd;
        }
      }
    </style>

    <form>
      ${this.enh ? `
      <img class="logo" src="https://media.mcclatchy.com/2020/voter_guide/qa/icons/vg-logo-enh.svg" alt="2020 Voter Guide logo">`:`
      <img class="logo" src="https://media.mcclatchy.com/hi/voter-guide/icons/vg-logo.svg" alt="Logo de Guía Electoral">`}

      <input type="text" class="address" name="address" placeholder="e.g., 1452 E 53rd St, Chicago, IL">
      <input type="submit" class="submit button impact" value="${this.enh ? `Ver mi boleta` : `View my ballot`}"></a>
    </form>

    <div class="intro">
      <slot name="description">
        <p>Make informed choices in upcoming local elections with our Voter Guide. Enter your full address to display the races and candidates that will appear on your ballot. This interactive tool will help you select (and keep track of) your picks when it’s time to vote. Subscribers can access candidates’ answers to questions about issues important to your community.</p>
      </slot>

      <div class="how-to-use">
        <h4 class="expander" onclick="this.classList.toggle('open')">${this.enh ? `CÓMO USAR LA GUÍA ELECTORAL` : `HOW TO USE THE VOTER GUIDE`}</h4>
        <slot name="how-to">
          <p>After you enter your home address in the search bar, click VIEW MY BALLOT. </p>
          <p>Scroll down to the boxes below to see each ballot item. (Please note some races might be missing but will be updated if data becomes available.)</p>
          <p>Click “See more candidate information” at the bottom of each box to learn more. Subscribers can click the COMPARE THE CANDIDATES blue box to view candidate responses to our questions.</p>
          <p>Click the box next to each candidate you plan to vote for. When you’re finished, click the blue circle icon in the bottom right of the screen to print. Save the printout to refer to when it’s time to vote!</p>
          <p>You can also bookmark this page if you would prefer not to print. We will load your previous choices when you return on the same device. We will not store your choices on our servers or transmit them in any way; they are confined to your device. We record the addresses submitted to help ensure you have the best customer experience, but they are in no way associated with your choices or any personally identifiable information.</p>
        </slot>
        <slot name="contact"></slot>
      </div>

      <div class="empty-message">
        <p>${this.enh ? `Lo lamentamos. No pudimos encontrar ninguna carrera. Por favor, verifique si dirección y pruebe otra vez.`:`We're sorry. We couldn't find any races. Please check your address and try again.`}</p>
      </div>
    </div>

    <div id="races" hidden>
      <slot name="races" class="grid"></slot>
      <p class="summary partial-message">We do not see any local or city races. This might be a partial ballot.</p>
    </div>
    <voter-panel></voter-panel>
    <voter-ballot-save></voter-ballot-save>
    <mc-toast class="bottom right"></mc-toast>

    <dynamic-modal>
      <img slot="image" src="https://media.mcclatchy.com/hi/voter-guide/icons/vg-paywall-image.png">
      <h1>Want more candidate insights?</h1>
      <p>Sign up to explore in-depth questionnaires highlighting local candidates’ positions on key issues important to your community. View your special offer and get started now.</p>
      <div class="buttons">
        <a class="button subscribe" data-interaction="Voter Guide clicked subscribe button" href="${this.offer}">Subscribe</a>
        <a class="button signin" href="${this.signInLink}">Sign In</a>
      </div>
    </dynamic-modal>
    `;
    return t;
  }

  // Initial setup of this element
  constructor() {
    super();
    this.ready = true;

    // Into the shadows
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(this.template.content.cloneNode(true));

    // Form submission event listener
    this.form = this.shadowRoot.querySelector("form");
    this.form.addEventListener("submit", (e) => {
      e.preventDefault();
      if(this.ready) {
        this.getBallot();
        trackInteraction("Voter Guide address searched");
      } else {
        this.toast.message = "Still getting candidates for your previous search ..."
      }
    });

    // Listen for selections and save
    this.addEventListener("selection-made", (e) => {
      const selections = this.querySelectorAll("voter-ballot-race[selected], voter-ballot-measure[selected]");
      const storage = {
        address: this.address,
        selections: []
      }

      selections.forEach((ele) => {
        storage.selections.push({ 
          id: ele.dataset.id, 
          selection: ele.selected
        });
      });

      this.storage = storage;
    });


    // Element shortcuts
    this.toast = this.shadowRoot.querySelector("mc-toast");
    this.paywall = this.shadowRoot.querySelector("dynamic-modal");
    this.panel = this.shadowRoot.querySelector("voter-panel");
    this.submitButton = this.shadowRoot.querySelector(".submit");

    // Listen for more info clicks
    this.addEventListener("details-clicked", (e) => {
      // Ballot Race version
      if(e.detail.race) {
        this.panel.race = e.detail.race;
        this.panel.show("race");
        this.toast.message = "Getting candidate details ...";
        this.toast.show();
      }

      // Ballot measure version
      if(e.detail.measure) {
        this.panel.measure = e.detail.measure;
        this.panel.show("measure");
      }

      trackInteraction("Voter Guide race details clicked");
    });

    this.addEventListener("details-loaded", (e) => {
      this.toast.hide();
    });

    // Listen for a survey being clicked
    this.addEventListener("survey-clicked", (e) => {
      let bd = window.location.hash.match("nopaywall");
      let subStatus = digitalData?.user?.subscription?.status;

      // Check subscriber status 
      if(bd || (subStatus && subStatus.match(/sub_0|ex/))) {
        this.panel.race = e.detail.race;
        this.panel.show("survey");
        this.toast.message = "Getting survey details ...";
        this.toast.show();
        trackInteraction("Voter Guide subscriber clicked survey button");
      } else {
        this.paywall.show();
        trackInteraction("Voter Guide non-subscriber clicked survey button");
      }
    });

    this.addEventListener("survey-loaded", (e) => {
      this.toast.hide();
    });

    // Listen for the subscribe and sign in buttons
    this.shadowRoot.querySelector("dynamic-modal .subscribe").addEventListener("click", (e) => {
      trackInteraction("Voter Guide clicked subscribe button", true);
    });

    this.shadowRoot.querySelector("dynamic-modal .signin").addEventListener("click", (e) => {
      trackInteraction("Voter Guide clicked the sign in button", true);
    });
  }

  // Runs when added to the DOM
  async connectedCallback() {
    if(this.storage && this.ready) {
      this.address = this.storage.address;
      await this.getBallot();
      this.loadSelections();
    }
  }

  // Fetches the races
  async getBallot() {
    let order = 0;
    this.ready = false;
    this.classList.remove("empty");
    this.classList.remove("no-address");

    // Clear out a previous ballot
    this.querySelectorAll("voter-ballot-race, voter-ballot-measure").forEach(r => { r.remove(); });
    this.classList.remove("partial");

    // Check for an empty address
    if(this.address.length < 1) {
      trackInteraction("Voter Guide empty address search");
      this.classList.add("no-address");
      this.ready = true;
      return;
    }

    // Show the message
    this.toast.message = "Getting your personalized ballot ...";
    this.toast.show();

    // API functions found in voter-element
    const [positions, measures] = await Promise.all([
      this.fetchPositions(this.address),
      this.fetchMeasures(this.address)
    ]);

    // Load the positions
    try {
      let pos = this.filterPositions(positions);

      // Loop through what we got
      pos.forEach((p, i) => {
        const br = document.createElement("voter-ballot-race");
        br.race = p;
        br.setAttribute("slot", "races");
        order += 1;
        br.style.order = order;

        if(this.enh) {
          br.classList.add("enh");
        }

        this.appendChild(br);
      });

      // Check for missing city or local races (possible partial)
      let local = pos.filter((d) => {
        return d.level.toLowerCase() == "city" || d.level.toLowerCase() == "local";
      });

      this.classList.toggle("partial", pos.length > 0 && local.length == 0)
    } catch(err) {
      trackInteraction("Voter Guide reader got the error message");
      this.classList.add("empty");
    }

    // Load the measures
    try {
      let mes = measures.data.voterguideMeasures.data.positions;
      mes.forEach((m, i) => {
        const bm = document.createElement("voter-ballot-measure");
        bm.measure = m;
        bm.setAttribute("slot", "races");
        order += 1;
        bm.style.order = order;

        if(this.enh) {
          bm.classList.add("enh");
        }

        this.appendChild(bm);
      });
    } catch(err) {
      console.error("Issues parsing ballot measures", err);
    }

    // Load any previous selections
    if(this.storage) {
      this.loadSelections();
    }

    // Show it and mark ready for more pulls
    this.shadowRoot.querySelector("#races").hidden = false;
    this.ready = true;
    this.toast.hide();

    // Jump down if on a phone
    if(window.matchMedia("(max-width: 659px)").matches) {
      let slot = this.shadowRoot.querySelector("slot[name='races']");
      slot.scrollIntoView({ behavior: "smooth" });
    }
  }

  // Load previous selections if any
  loadSelections() {
    this.storage.selections.forEach((s) => {
      let ele = this.querySelector(`[data-id="${s.id}"]`);
      if(ele) ele.selected = s.selection;
    });

    this.showSaveButton();
  }

  showSaveButton(v = true) {
    this.shadowRoot.querySelector("voter-ballot-save").classList.toggle("showing", v);
  }

  /**
   * Getters and Setters
   */

  // Returns a parsed version
  get storage() {
    const ls = window.localStorage.getItem("voter-guide");
    return ls ? JSON.parse(ls) : undefined;
  }

  // Stringifies and stores 
  set storage(obj) {
    window.localStorage.setItem("voter-guide", JSON.stringify(obj));
    this.showSaveButton();
  }

  clearStorage() {
    window.localStorage.removeItem("voter-guide");
  }

  get address() {
    return this.form.address.value;
  }

  set address(val) {
    this.form.address.value = val;
  }

  // Different UI for ENH
  get enh() {
    return this.hasAttribute("enh");
  }

  get offer() {
    return this.getAttribute("offer") || "/subscribe/";
  }

  get signInLink() {
    return `https://account.${pageInfo["marketInfo.domain"]}.com/static/signin/`;
  }
}

// Register the element
customElements.define("voter-ballot", VoterBallot);

// ES6 default export
export default VoterBallot;
