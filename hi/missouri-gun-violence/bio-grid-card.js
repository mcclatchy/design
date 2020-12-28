/**
 * Bio Grid card 
 */

class BioGridCard extends HTMLElement {

  get template() {
    let t = document.createElement("template");
    t.innerHTML = `
    <style>
      :host {
        display: flex;
        position: relative;
        flex: 1;
        cursor: pointer;
      }

      :host([hidden]) {
        display: none;
      }

      img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: 50% 20%;
        filter: grayscale(1) sepia(0);
        transition: filter .5s;
      }

      :host(:hover) img,
      :host([selected]) img {
        filter: grayscale(0) sepia(60%);
      }
    </style>

    <img loading="lazy"></img>
    `;
    return t;
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(this.template.content.cloneNode(true));
  }

  connectedCallback() {
    this.addEventListener("click", this._handleClick);
  }

  disconnectedCallback() {
    this.removeEventListener("click", this._handleClick);
  }

  get src() {
    return this.getAttribute("src");
  }

  set src(val) {
    let img = this.shadowRoot.querySelector("img");

    if(!val) {
      this.removeAttribute("src");
      img.hidden = true;
    } else {
      this.setAttribute("src", val);
      img.src = val;
      img.hidden = false;
    }
  }

  get selected() {
    return this.getAttribute("selected");
  }

  set selected(bool) {
    if(!bool) {
      this.removeAttribute("selected");
    } else {
      this.setAttribute("selected", true);
    }
  }

  _handleClick(e) {
    let ev = new CustomEvent("bio-click", {
      detail: this.person,
      composed: true
    });

    this.dispatchEvent(ev);
    this.selected = true;
  }
}

// Define the element
customElements.define("bio-grid-card", BioGridCard);

// ES export
export default BioGridCard;
