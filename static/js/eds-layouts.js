class TwoColumnModule extends HTMLElement {
	get template() {
		let t = document.createElement("template");
		t.innerHTML = `
    <link rel="stylesheet" href="/design/css/email/eds.css">
    <center>
      <!-- BODY TABLE // -->
      <table border="0" cellpadding="0" cellspacing="0" role="presentation" height="100%" width="100%" id="body-table">
        <tr>
          <td align="center" valign="top" id="body-cell">
            <!-- MAIN TABLE // -->
            <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="600" id="email-table">
              <tr>
                <td align="left" valign="top" width="100%" class="">
                <!-- EMAIL TABLE // -->
          <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="600" id="email-table">
            <tr>
              <td align="center" valign="top" width="100%" class="card bg-white">
                <!-- TWO EQUAL-WIDTH COLLAPSING COLUMNS // -->
                <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                  <tr>
                    <td align="left" valign="top" class="col collapse first" width="264">
                      <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%">
                        <tr>
                          <td align="left" valign="top" width="100%" class="pb16">
                            <a href="#" target="_blank"><img src="https://via.placeholder.com/528" width="264" alt=""></a>
                          </td>
                        </tr>
                        <tr>
                          <td align="left" valign="top" width="100%" class="h3">
                            Gamp's Elemental Law
                          </td>
                        </tr>
                        <tr>
                          <td align="left" valign="top" width="100%" class="small">
                            Room of Requirement Shrieking Shack. Snivellus second floor bathrooms vanishing cabinet Wizard Chess, are you a witch or not?
                          </td>
                        </tr>
                      </table>
                    </td>
                    <td align="left" valign="top" class="col collapse last" width="264">
                      <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%">
                        <tr>
                          <td align="left" valign="top" width="100%" class="pb16">
                            <a href="#" target="_blank"><img src="https://via.placeholder.com/528" width="264" alt=""></a>
                          </td>
                        </tr>
                        <tr>
                          <td align="left" valign="top" width="100%" class="h3">
                            Gamp's Elemental Law
                          </td>
                        </tr>
                        <tr>
                          <td align="left" valign="top" width="100%" class="small">
                            Room of Requirement Shrieking Shack. Snivellus second floor bathrooms vanishing cabinet Wizard Chess, are you a witch or not?
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>
                <!-- // TWO EQUAL-WIDTH COLLAPSING COLUMNS -->
                  </td>
                </tr>
            </table>
            <!-- // MAIN TABLE -->
          </td>
        </tr>
      </table>
      <!-- // BODY TABLE -->
    </center>
		`;
		return t;   
	}
	constructor() {
		super();
	}
	connectedCallback() {
		let clone = this.template.content.cloneNode(true);
		this.attachShadow({ mode: "open" });
		this.shadowRoot.appendChild(clone);
	}
} // end Class

customElements.define("two-column-module", TwoColumnModule);




class TwoColumnThirds extends HTMLElement {
	get template() {
		let t = document.createElement("template");
		t.innerHTML = `
    <link rel="stylesheet" href="/design/css/email/eds.css">
    <center>
      <!-- BODY TABLE // -->
      <table border="0" cellpadding="0" cellspacing="0" role="presentation" height="100%" width="100%" id="body-table">
        <tr>
          <td align="center" valign="top" id="body-cell">
            <!-- MAIN TABLE // -->
            <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="600" id="email-table">
              <tr>
                <td align="left" valign="top" width="100%" class="">
                <!-- EMAIL TABLE // -->
          <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="600" id="email-table">
            <tr>
              <td align="center" valign="top" width="100%" class="card bg-white">
              <!-- TWO UNEQUAL-WIDTH COLLAPSING COLUMNS (THIRDS) // -->
                <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%">
                  <tr>
                    <td align="left" valign="top" class="col collapse first p center-mobile" width="168">
                      <a href="#" target="_blank"><img src="https://via.placeholder.com/336" width="168" alt="" /></a>
                    </td>
                    <td align="left" valign="top" class="col collapse last p center-mobile">
                      Pumpkin juice Trevor wave your wand out glass orbs, a Grim knitted hats. Bred in captivity fell through the veil, quaffle blue flame ickle diddykins Aragog. Yer a wizard, Harry Doxycide the woes of Mrs. Weasley Goblet of Fire.
                    </td>
                  </tr>
                </table>
                <!-- // TWO UNEQUAL-WIDTH COLLAPSING COLUMNS (THIRDS) -->
                  </td>
                </tr>
            </table>
            <!-- // MAIN TABLE -->
          </td>
        </tr>
      </table>
      <!-- // BODY TABLE -->
    </center>
		`;
		return t;   
	}
	constructor() {
		super();
	}
	connectedCallback() {
		let clone = this.template.content.cloneNode(true);
		this.attachShadow({ mode: "open" });
		this.shadowRoot.appendChild(clone);
	}
} // end Class
customElements.define("two-column-thirds", TwoColumnThirds);



class TwoColumnFourths extends HTMLElement {
	get template() {
		let t = document.createElement("template");
		t.innerHTML = `
    <link rel="stylesheet" href="/design/css/email/eds.css">
    <center>
      <!-- BODY TABLE // -->
      <table border="0" cellpadding="0" cellspacing="0" role="presentation" height="100%" width="100%" id="body-table">
        <tr>
          <td align="center" valign="top" id="body-cell">
            <!-- MAIN TABLE // -->
            <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="600" id="email-table">
              <tr>
                <td align="left" valign="top" width="100%" class="">
                <!-- EMAIL TABLE // -->
          <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="600" id="email-table">
            <tr>
              <td align="center" valign="top" width="100%" class="card bg-white">
              <!-- TWO UNEQUAL NON-COLLAPSING COLUMNS (FOURTHS) -->
                  <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%">
                    <tr>
                      <td align="left" valign="top" class="col-fixed first p" width="120">
                        <a href="#" target="_blank"><img src="https://via.placeholder.com/240" width="120" alt="" /></a>
                      </td>
                      <td align="left" valign="top" class="col-fixed last p">
                        Stan Shunpike doe patronus, suck his soul Muggle Born large order of drills the trace. Slytherin's Heir mewing kittens Remus Lupin.
                      </td>
                    </tr>
                  </table>
                  <!-- // TWO UNEQUAL NON-COLLAPSING COLUMNS (FOURTHS) -->
                  </td>
                </tr>
            </table>
            <!-- // MAIN TABLE -->
          </td>
        </tr>
      </table>
      <!-- // BODY TABLE -->
    </center>
		`;
		return t;   
	}
	constructor() {
		super();
	}
	connectedCallback() {
		let clone = this.template.content.cloneNode(true);
		this.attachShadow({ mode: "open" });
		this.shadowRoot.appendChild(clone);
	}
} // end Class
customElements.define("two-column-fourths", TwoColumnFourths);



class ThreeColumnModule extends HTMLElement {
	get template() {
		let t = document.createElement("template");
		t.innerHTML = `
    <link rel="stylesheet" href="/design/css/email/eds.css">
    <center>
      <!-- BODY TABLE // -->
      <table border="0" cellpadding="0" cellspacing="0" role="presentation" height="100%" width="100%" id="body-table">
        <tr>
          <td align="center" valign="top" id="body-cell">
            <!-- MAIN TABLE // -->
            <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="600" id="email-table">
              <tr>
                <td align="left" valign="top" width="100%" class="">
                <!-- EMAIL TABLE // -->
          <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="600" id="email-table">
            <tr>
              <td align="center" valign="top" width="100%" class="card bg-white">
              <!-- THREE EQUAL-WIDTH COLLAPSING COLUMNS // -->
                  <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%">
                    <tr>
                      <td align="center" valign="top" class="col collapse first" width="168">
                        <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%">
                          <tr>
                            <td align="center" valign="top" width="100%" class="pb8">
                              <img src="https://media.mcclatchy.com/email-assets/global/icons/bolt-dark-unicon.png" width="40" alt="bolt icon">
                            </td>
                          </tr>
                          <tr>
                            <td align="center" valign="top" width="100%" class="p">
                              Nearly-Headless Nick now string them together.
                            </td>
                          </tr>
                        </table>
                      </td>
                      <td align="center" valign="top" class="col collapse" width="168">
                        <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%">
                          <tr>
                            <td align="center" valign="top" width="100%" class="pb8">
                              <img src="https://media.mcclatchy.com/email-assets/global/icons/bolt-dark-unicon.png" width="40" alt="bolt icon">
                            </td>
                          </tr>
                          <tr>
                            <td align="center" valign="top" width="100%" class="p">
                              Flying cars golden locket vanishing cabinet
                            </td>
                          </tr>
                        </table>
                      </td>
                      <td align="center" valign="top" class="col collapse last" width="168">
                        <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%">
                          <tr>
                            <td align="center" valign="top" width="100%" class="pb8">
                              <img src="https://media.mcclatchy.com/email-assets/global/icons/bolt-dark-unicon.png" width="40" alt="bolt icon">
                            </td>
                          </tr>
                          <tr>
                            <td align="center" valign="top" width="100%" class="p">
                              Poltergeist sticking charm, umbrella stand.
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                  <!-- // THREE EQUAL-WIDTH COLLAPSING COLUMNS -->
                  </td>
                </tr>
            </table>
            <!-- // MAIN TABLE -->
          </td>
        </tr>
      </table>
      <!-- // BODY TABLE -->
    </center>
		`;
		return t;   
	}
	constructor() {
		super();
	}
	connectedCallback() {
		let clone = this.template.content.cloneNode(true);
		this.attachShadow({ mode: "open" });
		this.shadowRoot.appendChild(clone);
	}
} // end Class
customElements.define("three-column-module", ThreeColumnModule);


class ZigZagLayout extends HTMLElement {
	get template() {
		let t = document.createElement("template");
		t.innerHTML = `
    <link rel="stylesheet" href="/design/css/email/eds.css">
    <center>
      <!-- BODY TABLE // -->
      <table border="0" cellpadding="0" cellspacing="0" role="presentation" height="100%" width="100%" id="body-table">
        <tr>
          <td align="center" valign="top" id="body-cell">
            <!-- MAIN TABLE // -->
            <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="600" id="email-table">
            <tr>
              <td align="center" valign="top" width="100%" class="card bg-white">
                <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                  <tr>
                    <td align="center" valign="top" class="pb16">
                      <img src="https://media.mcclatchy.com/email-assets/global/icons/star-dark.png" width="40" alt="star icon" />
                    </td>
                  </tr>
                  <tr>
                    <td align="center" valign="top" class="pb8 h2">
                      Exclusive Content
                    </td>
                  </tr>
                  <tr>
                    <td align="center" valign="top" class="pb24 p">
                      The eEdition offers exclusive content not available in print.
                    </td>
                  </tr>
                  <tr>
                    <td align="center" valign="top" class="pb24">
                      <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                        <tr>
                          <td align="left" valign="top" width="168" class="col first collapse">
                            <img src="https://media.mcclatchy.com/email-assets/global/welcome-series/ipad-extra-extra.png" width="168" alt="Extra Extra section" />
                          </td>
                          <td align="center" valign="middle" width="360" class="col row-end collapse">
                            <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                              <tr>
                                <td align="left" valign="top" class="pb8">
                                  <img src="https://media.mcclatchy.com/email-assets/global/icons/bullhorn-dark.png" width="24" alt="bullhorn icon" />
                                </td>
                              </tr>
                              <tr>
                                <td align="left" valign="top" class="pb8 h3">
                                  Extra Extra
                                </td>
                              </tr>
                              <tr>
                                <td align="left" valign="top" class="small">
                                  The best and most interesting stories from around the nation and world are showcased, featuring the latest in news, politics, entertainment, health, faith and more.
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                  <tr>
                    <td align="center" valign="top" class="pb24" dir="rtl">
                      <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                        <tr>
                          <td align="left" valign="top" width="168" class="col row-end collapse" dir="ltr">
                            <img src="https://media.mcclatchy.com/email-assets/global/welcome-series/ipad-sportsxtra.png" width="168" alt="SportsXtra section" />
                          </td>
                          <td align="center" valign="middle" width="360" class="col first collapse" dir="ltr">
                            <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                              <tr>
                                <td align="left" valign="top" class="pb8">
                                  <img src="https://media.mcclatchy.com/email-assets/global/icons/pennant-dark.png" width="24" alt="pennant icon" />
                                </td>
                              </tr>
                              <tr>
                                <td align="left" valign="top" class="pb8 h3">
                                  SportsXtra
                                </td>
                              </tr>
                              <tr>
                                <td align="left" valign="top" class="small">
                                  Want the latest sports news from around the country? SportsXtra offers highlights and recaps, as well as analysis and commentary that go beyond the game.
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                  <tr>
                    <td align="center" valign="top" class="">
                      <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                        <tr>
                          <td align="left" valign="top" width="168" class="col first collapse">
                            <img src="https://media.mcclatchy.com/email-assets/global/welcome-series/ipad-money-markets.png" width="168" alt="Money &amp; Markets section" />
                          </td>
                          <td align="center" valign="middle" width="360" class="col last collapse">
                            <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                              <tr>
                                <td align="left" valign="top" class="pb8">
                                  <img src="https://media.mcclatchy.com/email-assets/global/icons/money-bill-wave-dark.png" width="24" alt="dollar bill icon" />
                                </td>
                              </tr>
                              <tr>
                                <td align="left" valign="top" class="pb8 h3">
                                  Money &amp; Markets
                                </td>
                              </tr>
                              <tr>
                                <td align="left" valign="top" class="small">
                                  View key stats on market happenings that affect you and your money. Explore performance of mutual funds, commodities, interest rates and more.
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            </table>
            <!-- // MAIN TABLE -->
          </td>
        </tr>
      </table>
      <!-- // BODY TABLE -->
    </center>
		`;
		return t;   
	}
	constructor() {
		super();
	}
	connectedCallback() {
		let clone = this.template.content.cloneNode(true);
		this.attachShadow({ mode: "open" });
		this.shadowRoot.appendChild(clone);
	}
} // end Class
customElements.define("zig-zag", ZigZagLayout);


class ZigZagMobile extends HTMLElement {
	get template() {
		let t = document.createElement("template");
		t.innerHTML = `
    <link rel="stylesheet" href="/design/css/email/eds.css">

   <style type="text/css">
		 .fake-mobile #email-table {
			height: auto !important;
			max-width: 375px !important;
			width: 100% !important;
		}
		.fake-mobile .collapse {
			display: block !important;
			width: 100% !important;
			direction: ltr !important;
		}
		.fake-mobile img {
			max-width: 100% !important;
		}
		.fake-mobile .center-mobile {
			text-align: center !important;
		}
		.fake-mobile .center-mobile img {
			margin: 0 auto !important;
		}
		.fake-mobile .col {
			padding-left: 0 !important;
			padding-right: 0 !important;
			padding-bottom: 24px !important;
		}
		.fake-mobile .last {
			padding-bottom: 0 !important;
		}
		</style>
    <center>
      <!-- BODY TABLE // -->
      <table border="0" cellpadding="0" cellspacing="0" role="presentation" height="100%" width="100%" id="body-table" class="fake-mobile">
        <tr>
          <td align="center" valign="top" id="body-cell">
            <!-- MAIN TABLE // -->
            <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="600" id="email-table">
            <tr>
              <td align="center" valign="top" width="100%" class="card bg-white">
                <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                  <tr>
                    <td align="center" valign="top" class="pb16">
                      <img src="https://media.mcclatchy.com/email-assets/global/icons/star-dark.png" width="40" alt="star icon" />
                    </td>
                  </tr>
                  <tr>
                    <td align="center" valign="top" class="pb8 h2">
                      Exclusive Content
                    </td>
                  </tr>
                  <tr>
                    <td align="center" valign="top" class="pb24 p">
                      The eEdition offers exclusive content not available in print.
                    </td>
                  </tr>
                  <tr>
                    <td align="center" valign="top" class="pb24">
                      <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                        <tr>
                          <td align="left" valign="top" width="168" class="col first collapse">
                            <img src="https://media.mcclatchy.com/email-assets/global/welcome-series/ipad-extra-extra.png" width="168" alt="Extra Extra section" />
                          </td>
                          <td align="center" valign="middle" width="360" class="col row-end collapse">
                            <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                              <tr>
                                <td align="left" valign="top" class="pb8">
                                  <img src="https://media.mcclatchy.com/email-assets/global/icons/bullhorn-dark.png" width="24" alt="bullhorn icon" />
                                </td>
                              </tr>
                              <tr>
                                <td align="left" valign="top" class="pb8 h3">
                                  Extra Extra
                                </td>
                              </tr>
                              <tr>
                                <td align="left" valign="top" class="small">
                                  The best and most interesting stories from around the nation and world are showcased, featuring the latest in news, politics, entertainment, health, faith and more.
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                  <tr>
                    <td align="center" valign="top" class="pb24" dir="rtl">
                      <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                        <tr>
                          <td align="left" valign="top" width="168" class="col row-end collapse" dir="ltr">
                            <img src="https://media.mcclatchy.com/email-assets/global/welcome-series/ipad-sportsxtra.png" width="168" alt="SportsXtra section" />
                          </td>
                          <td align="center" valign="middle" width="360" class="col first collapse" dir="ltr">
                            <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                              <tr>
                                <td align="left" valign="top" class="pb8">
                                  <img src="https://media.mcclatchy.com/email-assets/global/icons/pennant-dark.png" width="24" alt="pennant icon" />
                                </td>
                              </tr>
                              <tr>
                                <td align="left" valign="top" class="pb8 h3">
                                  SportsXtra
                                </td>
                              </tr>
                              <tr>
                                <td align="left" valign="top" class="small">
                                  Want the latest sports news from around the country? SportsXtra offers highlights and recaps, as well as analysis and commentary that go beyond the game.
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                  <tr>
                    <td align="center" valign="top" class="">
                      <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                        <tr>
                          <td align="left" valign="top" width="168" class="col first collapse">
                            <img src="https://media.mcclatchy.com/email-assets/global/welcome-series/ipad-money-markets.png" width="168" alt="Money &amp; Markets section" />
                          </td>
                          <td align="center" valign="middle" width="360" class="col last collapse">
                            <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                              <tr>
                                <td align="left" valign="top" class="pb8">
                                  <img src="https://media.mcclatchy.com/email-assets/global/icons/money-bill-wave-dark.png" width="24" alt="dollar bill icon" />
                                </td>
                              </tr>
                              <tr>
                                <td align="left" valign="top" class="pb8 h3">
                                  Money &amp; Markets
                                </td>
                              </tr>
                              <tr>
                                <td align="left" valign="top" class="small">
                                  View key stats on market happenings that affect you and your money. Explore performance of mutual funds, commodities, interest rates and more.
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            </table>
            <!-- // MAIN TABLE -->
          </td>
        </tr>
      </table>
      <!-- // BODY TABLE -->
    </center>
		`;
		return t;   
	}
	constructor() {
		super();
	}
	connectedCallback() {
		let clone = this.template.content.cloneNode(true);
		this.attachShadow({ mode: "open" });
		this.shadowRoot.appendChild(clone);
	}
} // end Class
customElements.define("zig-zag-mobile", ZigZagMobile);

