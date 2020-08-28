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

      // zeus.on("NODE_CONNECTED", ele => {
      //   if(ele.renderBehavior == "never") {
      //     ele.closest(".zone-el").hidden = true;
      //   }
      // });
      
      // Desktop
      let z2 = document.querySelector("#zone-el-2");
      this.dropZone(z2, 3)
      
      // Tablet
      let z4 = this.getZone(4);
      this.dropZone(z4, 3);

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
          min-height: 90px;
          background-color: blue;
        }

        voter-guide zeus-ad {
          display: block !important;
          width: auto !important;
        }

        voter-guide zeus-ad::before {
          content: attr(id);
          color: white;
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
