---
title: package
description: Provides spacing for text in cards and digests.
menu: atom
---

The package molecule is the backbone of the design system. Spacing for  most molecules and organisms is based on these default rules. This molecule only provides spacing rules.

#### Example

<div class="example grid" style="--columns: 400px;">
{{< card >}}
</div>

#### Rules

The basic rules are simple:

* 15px of padding on all sides
* 10px of space between all direct children.

If the molecule is used inside a paper molecule, these are the only rules that will be applied. If the molecule is used inside of a card molecule or any other Flexbox or Grid container, the additional rules are applied:

* The molecule will stretch to fill its container
* If the last child is a time atom that atom is stretched to align with the bottom of the container.

These differences are important. For example, rules for the digest state that there should be 30px of space between each article group, and 15px of space between the label and the headline. This is easily done by stacking `package` molecules.

###### Example

<div class="example grid" style="--columns: 400px;">
{{< digest >}}
</div>

In a grid of cards, on the other hand, timestamps should line up. We can do this with the `package` molecule as well, needing no additional CSS.  This approach also provides the desired behavior on mobile. When there are no adjacent cards, the space collapses as desired.

###### Example

<div class="example grid">
{{< card >}}
{{< card >}}
</div>
