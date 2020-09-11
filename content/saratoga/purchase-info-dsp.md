---
title: "purchase info (DSP)"
description: "A collapsible information box with a caret."
menu: "molecule"
---

The expander is a simple molecule to toggle the visibility of it's siblings. The element itself acts as the toggle by swapping the open class. This can be done a number of ways, but to keep things simple for the demo we used the `onclick` attribute directly.

The generic rules make for a very flexible setup, where we can force each child to display in all cases inline or with additional CSS in the future.

This is a version of the expander used on the front-end of our sites, but specific for the purchase flow.

##### Desktop Example

<section class="dsp" style="padding-left:0;padding-bottom: 20px;">
        <div class="card horizontal package small" style="max-width: 400px;">
                <div>
                    <span class="summary bold">Unlimited Digital Access</span>
                    <small>$10.99 for 1 month, $15.99/month after.</small>
                </div>
                <small class="expander" onclick="this.classList.toggle('open')">Show details</small>
                <small class="stretch">Get access to everything on Miamiherald.com, our apps, the eEdition, and our stories platforms like Facebook Instant Articles and Google News.</small>
        </div>
</section>

##### Mobile Example

<div class="dsp" style="padding-bottom: 20px">
        <div class="card horizontal package small" style="grid-gap:0;align-self: flex-start;
    grid-template-columns: 1fr 95px;max-width: 400px;">
                <div>
                    <span class="summary bold">Unlimited Digital Access</span>
                    <small>$10.99 for 1 month, $15.99/month after.</small>
                </div>
                <small class="expander" onclick="this.classList.toggle('open')" style="display: flex;">Show details</small>
                <small style="padding-top:15px;grid-column: span 2;">Get access to everything on Miamiherald.com, our apps, the eEdition, and our stories platforms like Facebook Instant Articles and Google News.</small>
        </div>
</div>

#### HTML
{{< highlight html >}}
<div class="card horizontal package small">
    <div>
        <span class="summary bold">Unlimited Digital Access</span>
        <small>$10.99 for 1 month, $15.99/month after.</small>
    </div>
    <small class="expander" onclick="this.classList.toggle('open')">Show details</small>
    <small class="stretch">Get access to everything on Miamiherald.com, our apps, the eEdition, and our stories platforms like Facebook Instant Articles and Google News.</small>
</div>
{{< /highlight >}}