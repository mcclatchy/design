---
title: "inputs"
description: "Form input styles"
menu: "atom"
---

Inputs are designed to be placed in a center-aligned form that is 100% of the parent width using browser defaults and to have different states based on user interaction.

#### Text Inputs Example

<form style="grid-template-columns: 400px;">
  <div>
    <label for="default-input">Default</label>
    <input type="text" id="default-input">
  </div>
  <div>
    <label for="focused-input">Focused</label>
    <input type="text" class="focus">
  </div>
  <div>
    <label for="hint-input">Hint</label>
    <small>This is a hint</small>     
    <input type="text" id="hint-input">
  </div>
  <div>
    <label for="error-input">Error</label>
    <small class="error" for="error-input">This is an error message</small>     
    <input type="text" id="error-input" class="is-invalid">
  </div>
  <div>
    <label for="password-input" onclick="changeType()" id="password-label">Password</label>
    <small>Must be at least 7 characters long</small>    
    <input type="password" id="password-input">
  </div>
  <div>
    <label for="native-select">Native select box</label>
    <select>
      <option value="Relevance">Relevance</option>
      <option value="Newest">Newest</option>
      <option value="Oldest">Oldest</option>
    </select>
  </div>
  <button id="button" type="submit" class="button promo">submit</button>   
</form>  
  
#### Checkboxes and Radios Example
<form class="checkboxes">
  <label class="checkbox-container">Custom Checkbox
    <input type="checkbox">
    <span class="checkmark"></span>
  </label>
  <label class="check"><input type="checkbox"> Native Checkbox</label>
  <label class="checkbox-container">Custom Radio
    <input type="radio" checked="checked" name="radio">
    <span class="radio"></span>
  </label>
  <label class="checkbox-container">Custom Radio
    <input type="radio" name="radio">
    <span class="radio"></span>
  </label>
  <label class="check"><input type="radio" name="radio"> Native Radio</label>
</form> 
  
#### HTML
```html
<form>
 
  <label for="input">Default</label>
  <small>This is a hint</small>           
  <input type="text" id="input">
  
  <label for="password-input" onclick="changeType()" id="password-label">Password</label>
  <small>Must be at least 7 characters long</small>    
  <input type="password" id="password-input">
  
  <button type="submit" class="button promo">submit</button>  
  
  <label class="checkbox-container">Custom Radio
    <input type="radio" name="radio">
    <span class="radio"></span>
  </label>
  
</form>
```

#### RULES

| Property | Value |
| --- | --- |
| Typeface | Noto Sans |
| Weight | 400 |
| Size | 1 em |
| Border | 1 pixel solid #989898 with a 2-pixel radius |

---

## SELECT

Custom selects use a combination of the [expander](../expander) molecule and link-based buttons instead of the native select element for forms. Because they are based on the expander, a toggle of the `open` class will show and remove the option list. Lastly, adding the class `selected` to any of options will make it bold. Different use cases will most likely require different javascript, but we have a [starter script](/js/select.js) for the purposes of this demo.

#### EXAMPLE

<div class="grid" style="grid-template-columns: 300px 1fr;">
<form>
{{< select >}}
</form>
</div>

<script async src="/js/select.js"></script>

#### HTML

{{< highlight html >}}{{< select >}}{{< /highlight >}}


<script>
//toggle password hide/show
  const el = document.querySelector('#password-label');
  function changeType() {
  let x = document.getElementById("password-input");
  if (x.type === "password") {
      x.type = "text";  
  } else {
    x.type = "password";
  }
el.classList.toggle('active');
}
//prevent form submit
  document.getElementById("button").addEventListener("click", function(event){
  event.preventDefault()
});
</script>
