---
title: "Columns"
description: "how to work with multi-column layouts"
menu: "layouts"
---

All CSS for columns is included in the framework. The 552px content space can be divided into several collapsible or fixed columns by using the class `.col` on a `td` to create the column and `.collapse` to make it collapse for mobile screens. If you want fixed columns, use the class `.col-fixed` and do not use `.collapse`.

The first column in each row will need the `.first` class and the last one will need `.last`. If the group of columns goes onto more than 1 row, like in a 2x2 grid layout, the last column in each row should be given `.row-end` instead of `.last`, with only the final column on the final row being assigned `.last`. This ensures correct padding when collapsed.

The `width` attribute value determines the width of a column on desktop, and is always a multiple of 8. Gutters are always 24px (achieved with side padding values of 12px on each column). Adjust the text alignment by changing the align attribute value in each `td`.

<div class="note">
Centering for mobile view only: There may be instances in which a column is left-aligned on desktop and needs to be centered on mobile. For this, set the desktop alignment using the <code>align="left"</code> attribute on the <code>td</code> and add the class <code>.center-mobile</code>.
</div>

---

### Two equal-width columns
Two columns of equal width that collapse on mobile.

#### Example
<div class="example">
	<two-column-module></two-column-module>
</div>

#### HTML
```html
<!-- TWO EQUAL-WIDTH COLLAPSING COLUMNS // -->
<table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
	<tr>
		<td align="center" valign="top" class="col collapse first" width="264">
			use a nested table if more than 1 type of content is going here
		</td>
		<td align="center" valign="top" class="col collapse last" width="264">
			use a nested table if more than 1 type of content is going here
		</td>
	</tr>
</table>
<!-- // TWO EQUAL-WIDTH COLLAPSING COLUMNS -->
```

---
### Two unequal-width columns (thirds)
Two columns -- one of 1/3 width and the other 2/3 width -- that collapse on mobile.

#### Example
<div class="example">
	<two-column-thirds></two-column-thirds>
</div>

#### HTML
```html
<!-- TWO UNEQUAL-WIDTH COLLAPSING COLUMNS (THIRDS) // -->
<table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%">
	<tr>
		<td align="left" valign="top" class="col collapse first" width="168">
			use a nested table if more than 1 type of content is going here
		</td>
		<td align="left" valign="top" class="col collapse last">
			use a nested table if more than 1 type of content is going here
		</td>
	</tr>
</table>
<!-- // TWO UNEQUAL-WIDTH COLLAPSING COLUMNS (THIRDS) -->
```

---
### Two unequal-width columns (fourths)
Two columns -- one of 1/4 width and the other 3/4 width -- that *do not* collapse on mobile (the column with a set width stays the same size and the other column fills the remaining space).

#### Example
<div class="example">
	<two-column-fourths></two-column-fourths>
</div>

#### HTML
```html
<!-- TWO UNEQUAL NON-COLLAPSING COLUMNS (FOURTHS) -->
<table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%">
	<tr>
		<td align="left" valign="top" class="col-fixed first" width="120">
			use a nested table if more than 1 type of content is going here
		</td>
		<td align="left" valign="top" class="col-fixed last">
			use a nested table if more than 1 type of content is going here
		</td>
	</tr>
</table>
<!-- // TWO UNEQUAL NON-COLLAPSING COLUMNS (FOURTHS) -->
```

---
### Three equal-width columns
Three columns of equal width that collapse on mobile.

#### Example
<div class="example">
	<three-column-module></three-column-module>
</div>

#### HTML
```html
<!-- THREE EQUAL-WIDTH COLLAPSING COLUMNS // -->
<table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%">
	<tr>
		<td align="center" valign="top" class="col collapse first" width="168">
			use a nested table if more than 1 type of content is going here
		</td>
		<td align="center" valign="top" class="col collapse" width="168">
			use a nested table if more than 1 type of content is going here
		</td>
		<td align="center" valign="top" class="col collapse last" width="168">
			use a nested table if more than 1 type of content is going here
		</td>
	</tr>
</table>
<!-- // THREE EQUAL-WIDTH COLLAPSING COLUMNS -->
```
<script>
class TwoColumnModule extends HTMLElement {
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
customElements.define("two-column-module", TwoColumnModule);
class TwoColumnThirds extends HTMLElement {
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
customElements.define("two-column-thirds", TwoColumnThirds);
class TwoColumnFourths extends HTMLElement {
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
customElements.define("two-column-fourths", TwoColumnFourths);
class ThreeColumnModule extends HTMLElement {
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
customElements.define("three-column-module", ThreeColumnModule);
</script>
