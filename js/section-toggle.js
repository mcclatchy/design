/**
 * Toggles sections to different skins
 */

class SectionToggle extends HTMLElement {
  get template() {
    let t = document.createElement("template");
    t.innerHTML = `
    <style>
      .button {
        background-color: rgba(255, 255, 255, .8);
        border-radius: 50%;
        width: 45px;
        height: 45px;
        box-shadow: 2px 2px 8px rgba(0,0,0,0.4);
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        position: fixed;
        bottom: 15px;
        right: 15px;
      }
    </style>

    <div class="button">
      <svg height="15px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M504.971 359.029c9.373 9.373 9.373 24.569 0 33.941l-80 79.984c-15.01 15.01-40.971 4.49-40.971-16.971V416h-58.785a12.004 12.004 0 0 1-8.773-3.812l-70.556-75.596 53.333-57.143L352 336h32v-39.981c0-21.438 25.943-31.998 40.971-16.971l80 79.981zM12 176h84l52.781 56.551 53.333-57.143-70.556-75.596A11.999 11.999 0 0 0 122.785 96H12c-6.627 0-12 5.373-12 12v56c0 6.627 5.373 12 12 12zm372 0v39.984c0 21.46 25.961 31.98 40.971 16.971l80-79.984c9.373-9.373 9.373-24.569 0-33.941l-80-79.981C409.943 24.021 384 34.582 384 56.019V96h-58.785a12.004 12.004 0 0 0-8.773 3.812L96 336H12c-6.627 0-12 5.373-12 12v56c0 6.627 5.373 12 12 12h110.785c3.326 0 6.503-1.381 8.773-3.812L352 176h32z"/></svg>
    </div>
    `;
    return t;
  }

  /**
   * Init
   */

  constructor() {
    super();
  }

  connectedCallback()  {
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(this.template.content.cloneNode(true));

    let fab = this.shadowRoot.querySelector(".button");
    fab.addEventListener("click", e => {
      document.querySelector(".section").classList.toggle("skin1");
    });
  }
}

customElements.define("section-toggle", SectionToggle);
