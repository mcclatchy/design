---
title: "Full-Width Email Framework"
description: "used for full-width backgrounds"
menu: "frameworks"

---

This framework is not used as frequently as the standard one, but is particularly useful when a design calls for a large hero image in the background. The maximum base table width is 100%, which means background images and background colors extend the full width of the viewport.

The email containers on every row are still set for a maximum width of 600px with 24px of padding on the sides, which again leaves a 552px-wide area for content. On screens with a width of 480px and smaller that support media queries, the email container will scale to a width of 100%, with a maximum width of 480px. All of the base design system CSS is included in this framework in addition to the HTML structure.

This framework can also be modified if for any reason gutters are needed in the design. For example, the `#email-table` width can be changed to 600px and the tables on every row to 552px, which means there will always be 24px gutters, even on mobile screens (which is where this setup typically makes a difference). The header will need to be moved outside of the `#email-table` like it is in the standard email framework.

<div class="note">
	The <code>.collapse</code> class is required on every <code>table</code> with a fixed width, which occurs on every row in the base full-width framework. Any item that does not have a percentage-based width <em>and</em> is not referenced in the media queries will keep the email from scaling properly for mobile.
</div>

<a class="button big promo" style="margin-bottom:32px;" target="_blank" href="https://drive.google.com/file/d/1FEkMKAnZzl_nlLGB-iEt1TuWAdpeH96p/view?usp=sharing">Get HTML</a>


### Sample email using full-width framework
<div class="example" style="padding: 0">
  <eds-full-width-framework></eds-full-width-framework>
</div>
