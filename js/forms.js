// Password event handle
const passwordInputs = document.querySelectorAll(".password-label");
passwordInputs.forEach(i => {
  i.addEventListener("click", handlePasswordToggle);
});

function handlePasswordToggle(e) {
  let input = e.target.parentNode.querySelector("input");
  input.type = input.type == "password" ? "text" : "password";
  e.target.classList.toggle('active');
}

// Form event handlers
const forms = document.querySelectorAll("form");
forms.forEach(d => {
  d.addEventListener("input", handleInputBlur);
  d.addEventListener("submit", handleFormSubmit);
});

function handleInputBlur(e) {
  let form = e.currentTarget;
  let button = form.querySelector("input[type='submit']");
  if(button) {
    button.disabled = !form.checkValidity();
  }
}

function handleFormSubmit(e) {
  let form = e.target;
  let valid = form.checkValidity();
  let data = new FormData(form);

  if(valid && data.has("terms") && !data.get("terms")) {
    e.preventDefault();
    toggleModal("main-modal")
  }
}

function handleTermsClicked(e) {
  let terms = document.querySelector("input[name='terms']");
  if(terms) terms.value = "yes";
  terms.closest("form").submit();
}
