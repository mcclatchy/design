---
title: form (DSP)
description: DSP form layout
menu: "cards"
---

The form card uses the paper molecule, the package molecule and can utilize the basic grid structure with some minor changes because the grid is within a form. As you can see, if you place a container with the class of "grid" inside the form, the children of that grid will use a grid-gap of 15px (i.e. the First name and Last name inputs in this example). Most styles are placed on the elements themselves, allowing us to keep form styles when using vendors that inject DOM onto the page.

#### Example
<div class="example grid shadow" style="--columns: 400px;">
{{< dsp/form >}}
</div>

<script async src="/js/select.js"></script>
<script async src="/js/forms.js"></script>
