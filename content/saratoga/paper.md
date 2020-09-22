---
title: paper
description: Default paper molecule with a block display.
menu: atom
---

The paper and card molecules both do the same thing of lifting them a plane higher than the background. The paper molecule is the more simple of the two, by having block for the display property. This allows default sizing and spacing of the children to dictate the height of the molecule.

In our digests, the design dictates that there be 15px of space between the label and the first headline, then 30px of space between each additional headline. This is easily done by stacking a label atom and several `package` molecules inside a paper molecule. The `package` molecule has 15px of padding on all sides, and therefore creates the proper space automatically.

#### Example

<div class="example grid">
{{< digest label="sticky" >}}
{{< digest >}}
</div>

#### HTML

```html
<div class="paper">
  <article class="package">
    <h3><a href="https://mcclatchy.github.io/saratoga/opinion/205579084/">The Episcopal Church changed course for our LGBT members</a></h3>
    <time>March 16, 2018 3:42 pm</time>
  </article>
  <article class="package">
    <h3><a href="https://mcclatchy.github.io/saratoga/opinion/205581414/">The Kansas Republican Party is taking a stance on transgender identity</a></h3>
    <time>March 16, 2018 3:58 pm</time>
  </article>
</div>
```
