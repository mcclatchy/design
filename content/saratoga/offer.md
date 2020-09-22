---
title: "offer (DSP)"
description: "A variation of this molecule is used on the paywall and subscription offers page"
menu: "molecule"
build: dsp
---

The primary offer molecule is used with variation in the <a href="/saratoga/paywall/">paywall</a> and <a href="/saratoga/decks/subscription-offers">subscription offers</a> pages. The molecule is a combo of a custom CSS grid and an altered [package](../package/) to allow for equal spacing of groups.

The primary and secondary variants, used by appending either the `primary` or `secondary` class will put in larger padding and open up the option for a background image using the `--image` CSS property. All variants use utility classes directly the children to highlight the flexibility of the molecule. 

#### Paywall Example

<div class="example">{{< dsp/offer >}}</div>

#### Paywall HTML
{{< highlight html >}}
{{< dsp/offer >}}
{{< /highlight >}}

#### Primary Example

<div class="example">{{< dsp/offer type="primary" >}}</div>

#### Primary HTML

{{< highlight html >}}
{{< dsp/offer type="primary" >}}
{{< /highlight >}}

#### Secondary Example

<div class="example grid" style="--columns: repeat(auto-fit, 400px);">
  {{< dsp/offer type="secondary" >}}
  {{< dsp/offer type="secondary-b" >}}
</div>

#### Secondary HTML

{{< highlight html >}}
{{< dsp/offer type="secondary" >}}
{{< /highlight >}}

#### Tertiary offers

<div class="example grid" style="grid-template-columns: repeat(auto-fit, 400px);">
  {{< dsp/offer type="tertiary-a" >}}
  {{< dsp/offer type="tertiary-b" >}}
</div>

#### Tertiary variant A

{{< highlight html >}}
{{< dsp/offer type="tertiary-a" >}}
{{< /highlight >}}

#### Tertiary variant B

{{< highlight html >}}
{{< dsp/offer type="tertiary-b" >}}
{{< /highlight >}}
