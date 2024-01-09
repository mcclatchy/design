// Set menu button to click
document.querySelector("#menu-toggle").onclick = function() {
  const nav = document.querySelector("#main-nav");
  
  this.classList.toggle("opened");

  if(this.classList.contains("opened")) {
    this.ariaExpanded = true;
    nav.classList.add("open");
    document.body.classList.add("freeze");
  } else {
    this.ariaExpanded = false;
    nav.classList.remove("open");
    document.body.classList.remove("freeze");
  }
}

// Account button click
document.querySelector('.flag-account .button').onclick = function() {
  this.classList.toggle("open");

  if( this.classList.contains("open") ) {
    document.body.classList.add("freeze");
  } else {
    document.body.classList.remove("freeze");
  }
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
