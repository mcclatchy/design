---
title: "buttons"
description: "EDS buttons`"
menu: "atoms"

---

All CSS for buttons is found in the framework. Buttons are made entirely of HTML and CSS and should never be images. The default button is dark gray with white text and a dark gray border.

<div class="note">
Note: Our buttons are coded so that the entire area of the button is clickable and not just the text. To make this method work in Outlook Desktop on Windows, it requires a border on the anchor tag. This forces Outlook to render the top and bottom padding and the border radius on the button. Otherwise none of the padding would render and it would lose the appearance of a button.
</div>

### Examples
<eds-button></eds-button>

### HTML
```html
<table border="0" cellpadding="0" cellspacing="0" role="presentation">
	<tr>
		<td align="center" valign="top" class="button">
			<a href="#" target="_blank" class="button-link">Button Text</a>
		</td>
	</tr>
</table>
```

### Rules
Be sure to include the `.button` and `.button-link` classes as shown above.

To change the background color, there are helper classes to add after the default `.button` class: `.bg-white` and `.bg-blue`. You must also add in a border class to match the background color that goes in *after* the `.button-link` class. The border classes are `.border-white` and `.border-blue` (`.button-link` already has the dark gray border for the default button).

To change the link color, the helper classes are: `.gray` and `.blue`. The link color should match the background color of the card, with the exception of a light gray card, where the button text is white.

<script>
class EdsButton extends HTMLElement {
	get template() {
		let t = document.createElement("template");
		t.innerHTML = `
		<head>
			<style>
				@import url( '/css/email/eds.css' )
			</style>
		</head>
		<body>
		<div style="padding: 12px;background-color: #f4f4f4;">
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
			</div>
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
customElements.define("eds-button", EdsButton);
</script>
