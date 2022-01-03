---
title: "vendor-footer"
description: A basic footer that can be used on 3rd-party sites in an iframe.
menu: cards
---

The vendor footer is an alternate version of the footer with a limited set of links and the logo for the market. In most cases, vendors load this footer using an `<iframe>` tag on their pages. Because of this the height is a static `100px` tall.

This card will never be used with the rest of the design system. In order to isolate it and decrease load time, we have created a separate build for it. The file is called `vendor-cards.css` and includes the vendor flag and vendor footer cards. It is self-contained and includes all of the styles required except fonts files. The text version uses McClatchy Sans at 600 weight, which will need to be loaded separately.

<link rel="stylesheet" href="/css/cards/vendor-cards.css">

#### Example

<div class="example">
{{< vendor-footer >}}
</div>
