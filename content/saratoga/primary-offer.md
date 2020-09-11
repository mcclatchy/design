---
title: "primary offer (DSP)"
description: "A variation of this molecule is used on the paywall and subscription offers page"
menu: "molecule"
---

The primary offer molecule is used with variation in the <a href="/saratoga/paywall/">paywall</a> and <a href="/saratoga/decks/subscription-offers">subscription offers page.</a> Placing it into a subscription offers page using a `.subscription-offers` wrapper will put larger padding.

##### Example

<div class="example">
   <div class="dsp">
    <div class="primary-offer card" style="max-width: 900px;margin: 0 auto;">
       <div>
            <h2 class="h1">Unlimited Digital Access</h2>
            <p class="h4">$1.99 for one month</p>
            <p class="summary caps">$10.99/month after. Cancel anytime.</p>
            <a class="button white">start today</a>
        </div>
    </div><br>
    <div class="primary-offer card" style="background: linear-gradient(90deg, rgba(55,55,55,.7), rgba(55,55,55,.99) 50%,rgba(55,55,55,.7) 100%), url(https://media.mcclatchy.com/creatives/subscription-offer-page-images/markets/Miami/1.jpg);background-size: cover;background-position: center;max-width: 900px;margin: 0 auto;padding: 80px 0;">
       <div>
            <h2 class="h1">Unlimited Digital Access</h2>
            <p class="h4">$1.99 for one month</p>
            <p class="summary caps">$10.99/month after. Cancel anytime.</p>
            <a class="button promo-light">start today</a>
        </div>
    </div>
  </div>
</div>

#### HTML
{{< highlight html >}}
<div class="primary-offer card">
   <div>
        <h2 class="h1">Unlimited Digital Access</h2>
        <p class="h4">$1.99 for one month</p>
        <p class="summary caps">$10.99/month after. Cancel anytime.</p>
        <a class="button white">start today</a>
    </div>
</div>
{{< /highlight >}}

