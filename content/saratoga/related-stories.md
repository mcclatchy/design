---
title: "related-stories"
description: "Display for stories related in CUE."
level: "card"
---

This organism is mostly a combination of the grid and package molecules, with a single override for package molecules inside the element. The organism should appear directly under the story body when stories are added to the related bucket in CUE.

#### Example
{{< related-stories >}}

#### HTML
{{< highlight html >}}{{< related-stories >}}{{< /highlight >}}

#### CSS
```css
.related-stories .package {
  padding: 0;
}
```
