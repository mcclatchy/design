---
title: "account header (DSP)"
description: "The username, entitlements tag, sub nav and sign out molecule at the top of my account pages"
menu: "molecule"
---

The account header molecule is used on the <a href="/saratoga/decks/my-account">my account page.</a> It is comprised of text atoms and the more-link atom and displayed in a flex-box. Pair it with the DSP Masthead to get all "my account" features, like a sign out link.

##### Example

<div class="dsp">
    <div class="account-header">
        <div class="package small">
            <small>unlimited digital access</small>
            <h1 class="serif">Hi, John Wick</h1>
        </div>
        <div class="nav">
            <a href="#" class="tab active">Profile</a>
            <a href="#" class="tab">Subscription</a>
        </div>
    </div>
</div>

#### HTML
{{< highlight html >}}
<div class="account-header">
    <div class="package small">
        <small>unlimited digital access</small>
        <h1 class="serif">Hi, John Wick</h1>
    </div>
    <div class="nav">
        <a href="#" class="tab active">Profile</a>
        <a href="#" class="tab">Subscription</a>
    </div>
</div>
{{< /highlight >}}