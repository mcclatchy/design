/**
 * Bio Grid overlay panel
 */

import "./progress-bar.js";

class BioGridPanel extends HTMLElement {

  get template() {
    const t = document.createElement("template");
    t.innerHTML = `
    <style>
      :host {
        display: flex;
        flex-direction: column;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0,0,0,0.8);
        pointer-events: none;
        opacity: 0;
        transition: opacity .4s;
        color: var(--tc, white);
        font-family: var(--sans);
        --progress-bar-color: #f26900;
      }

      :host(.showing) {
        opacity: 1;
        pointer-events: auto;
      }

      .content {
        display: flex;
        padding: 15px;
        max-width: var(--story-width);
        margin: 0 auto;
        text-align: center;
        overflow: hidden;
        flex: 1;
      }

      @media (min-width: 768px) {
        .content {
          align-items: center;
        }
      }

      slot {
        display: block;
      }

      ::slotted(*) {
        margin: 10px 0 0;
      }

      ::slotted(:first-child) {
        margin-top: 0;
      }

      ::slotted(p) {
        font: 0.875rem/1.2em var(--sans);
      }

      .icons {
        display: flex;
        align-items: center;
        flex-direction: row-reverse;
      }

      @media(min-width: 768px) {
        .icons {
          justify-content: center;
        }
      }

      svg {
        display: block;
        height: 32px;
        padding: 15px;
        fill: #dcdcdc;
        cursor: pointer;
      }

      .pause {
        display: none;
      }

      :host(.playing) .pause {
        display: block;
      }

      :host(.playing) .play {
        display: none;
      }
    </style>

    <div class="content">
      <slot></slot>
    </div>
    <div class="icons">
      <svg class="pause" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm96-280v160c0 8.8-7.2 16-16 16h-48c-8.8 0-16-7.2-16-16V176c0-8.8 7.2-16 16-16h48c8.8 0 16 7.2 16 16zm-112 0v160c0 8.8-7.2 16-16 16h-48c-8.8 0-16-7.2-16-16V176c0-8.8 7.2-16 16-16h48c8.8 0 16 7.2 16 16z"/></svg>
      <svg class="play" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M371.7 238l-176-107c-15.8-8.8-35.7 2.5-35.7 21v208c0 18.4 19.8 29.8 35.7 21l176-101c16.4-9.1 16.4-32.8 0-42zM504 256C504 119 393 8 256 8S8 119 8 256s111 248 248 248 248-111 248-248zm-448 0c0-110.5 89.5-200 200-200s200 89.5 200 200-89.5 200-200 200S56 366.5 56 256z"/></svg>
      <svg class="close" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M464 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm0 394c0 3.3-2.7 6-6 6H54c-3.3 0-6-2.7-6-6V86c0-3.3 2.7-6 6-6h404c3.3 0 6 2.7 6 6v340zM356.5 194.6L295.1 256l61.4 61.4c4.6 4.6 4.6 12.1 0 16.8l-22.3 22.3c-4.6 4.6-12.1 4.6-16.8 0L256 295.1l-61.4 61.4c-4.6 4.6-12.1 4.6-16.8 0l-22.3-22.3c-4.6-4.6-4.6-12.1 0-16.8l61.4-61.4-61.4-61.4c-4.6-4.6-4.6-12.1 0-16.8l22.3-22.3c4.6-4.6 12.1-4.6 16.8 0l61.4 61.4 61.4-61.4c4.6-4.6 12.1-4.6 16.8 0l22.3 22.3c4.7 4.6 4.7 12.1 0 16.8z"/></svg>
    </div>
    <progress-bar></progress-bar>
    `;
    return t;
  }

  constructor() {
    super();

    // Add the Shadow DOM
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(this.template.content.cloneNode(true));

    // Bind event functions
    this.play = this.play.bind(this);
    this.stop = this.stop.bind(this);
    this.close = this.close.bind(this);
    this._animate = this._animate.bind(this);
  }

  connectedCallback() {
    this.shadowRoot.querySelector(".close").addEventListener("click", this.close);
    this.shadowRoot.querySelector(".play").addEventListener("click", this.play);
    this.shadowRoot.querySelector(".pause").addEventListener("click", this.stop);
  }

  get delay() {
    return this.getAttribute("delay") || 15000;
  }

  set delay(val) {
    if(!val) {
      this.removeAttribute("delay");
    } else {
      this.setAttribute("delay", val);
    }
  }

  show() {
    this.classList.add("showing");
  }

  close(e) {
    let ev = new Event("panel-close", {
      composed: true
    });

    this.dispatchEvent(ev);
    this.stop();
    this.classList.remove("showing");
  }

  play() {
    this.classList.add("playing");
    this._af = window.requestAnimationFrame(this._animate);
  }

  stop() {
    this.classList.remove("playing");
    this.style.setProperty("--progress", "0%");
    window.cancelAnimationFrame(this._af);
    delete this._start;
  }

  render(row, template) {
    // Makshift template functions
    const limit = this.limit;

    // Load it
    let html = eval('`' + template.innerHTML + '`');
    this.innerHTML = html;
    this.show();
  }

  limit(string, max) {
    if(string.length > max) {
      return `${ string.substring(0, max) } ...`;
    }

    return string;
  }

  _animate(timestamp) {
    if(!this._start) {
      this._start = timestamp;
    }

    let elapsed = timestamp - this._start;
    let percent = (Math.floor(elapsed)/this.delay) * 100;
    this.style.setProperty("--progress", percent + "%");

    if(elapsed < this.delay) {
      this._af = window.requestAnimationFrame(this._animate);
    } else {
      let ev = new Event("panel-ready", {
        composed: true
      });

      this.stop();
      this.dispatchEvent(ev);
    }
  }
}

// Define the element
customElements.define("bio-grid-panel", BioGridPanel);

// ES Export
export default BioGridPanel;
