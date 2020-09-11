---
title: "buttons"
description: "EDS buttons"
menu: "atoms"

---

All CSS for buttons is found in the framework. Buttons are made entirely of HTML and CSS and should never be images. The default button is dark gray with white text and a dark gray border.

<div class="note">
Note: Our buttons are coded so that the entire area of the button is clickable and not just the text. To make this method work in Outlook Desktop on Windows, it requires a border on the anchor tag. This forces Outlook to render the top and bottom padding and the border radius on the button. Otherwise none of the padding would render and it would lose the appearance of a button.
</div>

### Examples
<div class="example">
  <eds-buttons></eds-buttons>
</div>

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
