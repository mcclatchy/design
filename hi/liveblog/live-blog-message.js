/**
 * Individual live blog message
 */

import "https://cdn.jsdelivr.net/npm/marked/marked.min.js";

class LiveBlogMessage extends HTMLElement {

  get template() {
    const t = document.createElement("template");
    t.innerHTML = `
    <style>
      :host {
        position: relative;
        display: block;
        border-left: 1px solid #707070;
        max-width: 500px;
        padding: 0 0 15px 15px;
        font-family: var(--sans);
        --tf: var(--sans);
      }

      :host:before {
      	content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 18px;
        height: 18px;
        box-sizing: border-box;
        background-color: #707070;
        border: 4px solid white;
        border-radius: 50%;
        transform: translate(-9.5px, 0px);
      }

      ::slotted(*) {
        margin: 10px 0;
      }

      time {
        text-transform: uppercase;
        color: var(--tc, #707070);
        font-size: 0.75rem;
      }

      .icons {
        display: flex;
        align-items: center;
        opacity: 0;
        transition: opacity .6s;
        margin-top: 10px;
      }

      .icons svg {
        display: block;
        height: 18px;
        width: 18px;
        fill: #989898;
        margin-right: 10px;
        cursor: pointer;
      }

      .author {
        font: 0.75rem/1em var(--sans);
      }

      :host(:hover) .icons {
        opacity: 1;
      }
    </style>

    <time></time>
    <slot id="message"></slot>
    <div class="author"></div>
    `;
    return t;
  }

  // Default constructor
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(this.template.content.cloneNode(true));

    // Convenience
    this._elements = {
      slot: this.shadowRoot.querySelector("slot")
    }
  }

  // Fires when added to the DOM
  connectedCallback() {
  }

  // Fires if removed from the DOM
  disconnectedCallback() {
  }

  // Getters and setters
  get doc() {
    return this._doc;
  }

  set doc(d) {
    const data = d.data();
    this.time = new Date(data.created.seconds * 1000);
    this.message = data.entry;
    this.author = data.author;
    this.dataset.id = d.id;
    this._doc = d;
  }

  get message() {
    return this._doc.data().message;
  }

  set message(text) {
    const t = document.createElement("template");
    t.innerHTML = marked(text);
    
    while(this.firstChild) {
      this.lastChild.remove();
    }

    this.appendChild(t.content.cloneNode(true));

    // clone the scripts to get them to run
    const scripts = this.querySelectorAll("script");
    scripts.forEach((s) => {
      if(s.src) {
        let clone = document.createElement("script");
        clone.src = s.src;
        this.replaceChild(clone, s);
      }
    });

  }

  get time() {
    return this._doc.data().time;
  }

  set time(d) {
    const t = this.shadowRoot.querySelector("time");
    const options = {
      weekday: "long",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: true
    }

    t.textContent = d.toLocaleDateString("en-US", options);
  }

  get author() {
    return this._doc.data().author;
  }

  set author(d) {
    const a = this.shadowRoot.querySelector(".author");
    if (d) {
      a.textContent = `-- ${d}`;
    }
  }

}

// Register the element
customElements.define("live-blog-message", LiveBlogMessage);

// Default export
export default LiveBlogMessage;
