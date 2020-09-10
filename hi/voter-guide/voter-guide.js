/**
 * Voter Guide Simple Grid extension
 * 2020 Voter Guide
 */

import "https://media.mcclatchy.com/labs/skins/simple-grid.js"
import "./voter-ballot.js"

class VoterGuide extends window.SimpleGrid {

  // Lede gets a different treatment here
  handleLede() {
    let lede = this._articles[0];

    if(lede) {
      let headline = lede.querySelector(".h1");
      if(headline) headline.classList.remove("h1");

      let summary = lede.querySelector("summary");
      if(summary) summary.remove();
    }
  }

  // A couple additional styles specific to this mock
  connectedCallback() {
    if(this.shadowRoot) return; 
    super.connectedCallback();
    
    this.addCSS(`
      .subnav-section-icon { display: none; }
      .subnav-section-name { margin-top: 0 !important; }
      voter-ballot .ad-widget { margin: inherit; }

      .subscriber-status {
        position: fixed;
        top: 10px;
        right: 15px;
        font: 12px var(--sans);
        margin: 0;
        z-index: 99999;
      }

      @media print {
        body {
          background-color: white;
        }

        .flag .top.flex {
          height: 52px;
        }

        .story-body, 
        voter-guide article, 
        .zone-el,
        #nav-section-front,
        footer,
        .bottom-nav,
        .upper-nav,
        .flag .flex.icons, .flag .flex.signin,
        #onetrust-banner-sdk,
        fake-ad,
        .package.no-img {
          display: none !important;
        }
      }
    `);

    let links = this.querySelectorAll("article a");
    links.forEach(l => {
      let href = l.href.replace(/#.*$/, "");
      l.href = `${href}#voter-guide`;
    });

    // Subscriber status debug hash
    if(window.location.hash.match("subscriberstatus")) {
      document.body.insertAdjacentHTML('beforeend', `<p class="subscriber-status">subscriber status: ${digitalData?.user?.subscription?.status}</p>`);
    }
  }

  dropZone(zone, order) {
    let vb = this.querySelector("voter-ballot");

    if(zone) {
      zone.setAttribute("slot", "races");
      zone.style.order = order;
      zone.classList.add("vg-zone");

      let z9 = zone.querySelector("#zeus_mn-gpt-9");
      if(z9) z9.remove();

      vb.appendChild(zone);

      let ad = zone.querySelector("zeus-ad");
      if(ad) {
        this._observer.observe(ad, { attributes: true });
      }
    }
  }

  handleZones() {
    // Move ad test
    if(this.hasAttribute("ads")) {

      this._observer = new MutationObserver((list, observer) => {
        for(let mutation of list) {
          if(mutation.attributeName == "data-renderbehavior") {
            let ad = mutation.target;
            let zone = ad.closest(".zone-el");
            zone.hidden = ad.dataset.renderbehavior == "never";
          }
        }
      });

      // Mobile
      let z6 = this.getZone(6);
      this.dropZone(z6, 4);
      
      // Tablet
      let z3 = this.getZone(3);
      this.dropZone(z3, 4);

      // Desktop
      let z5 = this.getZone(5);
      this.dropZone(z5, 4);

      // Mobile
      let z7 = this.getZone(7);
      this.dropZone(z7, 12);

      // Desktop
      let z8 = this.getZone(8);
      this.dropZone(z8, 12);

      // Desktop 
      let z10 = this.getZone(10);
      z10.style.cssText = `grid-column: 1/-1`;
      this.dropZone(z10, 1000);

      this.addCSS(`
        .ntv-ap {
          order: 3;
        }

        .vg-zone {
          grid-column: 1;
        }
      `);
    } else {
      this.addCSS(`
        #zone-el-2 {
          display: none !important;
        }
      `);
    }
  }
}

// Register the element
customElements.define("voter-guide", VoterGuide);

// ES6 default export
export default VoterGuide;
