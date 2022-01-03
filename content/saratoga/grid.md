---
title: "grid"
description: "A very basic starter grid"
menu: molecule
---

This is the smallest method of creating a grid following the design rules, which state that grid elements should be no smaller than 300px and have 30px of space between each item. It is very likely that at the template level more sophisticated grids will be required to fit everything onto the page dynamically.

#### Example
<div class="example grid">
  {{< card >}}
  {{< card >}}
  {{< card >}}
</div>

#### RULES

Property | Value
--- | ---
Column width | 300px minimum and stretches to fill between sizes.
Gap | 30px
