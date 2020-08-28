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

    // Watch for changes from the PT
    this.zoneObserver.observe(zone, { childList: true });
  }

  handleZones() {
    // Move ad test
    if(this.hasAttribute("ads")) {

      this.zoneObserver = new MutationObserver((list, observer) => {
        for(let m of list) {
          let ad = m.target.querySelector("zeus-ad");
          if(ad) ad.renderBehavior = "lazy";
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
        voter-ballot .zone-el {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .ntv-ap {
          order: 3;
        }

        .vg-zone {
          display: block !important;
          grid-column: 1/-1;
          background-color: blue !important;
          min-height: 90px;
          justify-self: stretch !important;
        }

        .vg-zone:before {
          display: block;
          content: attr(id);
          color: white;
          padding: 15px;
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
