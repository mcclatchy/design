/**
 * QA question portion
 */

class QAQuestion extends HTMLElement {

  get template() {
    const t = document.createElement("template");
    t.innerHTML = `
    <style>
    :host {
      display: block;
      font: bold 1.4rem/1.2em var(--sans);
      margin: 15px auto;
    }
    </style>

    <slot></slot>
    `;
    return t;
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(this.template.content.cloneNode(true));
  }

}

/**
 * QA answer portion
 */

class QAAnswer extends HTMLElement {

  static get observedAttributes() {
    return ["author"];
  }

  get template() {
    const t = document.createElement("template");
    t.innerHTML = `
    <style>
    :host {
      display: block;
      margin: 60px auto;
      font: 1rem/1.7em var(--serif);
    }

    :host(:first-of-type) {
      margin-top: 15px;
    }

    q {
      quotes: "“" "”";
    }

    .author {
      display: block;
      text-align: right;
      font: 0.875rem/1em var(--sans);
      margin-top: 10px;
    }

    .author::before {
      content: "-";
      margin-right: 5px;
    }
    </style>

    <q><slot class="quote"></slot></q>
    <span class="author"></span>
    `;
    return t;
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(this.template.content.cloneNode(true));
  }

  attributeChangedCallback(name, ov, nv) {
    switch(name) {
      case "author":
        this.shadowRoot.querySelector(".author").innerHTML = nv;
        break;
    }
  }
}

// Register the elements
customElements.define("qa-question", QAQuestion);
customElements.define("qa-answer", QAAnswer);
