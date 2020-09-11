class EdsAppMolecule extends HTMLElement {
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
                <td align="left" valign="top" width="100%" class="card">
                <!-- // DOWNLOAD OUR APP -->
  <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%">
  <tr>
    <td align="center" valign="top" class="pb16 h3">
      Download our app
    </td>
  </tr>
  <tr>
    <td align="center" valign="top">
      <!-- APP BADGES // -->
      <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%">
        <tr>
          <td align="right" valign="top" class="col-fixed first">
            <a href="https://<%= recipient.siteBrand.iosApp %>" target="_blank"><img src="https://media.mcclatchy.com/email-assets/global/app-store-badge.png" width="120" alt="Download on the App Store" /></a>
          </td>
          <td align="left" valign="top" class="col-fixed last">
            <a href="https://<%= recipient.siteBrand.googlePlayApp %>" target="_blank"><img src="https://media.mcclatchy.com/email-assets/global/google-play-badge.png" width="134" alt="Get it on Google Play" /></a>
          </td>
        </tr>
      </table>
      <!-- // APP BADGES -->
    </td>
  </tr>
  </table>
  <!-- // DOWNLOAD OUR APP -->
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
customElements.define("eds-app-molecule", EdsAppMolecule);
class EdsBasicMolecule extends HTMLElement {
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
                        <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%">
                          <tr>
                            <td align="center" valign="top" class="pb16">
                              <img src="https://media.mcclatchy.com/email-assets/global/icons/bolt-dark-unicon.png" width="40" alt="bolt icon" />
                            </td>
                          </tr>
                          <tr>
                          <td align="center" valign="top" class="pb8 h2">
                            Subheading
                          </td>
                        </tr>
                        <tr>
                          <td align="center" valign="top" class="pb24 p">
                            Devil’s snare love potion Ravenclaw, Professor Sinistra time-turner steak and kidney pie. Cabbage Daily Prophet letters from no one.
                          </td>
                        </tr>
                        <tr>
                          <td align="center" valign="top">
                            <table role="presentation" border="0" cellpadding="0" cellspacing="0">
                              <tr>
                                <td align="center" valign="top" class="button">
                                  <a href="#" target="_blank" class="button-link">Button</a>
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
customElements.define("eds-basic-molecule", EdsBasicMolecule);

class EdsButtons extends HTMLElement {
	get template() {
		let t = document.createElement("template");
		t.innerHTML = `
    <link rel="stylesheet" href="/design/css/email/eds.css">

    <style>
      :host {
        display: block;
      }

      table {
        margin: 0 auto;
      }
    </style>

    <table role="presentation" border="0" cellpadding="0" cellspacing="0">
      <tr>
        <td align="center" valign="top" class="button">
          <a href="#" class="button-link">Button Text</a>
        </td>
        <td class="ps8"></td>
        <td align="center" valign="top" class="button bg-blue">
          <a href="#" class="button-link border-blue white">Button Text</a>
        </td>
        <td class="ps8"></td>
        <td align="center" valign="top" class="button bg-white">
          <a href="#" class="button-link border-white gray">Button Text</a>
        </td>
        <td class="ps8"></td>
        <td align="center" valign="top" class="button bg-white">
          <a href="#" class="button-link border-white blue">Button Text</a>
        </td>
      </tr>
    </table>
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
customElements.define("eds-buttons", EdsButtons);

