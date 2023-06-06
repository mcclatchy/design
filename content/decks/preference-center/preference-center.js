/**
 * Newsletter preference center
 */

class PreferenceCenter extends HTMLElement {

  // ShadowDOM template
  get template() {
    let t = document.createElement("template");
    t.innerHTML = `
    <style>
      :host {
        display: block;
        font-family: var(--sans);
        padding: 0 var(--page-padding);
      }

      h2 {
        font-size: 35px;
        font-weight: 600;
        margin-bottom: 0;
      }

      h3 {
        font-size: 25px;
        font-weight: 100;
        margin-top: 1.5em;
      }

      slot {
        display: grid;
        grid-gap: var(--gap);
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); 
      }

      slot.deals {
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
      }

      ::slotted(.card) {
        min-height: 250px; 
        display: grid !important;
        grid-template-rows: auto auto 1fr;
        align-items: end !important;
        justify-items: start;
        padding: var(--half-gap);
        cursor: pointer;
        --bbc: var(--premium-bc);
      }

      ::slotted(.card.selected) {
        --bc: var(--premium-bc);
        --bbc: var(--premium-impact);
      }
    </style>

    <h2>Newsletters</h2>
    <p>Select which newsletters you would like to receive.</p>

    <h3>NEWS & TOPICS</h3>
    <slot name="news"></slot>

    <h3>EMAIL DEALS</h3>
    <slot name="deals" class="deals"></slot>
    `;
    return t;
  }

  // Fires when the element is instantiated
  constructor() {
    super();

    // Load the ShadowDOM
    const shadow = this.attachShadow({ mode: "open" });
    shadow.append(this.template.content.cloneNode(true));

    // Binders for events
    this.handleSlotChange = this.handleSlotChange.bind(this);
    this.handleClick = this.handleClick.bind(this);

    // Slot change handler
    const slots = shadow.querySelectorAll("slot").forEach(slot => {
      slot.addEventListener("slotchange", this.handleSlotChange);
    });
  }

  // Fires when the element is added or removed from the DOM
  connectedCallback() {
    this.addEventListener("click", this.handleClick);
  }

  // Fires when the element is removed from the DOM
  disconnectedCallback() {
    this.removeEventListener("click", this.handleClick);
  }

  /**
   * Runs whenever the LightDOM changes in a slot
   */

  handleSlotChange(e) {
    // Demo code
    const selected = localStorage.getItem("selected-newsletters");
    const cards = e.currentTarget.assignedElements();

    try {
      const ids = JSON.parse(selected);
      cards.forEach(card => {
        if(ids.includes(card.dataset.campaign)) {
          this.toggleSelected(card, true)
        }
      });
    } catch(e) {
      console.warn("No selected newsletters stored");
    }
  }

  /**
   * Runs on a click anywhere in the element
   */

  handleClick(e) {
    const card = e.target.closest(".card");
    const campaign = card.dataset.campaign;
    const user = "12345";

    if(campaign) {
      const selected = this.toggleSelected(card);

      // This would make a call to Aomlitude instead
      this.updateAmplitude(user, campaign, selected);

      // Send the payload to Braze
      this.updateBraze(user, campaign, selected);
    }
  }

  /**
   * Toggles selection for a card
   */

  toggleSelected(card, selected) {
    const button = card.querySelector(".button");
    const active = card.classList.toggle("selected", selected)

    // Toggle the button wording
    if(active) {
      button.textContent = "+ Usubscribe";
    } else {
      button.textContent = "+ Select";
    }

    return active;
  }

  /**
   * Updates Amplitude
   */

  updateAmplitude(uid, cid, selected) {
    if(selected) {
      console.log("Amplitude: adding campaign (%s) for user (%s)", cid, uid);
    } else {
      console.log("Amplitude: removing campaign (%s) for user (%s)", cid, uid);
    }

    // Demo code
    const all = Array.from(this.querySelectorAll(".selected"));
    const ids = all.map(ele => ele.dataset.campaign);
    localStorage.setItem("selected-newsletters", JSON.stringify(ids));
  }

  /**
   * Sends a request to Braze
   */

  updateBraze(uid, cid, selected) {
    if(selected) {
      console.log("Braze: adding user (%s) to campaign (%s).", uid, cid)
    } else {
      console.log("Braze: removing user (%s) from campaign (%s).", uid, cid)
    }
  }
}

// Register the element
customElements.define("preference-center", PreferenceCenter);
