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
    const parentElement = document.querySelector(this.dataset.qs) || this.closest("section");

    switch(val) {
      case "before":
        parentElement.insertAdjacentElement("beforeBegin", this);
        break;
      case "after":
        parentElement.insertAdjacentElement("afterEnd", this);
        break;
      default:
        let index = parseInt(val);
        
        if(Number.isInteger(index)) {
          let target = parentElement.children[index];

          if(target) {
            target.insertAdjacentElement("beforebegin", this);
          } else {
            parentElement.appendChild(this);
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
