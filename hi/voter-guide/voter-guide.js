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
      lede.querySelector("h3.h1").classList.remove("h1");
      lede.querySelector("summary").remove();
    }
  }

  // A couple additional styles specific to this mock
  connectedCallback() {
    super.connectedCallback();
    this.addCSS(`
      .subnav-section-icon { display: none; }
      .subnav-section-name { margin-top: 0 !important; }

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
  }

  dropZone(zone, order) {
    let vb = this.querySelector("voter-ballot");
    zone.setAttribute("slot", "races");
    zone.style.order = order;
    zone.classList.add("vg-zone");
    vb.appendChild(zone);
  }

  handleZones() {
    // Move ad test
    if(this.hasAttribute("ads")) {

      zeus.on("NODE_CONNECTED", ele => {
        if(ele.renderBehavior == "never") {
          ele.closest(".zone-el").hidden = true;
        }
      });

      let z3 = this.getZone(3);
      this.dropZone(z3, 3);

      let z4 = this.getZone(4);
      this.dropZone(z4, 9);

      let z5 = this.getZone(5);
      this.dropZone(z5, 1000);

      let z6 = this.getZone(6);
      z6.setAttribute("slot", "");
      z6.style.order = 1000;
      z6.classList.add("vg-zone");
      this.appendChild(z6);

      this.addCSS(`
        .ntv-ap {
          order: 3;
        }

        .vg-zone {
          grid-column: 1/-1;
        }

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
