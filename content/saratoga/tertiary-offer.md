---
title: "tertiary offer (DSP)"
description: "This is used on the paywall and subscription offers page"
menu: "molecule"
---

The tertiary offer molecule is used within a grid in the <a href="/saratoga/paywall/">paywall</a> and <a href="/saratoga/decks/subscription-offers">subscription offers page.</a> It can be things like a SwG card, or a print offer card, etc.

##### Example
<div class="example">
<div class="dsp">
   <div class="grid">
        <div class="card tertiary-offer">
               <div class="package small">
                    <p class="h3 sans">Subscribe with Google</p>
                    <p class="summary">Get the same Unlimited Digital Access deal as above, but let Google manage your subscription and billing.</p>
                    <a class="button ghost">Subscribe with Google</a>
                    <small>By subscribing, you are agreeing to the Miami Herald’s Terms of Service and Privacy Policy.</small>
               </div> 
        </div>
        <div class="card tertiary-offer">
               <div class="package">
                    <p class="h3 serif">Home Delivery + Digital Access</p>
                    <p class="summary">Get the paper delivered to your door, plus Unlimited Digital Access.</p>
                    <a class="button impact">View Offers</a>
                    <p class="h4">Already a print subscriber?</p>
                    <a class="more-link">Activate digital access</a>
               </div> 
        </div>
    </div>
</div>
</div>

#### HTML
{{< highlight html >}}
<div class="card tertiary-offer">
       <div class="package">
            <p class="h3 serif">Subscribe with Google</p>
            <p class="summary">Get the same Unlimited Digital Access deal as above, but let Google manage your subscription and billing.</p>
            <a class="button ghost">Subscribe with Google</a>
            <small>By subscribing, you are agreeing to the Miami Herald’s Terms of Service and Privacy Policy.</small>
       </div> 
</div>
<div class="card tertiary-offer">
       <div class="package">
            <p class="h3 serif">Home Delivery + Digital Access</p>
            <p class="summary">Get the paper delivered to your door, plus Unlimited Digital Access.</p>
            <a class="button impact">View Offers</a>
            <p class="h4">Already a print subscriber?</p>
            <a class="more-link">Activate digital access</a>
       </div> 
</div>
{{< /highlight >}}