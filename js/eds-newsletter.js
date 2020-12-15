class EdsNewsletter extends HTMLElement {
	get template() {
		let t = document.createElement("template");
		t.innerHTML = `
    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,400;0,700;1,400&family=Noto+Serif:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="/design/css/email/eds.css">

    <style>
      :host {
        display: block;
      }
      .headshot {
        height: 120px;
        border-radius: 50%;
        object-fit: cover;
      }
      .keyframe {
        background-image: url('https://via.placeholder.com/1200x676?text=video+keyframe');
        background-color: #222222;
        background-size: 100%;
        background-repeat: no-repeat;
        background-position: center;
      }
      .kicker {
        display: inline-block;
        border: 1px solid #222;
        border-radius: 2px;
        font-family: 'Noto Sans', Tahoma, Arial, sans-serif;
        font-weight: 400;
        color: #222;
        font-size: 12px;
        line-height: 16px;
        text-decoration: none;
        padding: 4px 8px;
        text-transform: uppercase;
      }
      .story-headline {
        font-family: 'Noto Serif', 'Times New Roman', serif;
        font-weight: 700;
        font-size: 24px;
        line-height: 32px;
        color: #222;
        text-transform: none;
      }
      .link-plain {
        text-decoration: none;
        color: #222;
      }
      .ad-label {
        padding-bottom: 8px;
        font-family: 'Noto Sans', Tahoma, sans-serif;
        font-size: 11px;
        line-height: 16px;
        font-weight: 400;
        text-transform: uppercase;
        color: #525252;
      }
      .ad-img {
        width: auto;
        max-width: 552px;
      }
      .list-label {
        background-color: #222;
        padding: 4px 8px;
        font-family: 'Noto Sans', Tahoma, sans-serif;
        color: #fff;
        font-weight: 700;
        font-size: 14px;
        text-transform: uppercase;
      }
      .list-headline {
        font-family: 'Noto Serif', 'Times New Roman', serif;
        font-weight: 400;
        font-size: 18px;
        line-height: 24px;
        color: #222;
      }
      .summary p {font-family: 'Noto Sans', Tahoma, Arial, sans-serif;font-size: 14px;line-height: 20px;color: #222;}
      .summary b {font-weight: 700;}
      .summary a {color: #31409f;text-decoration: underline;font-weight: 400;}
      .summary h3 {margin: 0;padding: 0;font-weight: bold;font-size: 18px;line-height: 24px;text-transform: uppercase;color: #222;}
    </style>
    <center>
			<!-- BODY TABLE // -->
			<table border="0" cellpadding="0" cellspacing="0" height="100%" width="100%" role="presentation" id="body-table">
				<tr>
					<td align="center" valign="top" width="100%" id="body-cell">

						<!--PREVENT OUTLOOK FROM DEFAULTING TO TIMES NEW ROMAN BECAUSE OF CUSTOM FONTS-->
						<!--[if mso]>
						<style type="text/css">
						td, .preview-text, .h1, .h2, .h3, .p, a, .button-link {font-family: Tahoma, Arial, sans-serif !important;}
						.h4, .serif, .story-headline {font-family: 'Times New Roman', serif !important;}
						</style>
						<![endif]-->

						<div class="preview-text">
							<%= message.delivery.title %>
							&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;
						</div>

						<!-- HEADER TABLE // -->
						<table border="0" cellpadding="0" cellspacing="0" width="100%" role="presentation" id="header-table">
							<tr>
								<td align="center" valign="top" width="100%" id="header">
									<%@ include view='mccDynamicHeader' %>
								</td>
							</tr>
						</table>
						<!-- // HEADER TABLE -->

						<!-- MAIN TABLE // -->
						<table border="0" cellpadding="0" cellspacing="0" width="600" role="presentation" id="email-table">
							<tr>
								<td align="center" valign="top" width="100%" class="pb24">

									<!-- NEWSLETTER INTRO // -->
									<table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
										<tr>
											<td align="center" valign="top" width="100%" class="card">
												<!-- title -->
												<%@ include view='title_newsletter' %>
											</td>
										</tr>
										<tr>
											<td align="center" valign="top" width="100%" class="pb24">
												<!-- banner image -->
												<img src="https://via.placeholder.com/1200x676?text=banner+image" id="bannerID" class="bannerClass" alt="banner_image" style="width: bannerWidth;" width="600" >
											</td>
										</tr>
										<tr>
	                    <td align="center" valign="top" width="100%" class="ps24 pb24">

												<!-- author card -->
												<table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
													<tr>
														<td align="right" valign="top" width="120" class="col-fixed first">
															<img src="https://via.placeholder.com/240?text=headshot" width="120" alt="headshot" class="headshot" />
														</td>
														<td align="left" valign="middle" class="col-fixed last p">
															First Last<br>
															Title, Property Name <br>
															<a href="mailto" target="_blank"><img src="https://media.mcclatchy.com/email-assets/global/icons/envelope-dark.png" alt="email" width="24" class="img-inline"></a>
														</td>
													</tr>
												</table>

	                    </td>
	                  </tr>
										<tr>
											<td align="left" valign="top" width="100%" class="ps24 small summary">
												<!-- intro -->
												Intro text goes here. Intro text goes here. <span class="bold">Here is some bold text.</span> Intro text goes here. Intro text goes here. Intro text goes here. Intro text goes here. Intro text goes here. <span class="bold">Here is some bold text.</span> Intro text goes here. Intro text goes here. Intro text goes here. Intro text goes here. Intro text goes here.
												<ul>
													<li>Maybe there is a bulleted list. Maybe there is a bulleted list. Maybe there is a bulleted list. Maybe there is a bulleted list.</li>
													<li>Maybe there is a <a href="#" target="_blank" class="blue">text link</a> somewhere.</li>
													<li>Maybe there is a bulleted list. Maybe there is a bulleted list.</li>
												</ul>
											</td>
										</tr>
									</table>
									<!-- // NEWSLETTER INTRO -->

								</td>
							</tr>
							<tr>
								<td align="center" valign="top" width="100%" class="pb24">

									<!-- STORY CARD // -->
									<table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
										<tr>
											<td align="center" valign="top" width="100%">
												<!-- story image -->
												<a href="#" target="_blank"><img src="https://via.placeholder.com/1200x676?text=story+image" width="600" alt="story image"></a>
											</td>
										</tr>
										<tr>
											<td align="center" valign="top" width="100%">

												<!-- STORY PACKAGE // -->
												<table border="0" cellpadding="0" cellspacing="0" width="100%">
													<tr>
														<td align="center" valign-"top" width="100%" class="card bg-white">

															<table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
																<tr>
																	<td align="left" valign="top" width="100%" class="pb16">
																		<!-- kicker -->
																		<a href="#" target="_blank" class="kicker">Kicker</a>
																	</td>
																</tr>
																<tr>
																	<td align="left" valign="top" width="100%" class="pb16">
																		<!-- headline -->
																		<a href="#" target="_blank" class="story-headline link-plain">Story headline goes here story headline goes here story headline goes here</a>
																	</td>
																</tr>
																<tr>
																	<td align="left" valign="top" width="100%" class="p">
																		<!-- summary -->
																		Summary text goes here. Summary text goes here. Summary text goes here. Summary text goes here. Summary text goes here.
																	</td>
																</tr>
															</table>

														</td>
													</tr>
												</table>
												<!-- // STORY PACKAGE -->

											</td>
										</tr>
									</table>
									<!-- // STORY CARD -->

								</td>
							</tr>
							<tr>
								<td align="center" valign="top" width="100%" class="pb24">

									<!-- STORY CARD // -->
									<table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
										<tr>
											<td align="center" valign="top" width="100%" class="keyframe">
												<!-- story image -->
												<a href="#" target="_blank"><img src="https://media.mcclatchy.com/email-assets/global/video-overlay.png" width="600" alt="play button"></a>
											</td>
										</tr>
										<tr>
											<td align="center" valign="top" width="100%">

												<!-- STORY PACKAGE // -->
												<table border="0" cellpadding="0" cellspacing="0" width="100%">
													<tr>
														<td align="center" valign-"top" width="100%" class="card bg-white">

															<table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
																<tr>
																	<td align="left" valign="top" width="100%" class="pb16">
																		<!-- kicker -->
																		<a href="#" target="_blank" class="kicker">Kicker</a>
																	</td>
																</tr>
																<tr>
																	<td align="left" valign="top" width="100%" class="pb16">
																		<!-- headline -->
																		<a href="#" target="_blank" class="story-headline link-plain">Story headline goes here story headline goes here story headline goes here</a>
																	</td>
																</tr>
																<tr>
																	<td align="left" valign="top" width="100%" class="p">
																		<!-- summary -->
																		Summary text goes here. Summary text goes here. Summary text goes here. Summary text goes here. Summary text goes here.
																	</td>
																</tr>
															</table>

														</td>
													</tr>
												</table>
												<!-- // STORY PACKAGE -->

											</td>
										</tr>
									</table>
									<!-- // STORY CARD -->

								</td>
							</tr>
							<tr>
								<td align="center" valign="top" width="100%" class="ps24 pb24">

									<!-- AD 1 TOP // -->
									<table border="0" cellpadding="0" cellspacing="0" role="presentation" class="live-intent-table">
										<tr>
											<td align="center" valign="top" class="ad-label">
												<!-- ad label -->
												Advertisement
											</td>
										</tr>
										<tr>
											<td align="center" valign="top">
												<!-- ad art -->
												<a href="#" target="_blank" rel="nofollow" _label="digestPos1Top"><img src="http://li.<%= recipient.siteName %>.com/imp?s=<%= recipient.AdContent.digest_Pos1Top %>&li=<%= message.delivery.newsletterCodename %>&e=<%= recipient.email %>&p=<%= message.delivery.id %>" class="ad-img" width="552" /></a>
											</td>
										</tr>
										<tr>
											<td align="center" valign="top">

												<!-- live intent and ad choices logos -->
												<table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
													<tr>
														<td align="left" valign="top">
															<a href="#" target="_blank" rel="nofollow" _label="digestPos1TopLILogo"><img src="http://li.<%= recipient.siteName %>.com/imp?s=<%= recipient.AdContent.digest_Pos1Top_LILogo %>&li=<%= message.delivery.newsletterCodename %>&e=<%= recipient.email %>&p=<%= message.delivery.id %>" class="img-inline" width="116" /></a>
														</td>
														<td align="right" valign="top">
															<a href="#" target="_blank" rel="nofollow" _label="digestPos1TopACLogo"><img src="http://li.<%= recipient.siteName %>.com/imp?s=<%= recipient.AdContent.digest_Pos1Top_ACLogo %>&li=<%= message.delivery.newsletterCodename %>&e=<%= recipient.email %>&p=<%= message.delivery.id %>" class="img-inline" width="19" /></a>
														</td>
													</tr>
												</table>

											</td>
										</tr>
									</table>
									<!-- // AD 1 TOP -->

								</td>
							</tr>
							<tr>
								<td align="center" valign="top" width="100%" class="pb24">

									<!-- APP CTA // -->
									<table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
										<tr>
											<td align="center" valign="top" width="100%" class="card bg-blue">

												<table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
													<tr>
														<td align="center" valign="top" width="100%" class="h2 white pb16">
															Get the news wherever you go
														</td>
													</tr>
													<tr>
														<td align="center" valign="top" width="100%" class="small white pb24">
															Stay informed with local news from <%= recipient.siteBrand.lowerThePropertyName %> on our mobile app.
														</td>
													</tr>
													<tr>
														<td align="center" valign="top" width="100%" class="pb24">
															<img src="https://media.mcclatchy.com/email-assets/global/operation-content/gifs/readlocal-news-white.gif" alt="#readlocal" width="168">
														</td>
													</tr>
													<tr>
														<td align="center" valign="top" width="100%">

															<!-- APP BADGES // -->
															<table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%">
																<tr>
																	<td align="right" valign="top" class="col-fixed first">
																		<a href="https://<%= recipient.siteBrand.iosApp %>" target="_blank"><img src="https://media.mcclatchy.com/email-assets/global/app-store-badge.png" width="120" alt="Download on the App Store" class="img-inline" /></a>
																	</td>
																	<td align="left" valign="top" class="col-fixed last">
																		<a href="https://<%= recipient.siteBrand.googlePlayApp %>" target="_blank"><img src="https://media.mcclatchy.com/email-assets/global/google-play-badge.png" width="134" alt="Get it on Google Play" class="img-inline" /></a>
																	</td>
																</tr>
															</table>
															<!-- // APP BADGES -->

														</td>
													</tr>
												</table>

											</td>
										</tr>
									</table>
									<!-- // APP CTA -->

								</td>
							</tr>
							<tr>
								<td align="center" valign="top" width="100%" class="pb24">

									<!-- LIST CARD // -->
									<table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
										<tr>
											<td align="center" valign="top" width="100%" class="bg-white pb16">

												<!-- LABEL // -->
												<table border="0" cellpadding="0" cellspacing="0" role="presentation">
													<tr>
														<td align="center" valign="top" class="list-label">
															Label
														</td>
													</tr>
												</table>
												<!-- // LABEL -->

											</td>
										</tr>
										<tr>
											<td align="center" valign="top" width="100%" class="bg-white ps24">

												<!-- HEADLINES // -->
												<table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
													<tr>
														<td align="left" valign="top" width="100%" class="list-headline pb24">
															<a href="#" target="_blank" class="link-plain">First list headline goes here first list headline goes here first list headline goes here</a>
														</td>
													</tr>
													<tr>
														<td align="left" valign="top" width="100%" class="list-headline pb24">
															<a href="#" target="_blank" class="link-plain">Second list headline goes here second list headline goes here second list headline goes here</a>
														</td>
													</tr>
													<tr>
														<td align="left" valign="top" width="100%" class="list-headline pb24">
															<a href="#" target="_blank" class="link-plain">Third list headline goes here third list headline goes here third list headline goes here</a>
														</td>
													</tr>
												</table>
												<!-- // HEADLINES -->

											</td>
										</tr>
									</table>
									<!-- // LIST CARD -->

								</td>
							</tr>
							<tr>
								<td align="center" valign="top" width="100%">

									<!-- AD RTB // -->
									<table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%" class="live-intent-table">
										<tr>
											<td>
												<img src="http://li.<%= recipient.siteName %>.com/imp?s=<%= recipient.AdContent.digest_rtb1 %>&sz=2x1&li=<%= message.delivery.newsletterCodename %>&e=<%= recipient.email %>&p=<%= message.delivery.id %>" width="2" />
											</td>
											<td>
												<img src="http://li.<%= recipient.siteName %>.com/imp?s=<%= recipient.AdContent.digest_rtb2 %>&sz=2x1&li=<%= message.delivery.newsletterCodename %>&e=<%= recipient.email %>&p=<%= message.delivery.id %>" width="2" />
											</td>
											<td>
												<img src="http://li.<%= recipient.siteName %>.com/imp?s=<%= recipient.AdContent.digest_rtb3 %>&sz=2x1&li=<%= message.delivery.newsletterCodename %>&e=<%= recipient.email %>&p=<%= message.delivery.id %>" width="2" />
											</td>
											<td>
												<img src="http://li.<%= recipient.siteName %>.com/imp?s=<%= recipient.AdContent.digest_rtb4 %>&sz=2x1&li=<%= message.delivery.newsletterCodename %>&e=<%= recipient.email %>&p=<%= message.delivery.id %>" width="2" />
											</td>
											<td>
												<img src="http://li.<%= recipient.siteName %>.com/imp?s=<%= recipient.AdContent.digest_rtb5 %>&sz=2x1&li=<%= message.delivery.newsletterCodename %>&e=<%= recipient.email %>&p=<%= message.delivery.id %>" width="2" />
											</td>
											<td>
												<img src="http://li.<%= recipient.siteName %>.com/imp?s=<%= recipient.AdContent.digest_rtb6 %>&sz=2x1&li=<%= message.delivery.newsletterCodename %>&e=<%= recipient.email %>&p=<%= message.delivery.id %>" width="2" />
											</td>
											<td>
												<img src="http://li.<%= recipient.siteName %>.com/imp?s=<%= recipient.AdContent.digest_rtb7 %>&sz=2x1&li=<%= message.delivery.newsletterCodename %>&e=<%= recipient.email %>&p=<%= message.delivery.id %>" width="2" />
											</td>
											<td>
												<img src="http://li.<%= recipient.siteName %>.com/imp?s=<%= recipient.AdContent.digest_rtb8 %>&sz=2x1&li=<%= message.delivery.newsletterCodename %>&e=<%= recipient.email %>&p=<%= message.delivery.id %>" width="2" />
											</td>
											<td>
												<img src="http://li.<%= recipient.siteName %>.com/imp?s=<%= recipient.AdContent.digest_rtb9 %>&sz=2x1&li=<%= message.delivery.newsletterCodename %>&e=<%= recipient.email %>&p=<%= message.delivery.id %>" width="2" />
											</td>
											<td>
												<img src="http://li.<%= recipient.siteName %>.com/imp?s=<%= recipient.AdContent.digest_rtb10 %>&sz=2x1&li=<%= message.delivery.newsletterCodename %>&e=<%= recipient.email %>&p=<%= message.delivery.id %>" width="2" />
											</td>
											<td>
												<img src="http://li.<%= recipient.siteName %>.com/imp?s=<%= recipient.AdContent.digest_rtb11 %>&sz=2x1&li=<%= message.delivery.newsletterCodename %>&e=<%= recipient.email %>&p=<%= message.delivery.id %>" width="2" />
											</td>
											<td>
												<img src="http://li.<%= recipient.siteName %>.com/imp?s=<%= recipient.AdContent.digest_rtb12 %>&sz=2x1&li=<%= message.delivery.newsletterCodename %>&e=<%= recipient.email %>&p=<%= message.delivery.id %>" width="2" />
											</td>
											<td>
												<img src="http://li.<%= recipient.siteName %>.com/imp?s=<%= recipient.AdContent.digest_rtb13 %>&sz=2x1&li=<%= message.delivery.newsletterCodename %>&e=<%= recipient.email %>&p=<%= message.delivery.id %>" width="2" />
											</td>
											<td>
												<img src="http://li.<%= recipient.siteName %>.com/imp?s=<%= recipient.AdContent.digest_rtb14 %>&sz=2x1&li=<%= message.delivery.newsletterCodename %>&e=<%= recipient.email %>&p=<%= message.delivery.id %>" width="2" />
											</td>
											<td>
												<img src="http://li.<%= recipient.siteName %>.com/imp?s=<%= recipient.AdContent.digest_rtb15 %>&sz=2x1&li=<%= message.delivery.newsletterCodename %>&e=<%= recipient.email %>&p=<%= message.delivery.id %>" width="2" />
											</td>
											<td>
												<img src="http://li.<%= recipient.siteName %>.com/imp?s=<%= recipient.AdContent.digest_rtb16 %>&sz=2x1&li=<%= message.delivery.newsletterCodename %>&e=<%= recipient.email %>&p=<%= message.delivery.id %>" width="2" />
											</td>
											<td>
												<img src="http://li.<%= recipient.siteName %>.com/imp?s=<%= recipient.AdContent.digest_rtb17 %>&sz=2x1&li=<%= message.delivery.newsletterCodename %>&e=<%= recipient.email %>&p=<%= message.delivery.id %>" width="2" />
											</td>
											<td>
												<img src="http://li.<%= recipient.siteName %>.com/imp?s=<%= recipient.AdContent.digest_rtb18 %>&sz=2x1&li=<%= message.delivery.newsletterCodename %>&e=<%= recipient.email %>&p=<%= message.delivery.id %>" width="2" />
											</td>
											<td>
												<img src="http://li.<%= recipient.siteName %>.com/imp?s=<%= recipient.AdContent.digest_rtb19 %>&sz=2x1&li=<%= message.delivery.newsletterCodename %>&e=<%= recipient.email %>&p=<%= message.delivery.id %>" width="2" />
											</td>
											<td>
												<img src="http://li.<%= recipient.siteName %>.com/imp?s=<%= recipient.AdContent.digest_rtb20 %>&sz=2x1&li=<%= message.delivery.newsletterCodename %>&e=<%= recipient.email %>&p=<%= message.delivery.id %>" width="2" />
											</td>
										</tr>
									</table>
									<!-- // AD RTB -->

								</td>
							</tr>
							<!-- FOOTER BLOCK // -->
							<tr>
								<td align="center" valign="top" width="100%" id="footer">
									<%@ include view='mccDynamicFooterLeftAligned' %>
								</td>
							</tr>
							<!-- // FOOTER BLOCK -->
						</table>
						<!-- // MAIN TABLE -->
					</td>
				</tr>
			</table>
			<!-- // BODY TABLE -->
			<!-- Font Awesome Free by @fontawesome - https://fontawesome.com -->
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
customElements.define("eds-newsletter", EdsNewsletter);
