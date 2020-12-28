/**
 * People Graph
 * created for KC RFA project
 */

class PeopleGraph extends HTMLElement {

  static get observedAttributes() {
    return ["total", "highlight"]
  }

  get template() {
    let t = document.createElement("template");
    t.innerHTML = `
    <style>
    :host {
      display: block;
    }

    .window {
      position: relative;
      padding-top: 56.25%;
    }

    canvas {
      position: absolute;
      top: 0;
      left: 0;
      max-width: 100%;
    }

    slot {
      display: block;
      max-width: var(--story-width);
      margin: 15px auto;
    }

    slot::slotted(*) {
      margin: 0 0 10px 0;
    }
    </style>

    <img hidden src="${this.icon}">
    <slot name="above"></slot>
    <div class="window">
      <canvas></canvas>
    </div>
    <slot name="below"></slot>
    `;
    return t;
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(this.template.content.cloneNode(true));

    this.canvas = this.shadowRoot.querySelector("canvas");
    this.ctx = this.canvas.getContext("2d");
    this.ctx.imageSmoothingEnabled = false;

    // Bind handlers
    this.render = this.render.bind(this);
    this._handleImageReady = this._handleImageReady.bind(this);
  }

  connectedCallback() {
    let img = this.shadowRoot.querySelector("img");
    img.addEventListener("load", this._handleImageReady);
    this.hidden = false;
  }

  get icon() {
    return "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOTIiIGhlaWdodD0iNTEyIiB2aWV3Qm94PSIwIDAgMTkyIDUxMiI+PHBhdGggZD0iTTk2LDI1LjZjMzEuOCwwLDU3LjYsMjUuOCw1Ny42LDU3LjZzLTI1LjgsNTcuNi01Ny42LDU3LjZTMzguNCwxMTUsMzguNCw4My4yUzY0LjIsMjUuNiw5NiwyNS42IE0xMzkuMiwxNTUuMkgxMjljLTIwLjQsOS40LTQ0LjYsOS44LTY2LDBINTIuOGMtMjMuOSwwLTQzLjIsMTkuMy00My4yLDQzLjJ2MTIyLjRjMCwxMS45LDkuNywyMS42LDIxLjYsMjEuNmgxNC40djEyMi40YzAsMTEuOSw5LjcsMjEuNiwyMS42LDIxLjZoNTcuNmMxMS45LDAsMjEuNi05LjcsMjEuNi0yMS42VjM0Mi40aDE0LjRjMTEuOSwwLDIxLjYtOS43LDIxLjYtMjEuNlYxOTguNEMxODIuNCwxNzQuNSwxNjMuMSwxNTUuMiwxMzkuMiwxNTUuMnoiLz48L3N2Zz4K";
  }

  get total() {
    return parseInt(this.getAttribute("total"));
  }

  set total(val) {
    if(!val) {
      this.removeAttribute("total");
    } else {
      this.setAttribute("total", val);
    }
  }

  get highlight() {
    return parseInt(this.getAttribute("highlight"));
  }

  set highlight(val) {
    if(!val) {
      this.removeAttribute("highlight");
    } else {
      this.setAttribute("highlight", val);
    }
  }

  attributeChangedCallback() {
    this.render();
  }

  render() {
    if(!this.ready) return;

    let bbox = this.shadowRoot.querySelector(".window").getBoundingClientRect();
    this.canvas.width = bbox.width * window.devicePixelRatio;
    this.canvas.height = bbox.height * window.devicePixelRatio;

    let img = this.shadowRoot.querySelector("img");
    let row = 0
    let size = this.fitToContainer(this.total, this.canvas.width, this.canvas.height, 9, 24); 
    let max = Math.floor(this.canvas.width / size.width);

    for(let i = 0, t = this.total; i < t; i++) {
      let mod = i % max;
      if(i > 0 && mod == 0) { row++ }

      let x = (size.width * mod);
      let y = (size.height * row);

      if(isNaN(this.highlight)) {
        this.ctx.globalAlpha = 0.1;
      } else {
        this.ctx.globalAlpha = i < this.highlight ? 1 : 0.1;
      }

      this.ctx.drawImage(img, x, y, size.width, size.height);
    }
  }

  fitToContainer(n, cw, ch, iw, ih) {
    // need to do rectangle instead of square
    cw = cw * ih / iw;

    let ratio = cw / ch;
    let cols = Math.sqrt(n * ratio);
    let rows = n / cols;

    // Find best option filling the whole height
    let r1 = Math.ceil(rows);
    let c1 = Math.ceil(n / r1);
    while (r1 * ratio < c1) {
      r1++;
      c1 = Math.ceil(n / r1);
    }
    let cs1 = cw / r1;

    // Find best option filling the whole width
    let c2 = Math.ceil(cols);
    let r2 = Math.ceil(n / c2);
    while (c2 < r2 * ratio) {
      c2++;
      r2 = Math.ceil(n / c2);
    }
    let cs2 = cw / c2;

    let size = Math.min(cs1, cs2);
    return { 
      width: Math.floor(size * iw / ih),
      height: Math.floor(size)
    }
  }

  _handleImageReady() {
    this.ready = true;
    this.render();
  }
}

// Register the element
customElements.define("people-graph", PeopleGraph);

// ES export
export default PeopleGraph;
