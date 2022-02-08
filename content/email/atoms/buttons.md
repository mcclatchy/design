---
title: "buttons"
description: "EDS buttons"
menu: "atoms"

---

All CSS for buttons is found in the framework. Buttons are made entirely of HTML and CSS and should never be images. The default button is dark gray with white text and a dark gray border.

<div class="note">
Note: Our buttons are coded so that the entire area of the button is clickable and not just the text. To make this method work in Outlook Desktop on Windows, we included a border on the anchor tag. This forces Outlook to render the top and bottom padding and the border radius on the button. Otherwise none of the padding would render and it would lose the appearance of a button.
</div>

### Examples
<div class="example">
  <eds-buttons></eds-buttons>
</div>

### HTML
```html
<table border="0" cellpadding="0" cellspacing="0" role="presentation">
  <tr>
    <td align="center" valign="top" class="button button-default">
      <a href="#" target="_blank" class="button-a button-default-a">Button</a>
    </td>
  </tr>
</table>
```

### Rules
Be sure to include the `.button` and `.button-a` classes as shown above.

To change the button color, change the `.button-default` class to either `.button-accent` for blue or `.button-reverse` for white, then change `.button-default-a` to `.button-accent-a` (white text on blue button), `.button-reverse-a-default` (dark gray text on white button) or `.button-reverse-a-accent` (blue text on white button).

The text color should match the background color of the card, with the exception of a light gray card, where the button text is white. Please note, the CSS for the button hover effect is in a separate style tag in the framework file with the `data-embed` attribute added to the style. This prevents the CSS inliner tool from removing this CSS.

<div class="note">
In the rare circumstance where a button may need to be a color other than one of the included options, use the HTML and CSS included in the framework file as a guide to create it.
</div>
