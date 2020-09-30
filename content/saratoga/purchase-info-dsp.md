---
title: "purchase info (DSP)"
description: "A collapsible information box with a caret."
menu: "molecule"
build: dsp
---

The expander is a simple molecule to toggle the visibility of it's siblings. The element itself acts as the toggle by swapping the open class. This can be done a number of ways, but to keep things simple for the demo we used the `onclick` attribute directly.

The generic rules make for a very flexible setup, where we can force each child to display in all cases inline or with additional CSS in the future.

This is a version of the expander used on the front-end of our sites, but specific for the purchase flow.

#### Example

<div class="example grid" style="--columns: 400px;">
  {{< dsp/purchase-info >}}
</div>

#### HTML
{{< highlight html >}}
{{< dsp/purchase-info >}}
{{< /highlight >}}
