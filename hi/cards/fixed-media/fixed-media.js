/**
 * Scroll scrubber tracks video currentTime to scroll
 */

import {trackInteraction} from "../../tracking.js";

class FixedMedia extends HTMLElement {
  get template() {
    let t = document.createElement("template");
    t.innerHTML = `
    <style>
      :host {
        display: flex;
        flex-direction: column;
        position: relative;
        padding: 0px !important;
        max-width: 100% !important;
        min-height: 150vh;
        box-sizing: border-box !important;
        align-items: var(--overlay-align, flex-start);
        justify-content: space-between;
        --tc: white;
      }

      slot[name="fixed"]::slotted(*) {
        position: sticky;
        top: 0;
        width: 100vw;
        height: 100vh;
        object-fit: cover;
        transform: translate3d(0,0,0);
        filter: var(--fixed-filter);
        transition: var(--fixed-transition);
      }

      .overlay {
        display: block;
        padding: 15px;
        max-width: var(--story-width);
        transform: translate3d(0,0,1vh);
      }

      :host(.screen) .overlay {
        background: var(--overlay-screen, rgba(0,0,0,0.5));
      }

      .overlay::slotted(*) {
        grid-column: 1;
      }
    </style>

    <slot name="fixed"></slot>
    <slot class="overlay"></slot>
    `;
    return t;
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(this.template.content.cloneNode(true));

    // Helpers
    this.videos = this.querySelectorAll("video");
    this.videos.forEach(v => {
      v.muted = true;
      v.playsInline = true;
      v.disableRemotePlayback = true;
    });

    // Set up the intersection observer
    this.iObserver = new IntersectionObserver(this.handleIntersect, { 
      rootMargin: "0px 0px -100% 0px",
      threshold: [0, 1] 
    });
  }

  connectedCallback() {
    this.iObserver.observe(this);

    // Get the parent embed full width
    const embed = this.closest(".embed-infographic");
    if(embed) {
      embed.classList.add("full-bleed");
    }
  }

  disconnectedCallback() {
    this.rObserver.unobserve(this);
  }

  handleIntersect(entries) {
    entries.forEach(e => {
      const ele = e.target;
      if(e.isIntersecting) {
        ele.classList.add("intersecting");
        ele.videos.forEach(v => {
          if(v.getClientRects().length) v.play();
        });

        trackInteraction("fixed-media-visible")
      } else {
        ele.classList.remove("intersecting");
        ele.videos.forEach(v => {
          if(v.getClientRects().length) v.pause();
        });

        if(e.boundingClientRect.bottom <= 0) {
          trackInteraction("fixed-media-passed");
        }
      }
    });
  }
}

// Define the element
customElements.define("fixed-media", FixedMedia);

// ES export
export default FixedMedia;
