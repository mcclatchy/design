/**
 * Fall 2020 donation campaign story CTA
 */

import ZoneSwap from "https://media.mcclatchy.com/labs/skins/zone-swap.js";
import { trackInteraction } from "https://media.mcclatchy.com/labs/tracking.js";

class DonationStoryCTA extends ZoneSwap {

  connectedCallback() {
    if(this.subscriber && this.target) {
      super.connectedCallback();

      // Set the link target
      let link = this.querySelector("a");
      link.href = this.target;
      link.addEventListener("click", this.handleClick);
    }
  }

  get target() {
    let domain = pageInfo["marketInfo.domain"];
    let links = [{"domain":"bnd","destination":""},{"domain":"bellinghamherald","destination":""},{"domain":"sunherald","destination":"https://givebutter.com/biloxisunherald"},{"domain":"idahostatesman","destination":""},{"domain":"bradenton","destination":""},{"domain":"charlotteobserver","destination":""},{"domain":"thestate","destination":""},{"domain":"ledger-enquirer","destination":""},{"domain":"heraldsun","destination":""},{"domain":"elnuevoherald","destination":""},{"domain":"star-telegram","destination":""},{"domain":"fresnobee","destination":""},{"domain":"islandpacket","destination":""},{"domain":"kansascity","destination":""},{"domain":"kentucky","destination":""},{"domain":"macon","destination":""},{"domain":"mercedsunstar","destination":""},{"domain":"miamiherald","destination":""},{"domain":"modbee","destination":""},{"domain":"myrtlebeachonline","destination":""},{"domain":"theolympian","destination":""},{"domain":"newsobserver","destination":""},{"domain":"heraldonline","destination":""},{"domain":"sacbee","destination":""},{"domain":"sanluisobispo","destination":""},{"domain":"centredaily","destination":""},{"domain":"thenewstribune","destination":""},{"domain":"tri-cityherald","destination":""},{"domain":"kansas","destination":""}];

    let match = links.find(l => {
      return l.domain == domain;
    });

    return match?.destination || false;
  }

  get subscriber() {
    if(window.location.hostname == "localhost") return true;
    return digitalData?.user?.subscription?.status == "sub_0";
  }

  handleClick(e) {
    trackInteraction("Fall Donation 2020", true);
  }
}

// Export for ES6
export default DonationStoryCTA

// Register the custom element
customElements.define("donation-story-cta", DonationStoryCTA);
