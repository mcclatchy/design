---
title: "Instructions"
description: "how to use the EDS"
menu: "overview"

---

This guide has frameworks files, descriptions and code snippets of common atoms and other molecules used in the system, as well as some ready-to-use templates that only need content added to be used. All the CSS is in a `style` tag in the `head` and must be inlined before use.

The EDS is not limited to the default CSS included in the framework; it is meant to be used as a starting point. If an element is needed that does not already exist, it can be added as long as it follows the style guide structure and rules.

### Basic Guide
<ol>
<li>Design your email using the <a href="https://www.sketch.com/s/c087e533-60f4-428c-9880-02d982ec41bb" target="_blank">Email Design System Sketch library</a>.</li>
<li>Divide your design into sections (these will be called molecules or organisms, depending on the complexity). Usually this can be determined by a change in background color or a new subheading. Each of these molecules or organisms will be coded as a separate `table` that is inserted into a new row and cell in the `#email-table`.</li>

#### Example
The green outlines represent the different molecules and organisms that will become `tables`.<br><br>
<img src="/img/email/email-sections.png" width="250"><br>
<li>Choose the framework file that suits your design.</li>
<li>Further divide each section into rows and columns if needed.</li>

#### Example
The magenta outlines represent rows in each `table`. The cyan outlines are columns within those rows. Some of these columns will end up with nested `tables` of their own because they have more than one type of content.<br><br>
<img src="/img/email/email-subsections.png" width="250"><br>
<li>Code each molecule and organism for your email, using email best practices and the EDS structure. (The header and footer are personalization blocks in Adobe Campaign and the shortcodes for those are already in the framework files.) Copy and paste any needed layouts, molecules or atoms from this site.</li>
<li>When your HTML file is ready and approved, use an <a href="http://templates.mailchimp.com/resources/inline-css/" target="_blank">inliner tool</a> to inline the CSS. Be sure to save the inlined version as a separate file. It's much easier to make design edits to a non-inlined file and re-inline it than to edit one that is already inlined.</li>
<div class="note">
The Mailchimp inliner does convert some of the Adobe Campaign <code><</code> <code>></code> symbols (depending on where they are in the email) into their corresponding HTML entities, which doesn't break anything, but can look messy. It can easily be switched back with find-and-replace after inlining to keep things neat. Other inliner tools tend to do stranger things than this one, so it really is the best option.
</div>
<li>Put the completed template into Adobe Campaign and proof it. As long as it renders correctly, then it's ready to go.</li>
