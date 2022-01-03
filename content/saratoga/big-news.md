---
title: "big-news"
description: "Goes on the top of the homepage during large news events."
menu: "cards"
---

The big news card is a series of independent areas designed to give newsrooms control of the volume depending on what they have. Each zone is managed separately and nothing is required. Because the card needs to be so flexible, yet stable, it's set up with the CSS Grid instead of Flexbox. By also including the number of children for each grid item in a `data-children=X` attribute, we can use the Grid to iterate the design more easily as we see how newsrooms use it.

#### EXAMPLE

<div class="example" style="padding: 15px 0;">
{{< big-news >}}
</div>
