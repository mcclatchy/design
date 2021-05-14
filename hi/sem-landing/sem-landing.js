/**
 * Sports Pass landing page
 */

class SEMLanding extends HTMLElement {

  get template() {
    let t = document.createElement("template");
    t.innerHTML = `
    <style>
      :host {
        display: block;
        max-width: 100% !important;
        background-color: white;
      }

      .intro {
        max-width: 1024px;
        margin: 0 auto;
        padding: 30px 15px;
        background-color: white;
      }

      .intro ::slotted(img),
      .intro ::slotted(object) {
        display: block;
        max-width: 500px;
      }

      .grid {
        max-width: 1024px;
        margin: 0 auto;
        padding: 15px 15px 30px;
        display: grid;
        grid-gap: 30px;
      }

      @media( min-width: 600px ) {
        .grid {
          grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
        }
      }

      .grid ::slotted(.card) {
        box-shadow: 
          0 1px 2px 0 rgba(0, 0, 0, .2),
          0 1px 5px 0 rgba(0, 0, 0, .13) !important;

      }
    </style>

    <div class="intro">
      <slot name="intro"></slot>
    </div>

    <div class="grid">
      <slot></slot>
    </div>
    `;
    return t;
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(this.template.content.cloneNode(true));
  }

  connectedCallback() {
    if(!this._moved) {
      this._moved = true;

      const story = document.querySelector(".story-body");
      story.insertAdjacentElement("afterend", this);

      // Remove all other siblings
      const siblings = [...this.parentElement.children].filter((c) => { return c !== this });
      siblings.forEach((ele) => {
        ele.remove();
      });

      // Pass through a cid overload
      let url = new URL(window.location);
      if(url.searchParams.has("cid")) {
        let cid = url.searchParams.get("cid");

        this.querySelectorAll("a").forEach((a) => {
          let u = new URL(a.href);
          if(u.searchParams.has("cid")) {
            u.searchParams.set("cid", cid);
            a.href = u.href;
          }
        });
      }
    }
  }
}

// Register the element
customElements.define("sem-landing", SEMLanding);
