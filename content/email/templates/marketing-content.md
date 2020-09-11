---
title: "Marketing | Content"
description: "email template for content marketing"
menu: "templates"

---

This email template is used for content marketing. It can be used as-is.

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
