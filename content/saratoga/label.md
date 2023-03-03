---
title: label
description: Labels for the tops of cards and headline stacks on section pages.
menu: atom

---
The label should be used at the top of cards and headline stacks when necessary. There are two options: the default has relative spacing and pushes content down, and the `.sticky` class will make it lay on top of the lead art for the stack.

The label atom is just used for spacing and can accept any element. Currently, we only use the h5 atom on the site but that could change.

#### EXAMPLE
<div class="zone">
  {{< digest label="sticky" >}}
  {{< digest >}}
</div>
