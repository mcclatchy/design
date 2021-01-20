/**
 * We are listening widget
 * Extends zone-swap by adding the dynamic link by market id
 */

import ZoneSwap from "https://media.mcclatchy.com/labs/skins/zone-swap.js";

const links = [{"market":"bellinghamherald","url":"https://docs.google.com/forms/d/e/1FAIpQLSfjWTApY1bcXPMIVh2s20CvK5EzSHfRjlqL3prGpc0YP4NJvg/viewform"},{"market":"bnd","url":"https://docs.google.com/forms/d/e/1FAIpQLScjvxcQFdQJQr4ZT9b7s9rEr2V5C6prmEr1uSAChBmRXlSBGg/viewform"},{"market":"bradenton","url":"https://docs.google.com/forms/d/e/1FAIpQLSf9DKf5ifOpV4alUr3k0BtIXzoQy4Bbw9L6pxErgE-HTRUs-A/viewform"},{"market":"centredaily","url":"https://docs.google.com/forms/d/e/1FAIpQLSfbc4WilT8JCyblnYJfxrb_3xOtdiiu2Qhz861uqyMKbF7ITw/viewform"},{"market":"charlotteobserver","url":"https://docs.google.com/forms/d/e/1FAIpQLSflCIcsjVDUbVuJCa4U-5_q2p4fLKo-dsmp-wy8Cgv-PJ_N8g/viewform"},{"market":"elnuevoherald","url":"https://docs.google.com/forms/d/e/1FAIpQLSd9CYRUgoiEOYgySHCxQeclNCby6j7UXqBJTip3raZStdekJw/viewform"},{"market":"fresnobee","url":"https://docs.google.com/forms/d/e/1FAIpQLSeviOay0XLb0aYEiOtjn5tEaZNPSZllf9sHwu-v_rbfeJsKHw/viewform"},{"market":"heraldonline","url":"https://docs.google.com/forms/d/e/1FAIpQLSfSc5j3ut6htVy_i0wqZTgJUSR4jFy0WganXejN4llWrtI9fQ/viewform"},{"market":"heraldsun","url":"https://docs.google.com/forms/d/e/1FAIpQLSe7EM_RVLBsQJp9TAcqfObSTEkesE_4dqVyBBJyck1acSgm-A/viewform"},{"market":"idahostatesman","url":"https://docs.google.com/forms/d/e/1FAIpQLSdJN3TRePa8-ul-VbsE-JgdKoLDPGwwMlH-4_BfHPeiPZIc3A/viewform"},{"market":"islandpacket","url":"https://docs.google.com/forms/d/e/1FAIpQLSdE6vlp1HrBqaFUsvQ3OG7hejBpm9IQ6SdoGpo3Gd6CJj3efA/viewform"},{"market":"kansas","url":"https://docs.google.com/forms/d/e/1FAIpQLSfVRRxgfTn7qYaMLIjyBqKIaduE3gDk8KFV2XPcPpoHEgE20Q/viewform"},{"market":"kansascity","url":"https://docs.google.com/forms/d/e/1FAIpQLScRZgSsCqijuhzqaHc4qa2ry4E4BevxmVH5w1le3-RQ33zcQQ/viewform"},{"market":"kentucky","url":"https://docs.google.com/forms/d/e/1FAIpQLSe67wXgxSaEwhuos77ZTvqQnbYDYFbhem_MX_OoKc07ChXsIg/viewform"},{"market":"ledger-enquirer","url":"https://docs.google.com/forms/d/e/1FAIpQLSdr7b1s0oQrz8TEen1_ShxYdmH8jR_owrP1glWlDscXXoaFIw/viewform"},{"market":"macon","url":"https://docs.google.com/forms/d/e/1FAIpQLSc7WIg2R2mi_05F93UvT1mFEsCiuDm1tSzqX-rvjQBqwMCTAA/viewform"},{"market":"mercedsunstar","url":"https://docs.google.com/forms/d/e/1FAIpQLSccOo14pDrxiWnpJzoXz2g-bvaXQcAW85UmRBUPc_Q82F2Vfg/viewform"},{"market":"miamiherald","url":"https://docs.google.com/forms/d/e/1FAIpQLSfyezkOUC8rdbMZJENj3j3nsmX9s0UXpt9uaBQWAXD6PNx5iQ/viewform"},{"market":"modbee","url":"https://docs.google.com/forms/d/e/1FAIpQLSemHhtT3Noxt2mZ3lvTYkcYwMeDwIsOGwCwTf0uW1eGCYc6LA/viewform"},{"market":"myrtlebeachonline","url":"https://docs.google.com/forms/d/e/1FAIpQLSeYOpWV08XjHcQFsy34xxWhvYLHa-TmwIl9qQ9FVFR0fJd57g/viewform"},{"market":"newsobserver","url":"https://docs.google.com/forms/d/e/1FAIpQLSd31RoqrXveNsh-sPzlEz-ZgguCKoeqYWWFrDtxQUta0ohIBw/viewform"},{"market":"sacbee","url":"https://docs.google.com/forms/d/e/1FAIpQLSdvTtCWeW4O0hpzN1S3P8_HbdVcq8wLHvhXJH03i2zCu1pB_Q/viewform"},{"market":"sanluisobispo","url":"https://docs.google.com/forms/d/e/1FAIpQLSfR7E6FEiJhO0Fkhy7W1IYg-WC_xv9IysOlSsGwMB_b2na_BQ/viewform"},{"market":"star-telegram","url":"https://docs.google.com/forms/d/e/1FAIpQLSfWOSwdKBrCh4GcLTyiHmH9I1Fj3cHJvewQBYK4Kux8F5l4Ow/viewform"},{"market":"sunherald","url":"https://docs.google.com/forms/d/e/1FAIpQLSc5lnsGR2u2vuwEVJneiw7uOhsa_IMgP8wiJmaDMY_LcZ0R7A/viewform"},{"market":"thenewstribune","url":"https://docs.google.com/forms/d/e/1FAIpQLScw2o1lpn556DlgoV_CMH4xiP6I3VmG-QQcye4k4Dwc3b3-Mg/viewform"},{"market":"theolympian","url":"https://docs.google.com/forms/d/e/1FAIpQLSdDO_I1mn6GrIJUQ70L9BL4LbKmXie_eMgOfIA_DdavfBX-FA/viewform"},{"market":"thestate","url":"https://docs.google.com/forms/d/e/1FAIpQLSfRd9czuQwDUcerBAwNICE5-qQs-hZLThzZzgijMUJDE9VMFg/viewform"},{"market":"tri-cityherald","url":"https://docs.google.com/forms/d/e/1FAIpQLScSJS1YXNlkOMLhA_zegUFb3lFuNbnfKAZS3ORdwq1MrnuK9g/viewform"}]

class WeAreListeningCTA extends ZoneSwap {
  connectedCallback() {
    super.connectedCallback();

    // Update the link by market
    const match = links.find(l => {
      return l.market == pageInfo["marketInfo.domain"];
    })

    if(match) {
      this.querySelector("a").href = match.url;
    } else {
      this.remove();
    }
  }
}

// Register the element
customElements.define("we-are-listening", WeAreListeningCTA);

// ES export
export default WeAreListeningCTA;
