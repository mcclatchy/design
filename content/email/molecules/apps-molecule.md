---
title: "App Molecule"
description: "download our app and app badges"
menu: "molecules"
---

This molecule is frequently used before the footer in marketing emails.

### Example

<div class="example">
	<app-molecule></apps-molecule>
</div>

### HTML

```html
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
```

<script>
class AppMolecule extends HTMLElement {
	get template() {
		let t = document.createElement("template");
		t.innerHTML = `
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
		 <style>
			 @import url( '/css/email/eds.css' )
		 </style>
</head>
<body>
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
</body>
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
customElements.define("app-molecule", AppMolecule);
</script>
