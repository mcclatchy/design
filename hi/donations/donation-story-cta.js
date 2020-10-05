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
    let links = [{"domain":"bnd","destination":"https://givebutter.com/bellevillenewsdemocrat"},{"domain":"bellinghamherald","destination":"https://givebutter.com/thebellinghamherald"},{"domain":"sunherald","destination":"https://givebutter.com/biloxisunherald"},{"domain":"idahostatesman","destination":"https://givebutter.com/theidahostatesman"},{"domain":"bradenton","destination":"https://givebutter.com/TheBradentonHerald"},{"domain":"charlotteobserver","destination":"https://givebutter.com/TheCharlotteObserver"},{"domain":"thestate","destination":"https://givebutter.com/State"},{"domain":"ledger-enquirer","destination":"https://givebutter.com/TheLedgerEnquirer"},{"domain":"heraldsun","destination":"https://givebutter.com/TheDurhamHeraldSun"},{"domain":"star-telegram","destination":"https://givebutter.com/TheStarTelegram"},{"domain":"fresnobee","destination":"https://givebutter.com/TheFresnoBee"},{"domain":"islandpacket","destination":"https://givebutter.com/TheIslandPacket"},{"domain":"kansascity","destination":"https://givebutter.com/TheKansasCityStar"},{"domain":"kentucky","destination":""},{"domain":"macon","destination":"https://givebutter.com/TheMaconTelegraph"},{"domain":"mercedsunstar","destination":"https://givebutter.com/theMercedSunStar"},{"domain":"miamiherald","destination":"https://givebutter.com/TheMiamiHerald"},{"domain":"modbee","destination":"https://givebutter.com/TheModestoBee"},{"domain":"myrtlebeachonline","destination":"https://givebutter.com/TheSun"},{"domain":"theolympian","destination":"https://givebutter.com/Olympian"},{"domain":"newsobserver","destination":"https://givebutter.com/TheNewsObserver"},{"domain":"heraldonline","destination":"https://givebutter.com/TheRockHillHerald"},{"domain":"sacbee","destination":"https://givebutter.com/TheSacramentoBee"},{"domain":"sanluisobispo","destination":"https://givebutter.com/TheTribune"},{"domain":"centredaily","destination":"https://givebutter.com/TheCentreDailyTimes"},{"domain":"thenewstribune","destination":"https://givebutter.com/newstrib"},{"domain":"tri-cityherald","destination":"https://givebutter.com/tricityherald"},{"domain":"kansas","destination":"https://givebutter.com/thewichitaeagle"},{"domain":"elnuevoherald","destination":""}];

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
