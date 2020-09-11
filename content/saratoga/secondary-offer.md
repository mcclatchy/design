---
title: "secondary offer (DSP)"
description: "This is used on the subscription offers page"
menu: "molecule"
---

The secondary offer molecule is used on the <a href="/saratoga/decks/subscription-offers">subscription offers page.</a>

##### Example

<div class="dsp">
    <div class="secondary-offer card" style="max-width: 435px;">
       <div class="package">
            <h3 class="h2 serif">Sports Pass™<h3>
            <p class="summary caps bold">$1.99 for one month</p>
            <p class="summary caps">$10.99/month after. Cancel anytime.</p>
            <a class="button impact">start today</a>
        </div>
    </div>
</div>

#### HTML
{{< highlight html >}}
<div class="secondary-offer card">
   <div class="package">
        <h3 class="h2 serif">Unlimited Digital Access</h3>
        <p class="summary caps bold">$1.99 for one month</p>
        <p class="summary caps">$10.99/month after. Cancel anytime.</p>
        <a class="button impact">start today</a>
    </div>
</div>
{{< /highlight >}}