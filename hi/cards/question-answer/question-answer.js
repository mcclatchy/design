/**
 * Question/Answer wrapper
 */

class QuestionAnswer extends HTMLElement {

  get template() {
    const t = document.createElement("template");
    t.innerHTML = `
    <style>
    :host {
      display: block;
      max-width: calc(var(--story-width) + 30px) !important;
      margin: 0 auto;
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

  // Fires when added to the DOM
  connectedCallback() {
    const embed = this.closest(".embed-infographic");
    if(embed) {
      embed.classList.add("full-bleed");
    }
  }
}


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
      padding: 0px 15px 15px;
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
      font: large/1.7em var(--serif);
      padding: 15px;
    }

    :host(:nth-of-type(even)) {
      background-color: #f4f4f4;
    }

    q {
      quotes: "“" "”";
    }

    .author {
      display: block;
      text-align: right;
      font: bold 0.875rem/1em var(--sans);
      margin-top: 10px;
    }

    .author::before {
      content: "—";
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
customElements.define("question-answer", QuestionAnswer);
customElements.define("qa-question", QAQuestion);
customElements.define("qa-answer", QAAnswer);
