---
title: "page title (DSP)"
description: "The title molecule that displays on paywalls, purchase flows, confirmation pages, etc."
menu: "molecule"
build: dsp
---

The title displays center aligned on all breakpoints and pages, with the exception of the purchase flow, where it is only displayed over the left half of the grid on larger breakpoints. For the purchase flow, make sure add the class of `purchase-flow` to the `title` section, and remove the classes `package small` from the interior div. For the Review Order page, you don't need to use anything for the title but a section with `<h1 class='sans bold h3'>` in it.

#### Example
<div class="example grid" style="--columns: 400px;">
  {{< dsp/page-title >}}
</div>

#### HTML
{{< highlight html >}}
  {{< dsp/page-title >}}
{{< /highlight >}}

#### Purchase flow example
<div class="example grid" style="--columns: 400px;">
  {{< dsp/page-title type="sign-up" >}}
</div>

#### Purchase Flow HTML
{{< highlight html >}}
  {{< dsp/page-title type="sign-up" >}}
{{< /highlight >}}
