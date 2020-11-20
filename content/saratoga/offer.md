---
title: "offer (DSP)"
description: "A variation of this molecule is used on the paywall and subscription offers page"
menu: "molecule"
build: dsp
---

The DSP offer card provides double padding around the edges, has a customizable grid layout for adjusting spacing as necessary, and tweaks child package molecules just a tad. The tweaks allow for controlling the spacing inside of grouped content, such as offers and terms. 

*Note: These cards represent some of our most fluid to date, and variations in the system occur at the deck level. Check the `decks/dsp.css` file for these adjustments.*

#### Standard version

This version can be placed on it's own like the [paywall deck](../decks/paywall), or in a grid like the [subscription offer deck](../decks/subscription-offers/). The same version, with slight adjustments is also the base element for the SWG offer and the all-offer cards on the paywall deck.

<div class="example">
  <div class="card paywall-offer">{{< dsp/offer color="promo" label="MONTHLY" button="START TODAY" />}}</div>
</div>

#### Horizontal version

The horizontal version is used as alternative offers on the subscription offer deck. This version uses media breakpoints, and therefore should not be placed in a grid that has more than one column spanning the entire width of the page.

<div class="example">
  {{< dsp/offer type="horizontal" label="YEARLY" button="START TODAY" />}}
</div>
