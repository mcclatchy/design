---
title: paywall (DSP)
description: DSP paywall offer card
menu: "cards"
---

The paywall uses a `.primary-offer` card, a `.grid` for the layout, and other molecules like `.expander` to hide and show content. Pair it with a `<section class='title'>` to create a <a href="/saratoga/decks/paywall">full paywall page.</a>

#### Example
<div class="example">
<div class="dsp" style="margin: 30px 0;">
  <div class="paywall">
    <section>
        <div class="primary-offer card">
           <div>
                <h2 class="h1">Unlimited Digital Access</h2>
                <p class="h4">$1.99 for one month</p>
                <p class="summary caps">$10.99/month after. Cancel anytime.</p>
                <a class="button white">start today</a>
            </div>
        </div>
    </section>
    <section>
        <p class="expander caps summary bold" onclick="this.classList.toggle('open')">show details and options</p>
        <div class="grid">
        <div class="offer-details">
            <div class="card">
               <div class="package">
                    <div class="grid">
                       <div>
                            <p class="summary bold">Read, view and watch it all</p>
                            <p class="summary">Get unlimited access to all of our content and unmatched reporting on everything happening in the Miami area with our website and apps.</p>
                       </div>
                       <div>
                            <p class="summary bold">Exclusive extras</p>
                            <p class="summary">Get access to the eEdition and our stories on Facebook and Google News.</p>
                       </div>
                       <div>
                            <p class="summary bold">Subscriber only content</p>
                            <p class="summary">Get access to our subscriber-only stories and videos from the Miami Herald.</p>
                       </div>
                    </div>
                </div>
            </div>
        </div>
            <div class="card tertiary-offer">
                   <div class="package small">
                        <p class="h3 sans">Subscribe with Google</p>
                        <p class="summary">Get the same Unlimited Digital Access deal as above, but let Google manage your subscription and billing.</p>
                        <a class="button ghost">Subscribe with Google</a>
                        <small>By subscribing, you are agreeing to the Miami Herald’s Terms of Service and Privacy Policy.</small>
                   </div> 
            </div>
            <div class="card" style="align-self: flex-start;">
                   <div class="package small">
                        <p class="summary bold">Looking for more subscription options?</p>
                        <a class="more-link primary">Check out all of our offers</a>
                   </div>
            </div>
        </div>
      </section>
    <section>
       <br><br>
        <a class="more-link" href="../">No thanks, back to the homepage</a>
    </section>
  </div>
</div>
</div>

#### HTML
{{< highlight html >}}
  <div class="paywall">
    <section>
        <div class="primary-offer card">
           <div>
                <h2 class="h1">Unlimited Digital Access</h2>
                <p class="h4">$1.99 for one month</p>
                <p class="summary caps">$10.99/month after. Cancel anytime.</p>
                <a class="button white">start today</a>
            </div>
        </div>
    </section>
    <section>
        <p class="expander caps summary bold" onclick="this.classList.toggle('open')">show details and options</p>
        <div class="grid">
        <div class="offer-details">
            <div class="card">
               <div class="package">
                    <div class="grid">
                       <div>
                            <p class="summary bold">Read, view and watch it all</p>
                            <p class="summary">Get unlimited access to all of our content and unmatched reporting on everything happening in the Miami area with our website and apps.</p>
                       </div>
                       <div>
                            <p class="summary bold">Exclusive extras</p>
                            <p class="summary">Get access to the eEdition and our stories on Facebook and Google News.</p>
                       </div>
                       <div>
                            <p class="summary bold">Subscriber only content</p>
                            <p class="summary">Get access to our subscriber-only stories and videos from the Miami Herald.</p>
                       </div>
                    </div>
                </div>
            </div> 
        </div>
            <div class="card tertiary-offer">
                   <div class="package small">
                        <p class="h3 sans">Subscribe with Google</p>
                        <p class="summary">Get the same Unlimited Digital Access deal as above, but let Google manage your subscription and billing.</p>
                        <a class="button ghost">Subscribe with Google</a>
                        <small>By subscribing, you are agreeing to the Miami Herald’s Terms of Service and Privacy Policy.</small>
                   </div> 
            </div>
            <div class="card" style="align-self: flex-start;">
                   <div class="package small">
                        <p class="summary bold">Looking for more subscription options?</p>
                        <a class="more-link primary">Check out all of our offers</a>
                   </div>
            </div>
        </div>
      </section>
    <section>
       <br><br>
        <a class="more-link" href="../">No thanks, back to the homepage</a>
    </section>
  </div>
{{< /highlight >}}

