---
title: "vendor flag"
description: A basic flag that can be used on 3rd-party sites as an iframe.
menu: cards
---

The vendor flag is a basic version of the flag with the ability to add a custom title or logo for that vendor. In most cases, the vendor loads these elements in using a `<iframe>` tag on their pages. Because of this, only minimal functionality is possible and the height must be static. Iframe heights should be set to `55px` to fully-render the element.

This card will never be used with the rest of the design system. In order to isolate it and decrease load time, we have created a separate build for it. The file is called `vendor-flag.css`. It is self-contained and includes all of the styles required **except fonts files**. The text version uses McClatchy Sans at 600 weight, which will need to be loaded separately.

<link rel="stylesheet" href="/css/decks/vendor-flag.css">

#### Market logo only example
<div class="example">
{{< vendor-flag >}}
</div>

{{< highlight html >}}
{{< vendor-flag >}}
{{< /highlight >}}

#### Text example
<div class="example">
{{< vendor-flag type="name" >}}
</div>

{{< highlight html >}}
{{< vendor-flag type="name" >}}
{{< /highlight >}}

#### Logo example
<div class="example">
{{< vendor-flag type="logo" >}}
</div>

{{< highlight html >}}
{{< vendor-flag type="logo" >}}
{{< /highlight >}}
