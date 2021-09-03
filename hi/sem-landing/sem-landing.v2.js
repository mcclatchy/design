/**
 * SEM landing page
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
        --page-width: 1024px;
      }

      :host > * {
        margin: 0 auto;
      }

      .top {
        padding: 15px;
        max-width: var(--top-width, var(--page-width));
      }

      .top ::slotted(*) {
        max-width: 100%;
      }

      .grid {
        display: grid;
        grid-gap: 30px;
        padding: 15px 0;
        max-width: var(--page-width);
      }

      @media( min-width: 660px ) {
        .grid {
          padding: 15px;
          grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
        }
      }

      .grid ::slotted(.card) {
        box-shadow: 
          0 1px 2px 0 rgba(0, 0, 0, .2),
          0 1px 5px 0 rgba(0, 0, 0, .13) !important;
      }
    </style>

    <div class="top">
      <slot name="top"></slot>
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

  async connectedCallback() {
    if(this._stamped) return false;
    this._stamped = true;

    // Move it
    const story = document.querySelector(".story-body");
    story.insertAdjacentElement("afterend", this);

    // Remove all other siblings
    const siblings = [...this.parentElement.children].filter((c) => { return c !== this });
    siblings.forEach((ele) => {
      ele.remove();
    });

    // Fetch the sheet and swap out relevant data
    if(this.dataset.sheet) {
      const response = await fetch(this.dataset.sheet);
      const data = await response.json();

      const match = data.find(row => {
        return row.domain == this.domain;
      })

      if(match) {
        let html = this.innerHTML;
        let tags = [...html.matchAll(/\{{2}(.*?)\}{2}/g)]
        tags.forEach(tag => {
          let column = tag[1].trim();
          html = html.replace(tag[0], match[column])
          this.innerHTML = html;
        })
      }
    }

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

    this.hidden = false;
  }

  // Domain getter
  get domain() {
    return this.getAttribute("domain") || location.hostname.replace(/www.(.*).com/, "$1");
  }
}

// Register the element
customElements.define("sem-landing", SEMLanding);
