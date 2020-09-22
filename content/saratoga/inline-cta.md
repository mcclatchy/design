--- 
title: "inline-cta"
description: "Inline call to action for story display."
menu: cards
---

<link rel="stylesheet" href="/css/decks/zones.css">

The inline CTA should be used in the story body. Under the dynamic content rules, it will be moved on the page and the wording will change. To allow for maximum flexibility, it's a standard stack of atoms and follows the same rules as all other ads on the page.

#### EXAMPLE

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent facilisis ex ex, at blandit sapien suscipit eget. Maecenas gravida, erat vitae commodo semper, lorem sem molestie metus, quis faucibus tellus.

<div class="zone grid combo">
{{< inline-cta >}}
<div></div>
</div>

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent facilisis ex ex, at blandit sapien suscipit eget. Maecenas gravida, erat vitae commodo semper, lorem sem molestie metus, quis faucibus tellus.

#### HTML
{{< highlight html >}}{{< inline-cta >}}{{< /highlight >}}

---

## Newsletter signup

The newsletter signup uses the same basic structure placing the classes on the form itself.

#### Example

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent facilisis ex ex, at blandit sapien suscipit eget. Maecenas gravida, erat vitae commodo semper, lorem sem molestie metus, quis faucibus tellus.

<div class="zone combo grid">
{{< inline-cta type="newsletter" >}}
<div></div>
</div>

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent facilisis ex ex, at blandit sapien suscipit eget. Maecenas gravida, erat vitae commodo semper, lorem sem molestie metus, quis faucibus tellus.

#### HTML
{{< highlight html >}}
{{< inline-cta type="newsletter" >}}
{{< /highlight >}}
