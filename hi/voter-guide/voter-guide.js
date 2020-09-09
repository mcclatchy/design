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
    }
  }

  handleZones() {
    // Move ad test
    if(this.hasAttribute("ads")) {

      try {
        zeus.on("NODE_CONNECTED", ele => {
          if(ele.renderBehavior == "never") {
            ele.closest(".zone-el").hidden = true;
          }
        });
      } catch(e) {
        console.warn("Zeus is not loaded yet.");
      }
      
      // Desktop
      let z2 = document.querySelector("#zone-el-2");
      this.dropZone(z2, 3)
      
      // Mobile
      let z6 = this.getZone(6);
      this.dropZone(z6, 3);

      // Desktop
      let z5 = this.getZone(5);
      this.dropZone(z5, 9);

      // Mobile
      let z3 = this.getZone(3);
      this.dropZone(z3, 9);

      // Desktop
      let z8 = this.getZone(8);
      this.dropZone(z8, 1000);

      // Mobile
      let z7 = this.getZone(7);
      this.dropZone(z7, 1000);

      this.addCSS(`
        .ntv-ap {
          order: 3;
        }

        .vg-zone {
          grid-column: 1/-1;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .vg-zone[hidden] { 
          display: none !important;
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
