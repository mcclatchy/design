/**
 * Sports Pass landing page
 */

class SportsPassLanding extends HTMLElement {

  get template() {
    let t = document.createElement("template");
    t.innerHTML = `
    <style>
      :host {
        display: block;
        max-width: 100% !important;
        padding: 0 !important;
      }

      .intro {
        position: relative;
        height: 85vw;
        --tc: white;
      }

      @media(min-width: 600px) {
        .intro {
          height: 475px;
        }
      }

      .intro ::slotted(img) {
        position: absolute;
        top: 0;
        left: 0;
        width: 100% !important;
        height: 100% !important;
        object-fit: cover;
        object-position: 36% 25%;
      }

      .intro ::slotted(.h1) {
        text-align: center;
        font: 400 70px/1.1em var(--serif) !important;
        text-transform: none !important;
        margin: 0 auto !important;
        max-width: var(--story-width);
        position: relative;
      }

      @media(max-width: 768px) {
        .intro ::slotted(.h1) {
          font-size: 48px !important;
        }
      }

      .grid {
        max-width: 1024px;
        margin: 0 auto;
        display: grid;
        grid-gap: 30px;
        transform: translateY(-100px);
      }

      @media( min-width: 600px ) {
        .grid {
          padding: 0 15px;
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

      // Move the intro pieces
      const art = story.querySelector(".lead-item img");
      if(art) {
        art.slot = "intro";
        this.appendChild(art);
      }

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
customElements.define("sports-pass-landing", SportsPassLanding);
