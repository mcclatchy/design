/**
 * Live Blog custom element 
 * Requires Firebase be installed on the page
 */

import "./live-blog-message.js";
import "./assets/firebase-app.js";
import "./assets/firebase-auth.js";
import "./assets/firebase-firestore.js";
import "./assets/firebase-analytics.js";
import { config as firebaseConfig } from "./assets/credentials.js";


class LiveBlog extends HTMLElement {

  get template() {
    const t = document.createElement("template");
    t.innerHTML = `
    <link rel="stylesheet" href="assets/saratoga.css">

    <style>
      :host {
        display: block;
        max-width: 500px !important;
      }

      :host > * {
        margin: 15px 0;
      }

      h4 {
        flex: 1;
        margin: 0;
      }

      .form {
        display: grid;
        grid-gap: 10px;
      }

      .new-message {
        padding: 5px 15px;
        font: 1rem/1.5rem var(--sans);
        min-height: 1.5rem;
        border: 1px solid #989898;
        border-radius: 2px;
        white-space: pre-wrap;
      }

      .button {
        width: auto;
        justify-self: start;
      }
    </style>

    <slot></slot>
    `;
    return t;
  }

  constructor() {
    super();

    // Add the Shadow DOM
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(this.template.content.cloneNode(true));

    // Convenience
    this._e = {
      message: this.shadowRoot.querySelector(".new-message"),
      button: this.shadowRoot.querySelector(".button")
    }
  }

  connectedCallback() {
    // Sets up a live connection so we only want to run this once
    const api_key = this.getAttribute("apikey");

    firebase.firestore()
      .collection(`liveblogs/${api_key}/entries`)
      .orderBy('created', 'asc')
      .onSnapshot(snapshot => {
        if (!snapshot.size) {
          console.log("No messages");
        }

        snapshot.docChanges().forEach((change) => {
          switch (change.type) {
            case "added":
              this.showMessage(change);
              break;
            case "modified":
              this.updateMessage(change);
              break;
            case "removed":
              this.removeMessage(change);
              break;
          }
        })

        this.addEventListener("update-message", this.handleUpdate);
        this.addEventListener("delete-message", this.handleDelete);
      })
  }

  // Event handlers from child elements
  handleUpdate(e) {
    const doc = this.collection.doc(e.detail.id);
    if (doc) {
      doc.update({ message: e.detail.message });
    }
  }

  handleDelete(e) {
    const doc = this.collection.doc(e.detail.id);
    if (doc) {
      doc.delete();
    }
  }

  // Methods dealing with the message elements
  showMessage(change) {
    const message = document.createElement("live-blog-message");
    message.doc = change.doc;
    
    this.insertAtIndex(message, change.newIndex);
  }

  removeMessage(change) {
    const message = this.querySelector(`[data-id="${change.doc.id}"]`);
    if (message) {
      message.remove();
    }
  }

  updateMessage(change) {
    const message = this.querySelector(`[data-id="${change.doc.id}"]`);
    if (message) {
      message.doc = change.doc;

      if (change.newIndex != change.oldIndex) {
        message.remove();
        this.insertAtIndex(message, change.newIndex);
      }
    }
  }

  insertAtIndex(ele, index) {
    if(index >= this.children.length) {
      this.appendChild(ele);
    } else {
      this.insertBefore(ele, this.children[index]);
    }
  }
}

firebase.initializeApp(firebaseConfig);
firebase.analytics();

// Define the element
customElements.define("live-blog", LiveBlog);

// ES6 export
export default LiveBlog
