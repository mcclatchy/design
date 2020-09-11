---
title: button
description: Button styles to ensure proper row alignment
function: ''
level: atom
updated: true
menu:
  atom: {}

---
Buttons are designed to be placed in a center-aligned row using browser defaults and to have different levels of impact. There are four different types of button, but they all use the same base code.

#### EXAMPLE

<div style="padding-bottom: 30px;">
<button class="impact button">Impact button</button>
<button class="ghost button">Ghost button</button>
<button class="promo button">Promo button</button>
<button class="button">Text button</button>
</div>

##### Social Buttons

<div style="padding-bottom: 30px;">
    <div class="package" style="max-width:340px;padding: 0;">
       <button class="button social facebook">Sign in with Facebook</button>
       <button class="button social google">Sign in with Google</button>
       <button class="button social apple">Sign in with Apple</button>
       <button class="button social twitter">Sign in with Twitter</button>
    </div>
</div>

#### HTML

```html
<div>
  <button class="button impact">Impact button</button>
  <button class="button ghost">Ghost button</button>
  <button class="button promo">Promo button</button>
  <button class="button">Text button</button>
  <button class="button social facebook">Sign in with Facebook</button>
  <button class="button social google">Sign in with Google</button>
  <button class="button social apple">Sign in with Apple</button>
</div>
```

#### RULES

| Property | Value |
| --- | --- |
| Typeface | Noto Sans |
| Weight | 600 |
| Size | 1rem (16px) |
| Border | 1 pixel solid #4a4a4a with a 2-pixel radius |
| Case | Uppercase |

---

## SELECT

Custom selects use a combination of the [expander](../expander) molecule and link-based buttons instead of the native select element for forms. Because they are based on the expander, a toggle of the `open` class will show and remove the option list. Lastly, adding the class `selected` to any of options will make it bold. Different use cases will most likely require different javascript, but we have a [starter script](/js/select.js) for the purposes of this demo.

#### EXAMPLE

<div class="grid" style="grid-template-columns: 300px 1fr;">
{{< select >}}
</div>

<script async src="/js/select.js"></script>

#### HTML

{{< highlight html >}}{{< select >}}{{< /highlight >}}
