/**
 * Custom Card prototype for sections
 */

class CustomCard extends HTMLElement {

  /**
   * Observed attributes go through the callback when they change
   */

  static get observedAttributes() {
    return ["order"]
  }

  /**
   * Order getter and setter
   */

  get order() {
    return this.getAttribute("order");
  }

  set order(val) {
    if(val) {
      this.setAttribute("order", val);
    } else {
      this.removeAttribute("order");
      this.hidden = true;
    }
  }

  /**
   * Fires when element is created
   */

  constructor() {
    super();
    this.section = this.closest("section");
  }

  /**
   * Fires when an observed attribute changes
   */

  attributeChangedCallback(name, ov, nv) {
    switch(name) {
      case "order":
        this.updatePosition(nv);
        break;
    }
  }

  /**
   * Updates the position of the element
   */

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
          console.error("custom-card: order should be either 'before', 'after' or an integer");
        }
    }
  }
}

// Register the element
customElements.define("custom-card", CustomCard);

// ES6 export
export default CustomCard;
