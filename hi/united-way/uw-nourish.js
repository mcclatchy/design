/**
 * United Way nourish your neighbors partnership
 * created 12.11.2020
 */

class UWNourish extends HTMLElement {

  get template() {
    const t = document.createElement('template');
    t.innerHTML = `
    <style>
      :host {
        display: grid;
        grid-gap: 15px;
        justify-items: center;
        padding: 30px 15px;
        text-align: center;
        --ts: 0.875rem;
        --tf: var(--sans);
      }

      :host > * {
        margin: 0;
      }

      .uw-logo {
        display: block;
        height: 64px;
      }

      h1 {
        font: 200 46px/.95em var(--serif);
        color: #444;
      }

      h3 {
        font: 200 21px/1.4em var(--sans);
        letter-spacing: 2px;
        color: #444;
      }

      slot {
        display: block;
      }

      p, ::slotted(p) {
        font: var(--ts)/1.5em var(--tf);
        margin: 10px 0;
      }

      .button {
        font: 700 medium var(--sans);
        padding: .4em 1em;
        border-radius: 2px;
        background-color: #333;
        color: white;
        text-decoration: none;
      }
    </style>

    <img class="uw-logo" src="http://localhost:1313/uw-logo.svg">
    <h1>${ this.title }</h1>
    <slot>
      <p>Help us fight hunger in our community this holiday season.</p>
      <p>The coronavirus pandemic has significantly impacted our neighbors in 2020. Many have become unemployed &mdash; they've found themselves lacking savings and struggling to feed their families.</p>
      <p>Please make a donation to our local United Way to support our neighbors in need.</p>
      <p>Let's rise together.</p>
    </slot>
    <a class="button" href="#">I WANT TO HELP</a>
    `;
    return t;
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(this.template.content.cloneNode(true));
  }

  connectedCallback() {
    // let embed = this.closest('.embed-infographic');
    // if(embed) embed.classList.add("wide");
  }

  get title() {
    return this.getAttribute("title") || "Spread the Good";
  }
}

// Define the element
customElements.define("uw-nourish", UWNourish);

// ES export
export default UWNourish;
