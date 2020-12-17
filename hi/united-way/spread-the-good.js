/**
 * United Way nourish your neighbors partnership
 * created 12.11.2020
 */

class SpreadTheGood extends HTMLElement {

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
        width: 125px;
      }

      .uw-logo[hidden] {
        display: none;
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

    <img class="uw-logo" src="${this.logo}">
    <h1>${this.title}</h1>
    <slot>
      <p>Help us fight hunger in our community this holiday season.</p>
      <p>The coronavirus pandemic has significantly impacted our neighbors in 2020. Many have become unemployed &mdash; they've found themselves lacking savings and struggling to feed their families.</p>
      <p>Please make a donation to our local United Way to support our neighbors in need.</p>
      <p>Let's rise together.</p>
    </slot>
    <a class="button" href="${this.link}">GIVE NOW</a>
    `;
    return t;
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(this.template.content.cloneNode(true));
    this.shadowRoot.querySelector(".uw-logo").addEventListener("error", this.handleMissingImage);
  }

  connectedCallback() {
    if(this.link) {
      this.hidden = false;
    }
  }

  get title() {
    return this.getAttribute("title") || "Spread the Good";
  }

  get link() {
    let match = links.find((d) => {
      return d.domain == pageInfo["marketInfo.domain"];
    });

    if(match) {
      return match["link"];
    }

    return undefined;
  }

  get logo() {
    let marketLogo = `https://media.mcclatchy.com/hi/united-way/logos/${pageInfo["marketInfo.domain"]}.jpg`;
    return this.getAttribute("logo") || marketLogo;
  }

  handleMissingImage(e) {
    e.target.hidden = true;
  }
}

const links = [{"domain":"islandpacket","link":""},{"domain":"bnd","link":"https://helpingpeople.org/BND"},{"domain":"sunherald","link":"https://app.mobilecause.com/form/EzQDiw?vid=fdp3d"},{"domain":"idahostatesman","link":""},{"domain":"bradenton","link":"https://igfn.us/f/35fu/n"},{"domain":"charlotteobserver","link":""},{"domain":"ledger-enquirer","link":""},{"domain":"heraldsun","link":"https://www.unitedwaytriangle.org/mcclatchy-triangle-nc-food-insecurity/"},{"domain":"elnuevoherald","link":"https://portal.unitedwaymiami.org/SpreadGood"},{"domain":"kansascity","link":""},{"domain":"kentucky","link":"https://igfn.us/form/S4wykw"},{"domain":"macon","link":"https://www.unitedwaycg.org/civicrm/contribute/transact?reset=1\u0026id=1"},{"domain":"mercedsunstar","link":""},{"domain":"miamiherald","link":"https://portal.unitedwaymiami.org/SpreadGood"},{"domain":"modbee","link":"https://bit.ly/ModUW"},{"domain":"myrtlebeachonline","link":""},{"domain":"theolympian","link":""},{"domain":"newsobserver","link":"https://www.unitedwaytriangle.org/mcclatchy-triangle-nc-food-insecurity/"},{"domain":"sacbee","link":"https://bit.ly/3gY5WXl"},{"domain":"sanluisobispo","link":""},{"domain":"centredaily","link":"https://www.ccunitedway.org/civicrm/contribute/transact?reset=1\u0026id=92"},{"domain":"thenewstribune","link":""},{"domain":"tri-cityherald","link":""},{"domain":"kansas","link":"https://app.mobilecause.com/f/35f0/n?vid=fe8s6"}]

// Define the element
customElements.define("spread-the-good", SpreadTheGood);

// ES export
export default SpreadTheGood;
