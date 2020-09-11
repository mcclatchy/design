---
title: review-order (DSP)
description: DSP review-order card
menu: "cards"
---

The review-order card uses the `paper` molecule to create lift, the `flex-columns` card to vertically space each item inside the paper, and the `package` molecule.

#### Example
<div class="dsp" style="margin-bottom: 30px;">
    <section>
           <div class="review-order">
                <div class="paper">
                   <div class="flex-columns">
                        <small class="secure">secure transaction <i class="fas fa-lock"></i></small>
                        <div class="package small">
                          <button id="button" type="submit" class="button promo">Place order</button>                    
                        </div>
                    <div>
                        <div class="flex">
                            <span class="summary bold">Your Order</span>
                            <span class="summary bold">Due Today: $10.99</span>
                        </div>
                        <div class="package small">
                            <div>
                                <span class="summary">Unlimited Digital Access</span>
                                <small>$10.99 for 1 month, $15.99/month after.</small>
                            </div>
                            <small class="stretch">Get access to everything on Miamiherald.com, our apps, the eEdition, and our stories platforms like Facebook Instant Articles and Google News.</small>
                        </div>
                    </div>
                    <div>
                        <div class="flex">
                            <span class="summary bold">Account Info</span>
                        </div>
                        <div class="package small">
                            <div>
                                <span class="summary">John Wick</span><br>
                                <span class="summary">j.wick@email.com</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="flex">
                            <span class="summary bold">Payment Method</span>
                        </div>
                        <div class="package small">
                            <div>
                                <span class="summary">John Wick</span><br>
                                <span class="summary">****0000 | Exp. 12/23 <i class="fab fa-cc-visa" style="color: #1A1F71;"></i></span>
                                <a href="#" class="more-link primary">Edit Payment Method</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</div>

#### HTML
{{< highlight html >}}
<div class="review-order">
    <div class="paper">
       <div class="flex-columns">
            <small class="secure">secure transaction <i class="fas fa-lock"></i></small>
            <div class="package small">
              <button id="button" type="submit" class="button promo">Place order</button>                    
            </div>
        <div>
            <div class="flex">
                <span class="summary bold">Your Order</span>
                <span class="summary bold">Due Today: $10.99</span>
            </div>
            <div class="package small">
                <div>
                    <span class="summary">Unlimited Digital Access</span>
                    <small>$10.99 for 1 month, $15.99/month after.</small>
                </div>
                <small class="stretch">Get access to everything on Miamiherald.com, our apps, the eEdition, and our stories platforms like Facebook Instant Articles and Google News.</small>
            </div>
        </div>
        <div>
            <div class="flex">
                <span class="summary bold">Account Info</span>
            </div>
            <div class="package small">
                <div>
                    <span class="summary">John Wick</span><br>
                    <span class="summary">j.wick@email.com</span>
                </div>
            </div>
        </div>
        <div>
            <div class="flex">
                <span class="summary bold">Payment Method</span>
            </div>
            <div class="package small">
                <div>
                    <span class="summary">John Wick</span><br>
                    <span class="summary">****0000 | Exp. 12/23 <i class="fab fa-cc-visa" style="color: #1A1F71;"></i></span>
                    <a href="#" class="more-link primary">Edit Payment Method</a>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
{{< /highlight >}}

