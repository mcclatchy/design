---
title: form (DSP)
description: DSP form layout
menu: "cards"
---

The form card uses the paper molecule, the package molecule and can utilize the basic grid structure with some minor changes because the grid is within a form. As you can see, if you place a container with the class of "grid" inside the form, the children of that grid will use a grid-gap of 15px (i.e. the First name and Last name inputs in this example).

#### Example
<div class="dsp" style="margin-bottom: 30px;">
    <div class="paper" style="max-width: 400px;">
        <div class="package">
            <form> 
                <div class="grid">
                    <div>
                        <label for="first-input">First Name</label>
                        <input type="text" id="first-input">
                    </div>
                    <div>
                        <label for="last-input">Last Name</label>
                        <input type="text" id="last-input">
                    </div>
                </div>
                <div>
                    <label for="email-input">Email address</label>
                    <input type="text" id="email-input">
                </div>
                <div>
                    <label for="password-input" onclick="changeType()" id="password-label">Password</label>
                    <small>Must be at least 7 characters long</small>
                    <input type="password" id="password-input">
                </div>
                <div>
                    <label for="select">Choose an option</label>
                    {{<select>}}
                </div>
                <button id="button" type="submit" class="button disabled">submit</button>
            </form>
        </div>
    </div>
</div>

#### HTML
{{< highlight html >}}
    <div class="paper">
        <div class="package">
            <form> 
                <div class="grid">
                    <div>
                        <label for="first-input">First Name</label>
                        <input type="text" id="first-input">
                    </div>
                    <div>
                        <label for="last-input">Last Name</label>
                        <input type="text" id="last-input">
                    </div>
                </div>
                <div>
                    <label for="email-input">Email address</label>
                    <input type="text" id="email-input">
                </div>
                <div>
                    <label for="password-input" onclick="changeType()" id="password-label">Password</label>
                    <small>Must be at least 7 characters long</small>
                    <input type="password" id="password-input">
                </div>
                <div>
                     <label for="select">Choose an option</label>
                     <span class="button big expander" onclick="this.classList.toggle('open');">Order by</span>
                      <div class="options">
                        <a class="button big" href="#" data-name="Relevance">Relevance</a>
                        <a class="button big" href="#" data-name="Newest">Newest</a>
                        <a class="button big" href="#" data-name="Oldest">Oldest</a>
                      </div>
                </div>
                <button id="button" type="submit" class="button disabled">submit</button>
            </form>
        </div>
    </div>
{{< /highlight >}}


<script async src="/js/select.js"></script>

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