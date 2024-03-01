const menuToggleButton = document.querySelector("#menu-toggle");
const accountToggleButton = document.querySelector('.flag-account .expander');

let menuOpen = false;
let accountOpen = false;

function toggleFreeze() {
  if (!menuOpen && !accountOpen) {
    document.body.classList.remove("freeze");
  } else {
    document.body.classList.add("freeze");
  }
}

// Set menu button to click
menuToggleButton.onclick = function() {
  const nav = document.querySelector("#main-nav");
  this.classList.toggle("opened");
  this.ariaExpanded = this.classList.contains("opened");

  menuOpen = this.classList.contains("opened");
  nav.classList.toggle("open", menuOpen);

  toggleFreeze();
}

// Account button click
accountToggleButton.onclick = function() {
  this.classList.toggle("open");
  accountOpen = this.classList.contains("open");

  toggleFreeze();
}

function toggleSearchForm() {
  document.querySelectorAll(".flag").forEach(d => {
    d.classList.toggle("searching");
  });
}

function toggleSubMenu() {
  document.querySelectorAll(".flag").forEach(d => {
    d.classList.toggle("submenu-out");
  });
}

function toggleMSB() {
  document.documentElement.classList.toggle("msb");
}

function showNavigation() {
  document.querySelector("#main-nav").classList.add("open");
  document.body.classList.add("freeze");
}

function closeNavigation() {
  document.querySelector("#main-nav").classList.remove("open");
  document.body.classList.remove("freeze");
}
