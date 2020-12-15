/**
 * Simple linear progress bar
 */

class ProgressBar extends HTMLElement {

  get template() {
    let t = document.createElement("template");
    t.innerHTML = `
    <style>
      :host {
        display: block;
        position: relative;
        height: 5px;
        overflow: hidden;
      }

      .bar {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        transform: translateX(calc(-100% + var(--progress, 0%)));
        transition: var(--progress-bar-transition);
        background-color: var(--progress-bar-color, #31409F);
      }
    </style>

    <div class="bar"></div>
    `;
    return t;
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(this.template.content.cloneNode(true));
  }

  get progress() {
    return this.style.getPropertyValue("--progress");
  }

  set progress(val) {
    this.style.setProperty("--progress", `${parseInt(val)}%`);
  }
}

// Define the element
customElements.define("progress-bar", ProgressBar)

// ES export
export default ProgressBar;
