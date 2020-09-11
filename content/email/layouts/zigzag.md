---
title: "Zig-Zag Layout"
description: "how to create a zig-zag layout that collapses gracefully on mobile"
menu: "layouts"
---

Zig-zag layouts are great on desktop, but need to collapse so that everything is in the same order on mobile. This layout uses elements from the [columns](../columns) layout.

How to zig-zag:

1. Code every row in a zig-zag layout in the order intended for mobile (usually image in the left column and text in the right).
2. For reversed rows, put the `.first`/`.row-end`/`.last` classes in reverse (so the first column on each row as coded would have `.last` or `.row-end` but the last one would have `.first`).
3. Add the `dir=rtl` attribute on the outermost `td` for the zig-zag rows and add `dir=ltr` on each column in the zig-zag rows.

### Example
#### Desktop Render
<div class="example">
	<zig-zag></zig-zag>
</div>

#### Mobile Render
<div class="example">
	<zig-zag-mobile></zig-zag-mobile>
</div>

### HTML
```html
<!-- ZIG-ZAG MOLECULE // -->
<table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
	<!-- NORMAL ROW // -->
	<tr>
		<td align="center" valign="top" class="pb24">

			<table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
				<tr>
					<td align="left" valign="top" width="168" class="col first collapse">
						image
					</td>
					<td align="center" valign="middle" width="360" class="col row-end collapse">
						text (use a nested table if there are different styles of text)
					</td>
				</tr>
			</table>

		</td>
	</tr>
	<!-- // NORMAL ROW -->
	<!-- ZIG-ZAG ROW // -->
	<tr>
		<td align="center" valign="top" class="pb24" dir="rtl">

			<table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
				<tr>
					<td align="left" valign="top" width="168" class="col row-end collapse" dir="ltr">
						image
					</td>
					<td align="center" valign="middle" width="360" class="col first collapse" dir="ltr">
						text (use a nested table if there are different styles of text)
					</td>
				</tr>
			</table>

		</td>
	</tr>
	<!-- // ZIG-ZAG ROW -->
	<!-- NORMAL ROW // -->
	<tr>
		<td align="center" valign="top" class="pb24">

			<table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
				<tr>
					<td align="left" valign="top" width="168" class="col first collapse">
						image
					</td>
					<td align="center" valign="middle" width="360" class="col last collapse">
						text (use a nested table if there are different styles of text)
					</td>
				</tr>
			</table>

		</td>
	</tr>
	<!-- // NORMAL ROW -->
</table>
<!-- // ZIG-ZAG MOLECULE -->

```

<script>
class ZigZagLayout extends HTMLElement {
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
customElements.define("zig-zag", ZigZagLayout);
class ZigZagMobile extends HTMLElement {
	get template() {
		let t = document.createElement("template");
		t.innerHTML = `
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
		 <style>
			 @import url( '/css/email/eds.css' )
		 </style>
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
</head>
<body>
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
customElements.define("zig-zag-mobile", ZigZagMobile);
</script>
