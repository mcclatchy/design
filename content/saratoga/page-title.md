---
title: "page title (DSP)"
description: "The title molecule that displays on paywalls, purchase flows, confirmation pages, etc."
menu: "molecule"
---

The title displays center aligned on all breakpoints and pages, with the exception of the purchase flow, where it is only displayed over the left half of the grid on larger breakpoints. For the purchase flow, make sure add the class of `purchase-flow` to the `title` section, and remove the classes `package small` from the interior div. For the Review Order page, you don't need to use anything for the title but a section with `<h1 class='sans bold h3'>` in it.

#### Example
<div class="dsp example">
    <section class="title">
            <h1 class="sans bold h3">Local news wherever you go</h1>
            <p class="sans">Thanks for reading! You’ve read all your free articles this month. You must have an account to continue.<br>Subscribe or <a href="/saratoga/decks/purchase-flow/sign-up" class="more-link inline primary no-caps">Sign up</a></p>
    </section> 
</div>

#### Purchase flow example
<div class="dsp example">
    <section class="title purchase-flow">
      <div>
          <h1 class="sans bold h3">Sign up</h1>
          <p class="summary">Use your email address or a social account. 
    Already have an account? <a href="/saratoga/decks/purchase-flow/sign-in/" class="more-link inline primary no-caps">Sign in</a></p>
      </div>
    </section>
</div>


#### HTML
{{< highlight html >}}
<section class="title">
     <div class="package small">
      <h2 class="sans bold">Sign up</h2>
      <p class="summary">Use your email address or a social account.<br>
Already have an account? <a href="#" class="more-link inline primary no-caps">Sign in</a></p>
     </div>
</section>
{{< /highlight >}}

#### Purchase Flow HTML
{{< highlight html >}}
<section class="title purchase-flow">
<div>
  <h1 class="sans bold h3">Sign up</h1>
  <p class="summary">Use your email address or a social account. 
Already have an account? <a href="/saratoga/decks/purchase-flow/sign-in/" class="more-link inline primary no-caps">Sign in</a></p>
</div>
</section>
{{< /highlight >}}
