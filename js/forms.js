//toggle password hide/show
const passwordInputs = document.querySelectorAll(".password-label");
passwordInputs.forEach(i => {
  i.addEventListener("click", handlePasswordToggle);
});

function handlePasswordToggle(e) {
  let input = e.target.parentNode.querySelector("input");
  input.type = input.type == "password" ? "text" : "password";
  e.target.classList.toggle('active');
}
    

//submit form validation
const forms = document.querySelectorAll("form");
forms.forEach(d => {
  d.addEventListener("submit", handleFormSubmit);
});

function handleFormSubmit(e) {
  // e.preventDefault();
  let form = e.target;
  let valid = form.checkValidity();

  if(!valid) {
    console.log("Form is valid and would send");
  } else {
    try {
      toggleModal("main-modal")
    } catch(e) {
      console.warn("main-modal is not on the page");
    }
  }
}


// window.location = '?#';
// const button = document.getElementById("submit");

// button.addEventListener("click", function() {
// const form = document.getElementById('sign-up-form');
// const formIsValid = form.checkValidity();
// const invalid = form.querySelectorAll(":invalid"); 
//   if (formIsValid) {  
//       toggleModal('main-modal');
//   } else {
//     for (let i in invalid) {
//      invalid[i].classList.add("required");
//     }
//   } 
// }); 


//show/hide cc form 
// const radio = document.getElementById("cc-radio");

//  function mediaQuery(x) {
//   if (x.matches) { // If media query matches
//       radio.checked = true; 
//   } else {
//       radio.checked = false; 
//   }
// }

// var x = window.matchMedia("(min-width: 640px)")
// mediaQuery(x) // Call listener function at run time
// x.addListener(mediaQuery) // Attach listener function on state changes   

// if (radio.checked) {
//     document.getElementById('cc-form').style.display = 'block'
// } else {
//     document.getElementById('cc-form').style.display = 'none'
// }

