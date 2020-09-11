---
title: "progress bar (DSP)"
description: "A progress bar for the purchase flow"
menu: "molecule"
---

The progress bar displays the steps needed to complete the purchase flow/checkout. This should be placed inside a DSP `.package` to give it the proper padding, and then center-aligned on the page.

##### Example

<div class="dsp">
        <div class="package small">
           <div class="progress">
            <span class="active">1. Account</span>
            <span>2. Payment</span>
            <span>3. Review</span>
           </div>
        </div>
</div>

#### HTML
{{< highlight html >}}
<div class="package small">
   <div class="progress">
    <h5 class="active">1. Account</h5>
    <h5>2. Payment</h5>
    <h5>3. Review</h5>
   </div>
</div>
{{< /highlight >}}