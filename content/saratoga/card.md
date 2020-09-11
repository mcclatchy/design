---
title: card
description: Enhanced paper molecule with flex display.
menu: "molecule"
---

The card molecule extends the paper base molecule and adds Flexbox. By doing so the size of the card is stretched to match adjacent cards in each row. Card molecules should be the direct children of any Flexbox or Grid container.

#### Example
<div class="example grid">
  {{< card >}}
  {{< card >}}
</div>

#### HTML
{{< highlight html >}}
{{< card >}}
{{< /highlight >}}

---

## Horizontal version

The card can also be made horizontal by adding a class with the same name.

#### Example
{{< card class="horizontal" >}}

#### HTML
{{< highlight html >}}
{{< card class="horizontal" >}}
{{< /highlight >}}
