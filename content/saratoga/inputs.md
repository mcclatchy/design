---
title: "inputs"
description: "Form input styles"
menu: "atom"
---

Inputs are designed to be placed in a center-aligned form that is 100% of the parent width using browser defaults and to have different states based on user interaction.

#### Text Inputs Example

<form>
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
    <label for="password-input" class="password-label">Password</label>
    <small>Must be at least 7 characters long</small>    
    <input type="password" class="password">
  </div>
  <div>
    <label for="native-select">Native select box</label>
    <select>
      <option value="Relevance">Relevance</option>
      <option value="Newest">Newest</option>
      <option value="Oldest">Oldest</option>
    </select>
  </div>

  <div class="checkbox-group">
    <h4>Checkboxes and Radios Example</h4>
    <label class="checkbox"><input type="checkbox"> Checkbox</label>
    <label class="checkbox"><input type="radio" name="radio"> Radio Button</label>
    <label class="checkbox"><input type="radio" name="radio"> Radio Button</label>
  </div> 
  
  <button id="button" type="submit" class="button promo">submit</button>   
</form>  

#### RULES

| Property | Value |
| --- | --- |
| Typeface | Noto Sans |
| Weight | 400 |
| Size | 1 em |
| Border | 1 pixel solid #989898 with a 2-pixel radius |

<script async src="/js/forms.js"></script>
