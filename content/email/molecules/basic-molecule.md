---
title: "Basic Molecule"
description: "large icon, subheading, body copy and button"
menu: "molecules"
---

This molecule is used frequently in the email Welcome Series and serves as a good starting point for many other use cases.

### Example

<div class="example">
	<basic-molecule></basic-molecule>
</div>

### HTML

```html
<table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%">
	<tr>
		<td align="center" valign="top" class="pb16">
			<img src="https://media.mcclatchy.com/email-assets/global/icons/ICON-NAME.png" width="40" alt="ICON NAME icon" />
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
							 <a href="#" target="_blank" class="button-link">Button Text</a>
						</td>
				 </tr>
			</table>

		</td>
	</tr>
</table>
```

<script>
class BasicMolecule extends HTMLElement {
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
customElements.define("basic-molecule", BasicMolecule);
</script>
