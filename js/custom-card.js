/**
 * Custom Card prototype for sections
 */

class CustomCard extends HTMLElement {

  static get observedAttributes() {
    return ["order"]
  }

  constructor() {
    super();

    this.section = this.closest("section");
  }

  attributeChangedCallback(name, ov, nv) {
    switch(name) {
      case "order":
        this.updatePosition(nv);
        break;
    }
  }

  updatePosition(val) {
    switch(val) {
      case "before":
        this.section.insertAdjacentElement("beforeBegin", this);
        break;
      case "after":
        this.section.insertAdjacentElement("afterEnd", this);
        break;
      default:
        let index = parseInt(val);
        
        if(Number.isInteger(index)) {
          let target = this.section.children[index];

          if(target) {
            target.insertAdjacentElement("beforebegin", this);
          } else {
            this.section.appendChild(this);
          }
        } else {
          console.error("custom-card: order should be either before, after or an integer", val);
        }
    }
  }
}

// Register the element
customElements.define("custom-card", CustomCard);

// ES6 export
export default CustomCard;
