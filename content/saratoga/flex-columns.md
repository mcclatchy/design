---
title: "flex-columns"
description: "A flexbox version of the grid using the same rules."
menu: atom
---

The flex-columns organism is an alternative to the CSS Grid for pages that need full browser support. It functions like Bootstrap where the main container gets a negative 15px margin and each child gets 15px back. This allows for a coding style much like the CSS Grid, so the two can be interchangeable. 

The rules are simple, each column has a 330px flex basis and it wraps. This ensures that ads will always display properly. None of that kicks in until 690px to enssure that phones always behave as a vertical stack.

In addition to the standard grid, there is also a `.main-stage` and `.rail` concept. A child with the `.main-stage` class will have a basis of 660px. Order of the children for our designs should always be `.main-stage` first and `.rail` second. This is appropriate for mobile. There is a `.reverse` option that will swap the `.rail` to the left side on desktop.

#### EXAMPLES

This is a standard grid.

<section class="example">
  <div class="flex-columns">
    {{< card >}}
    {{< card >}}
    {{< card >}}
  </div>
</section>

This is using the `.main-stage`, `.rail` and `.reverse` concepts.

<section class="example">
  <div class="flex-columns reverse">
    <div class="main-stage">
      {{< card >}}
    </div>
    <div class="rail">
      {{< card >}}
    </div>
  </div>
</section>

#### HTML
```html
<div class="flex-columns reverse">
  <div class="main-stage">
    <article class="card"> ... </article>
    <article class="card"> ... </article>
    <article class="card"> ... </article>
    <article class="card"> ... </article>
    <article class="card"> ... </article>
  </div>
  <div class="rail">
    <div class="digest"> ... </div>
  </div>
</div>
```
