---
title: "Newsletter | Long-Form"
description: "email template for long-form newsletters"
menu: "templates"

---

This newsletter template can be seen in the "From the Newsroom" newsletter.

<div class="note">The HTML for this template can be used as-is if needed, but if an update needs to be made to the live long-form newsletter template, the AM team will need to be involved.</div>

<a class="button big promo" style="margin-bottom:24px;" href="#">Get HTML</a>

### example
<div class="example">
coming soon
		<newsletter-digest></newsletter-digest>
</div>

<script type="text/javascript">
class NewsletterDigest extends HTMLElement {
	get template() {
		let t = document.createElement("template");
		t.innerHTML = `
		<head>
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
		<link href="https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,400;0,700;1,400&family=Noto+Serif:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet">
			<style>
				@import url( '/css/email/eds.css' )
			</style>
		</head>
		<body>

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
customElements.define("newsletter-digest", NewsletterDigest);
</script>
