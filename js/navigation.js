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
  const body = document.documentElement;
  const blackLogo = document.querySelector(".flag-logo a img[src*='/img/sacramento-bee-black.svg']");
  const whiteLogo = document.querySelector(".flag-logo a img[src*='/img/sacramento-bee-white.svg']");

  // Non-sub elements
  const nonSubLogin = document.querySelector("#logIn");
  const nonSubSeparator = document.querySelector(".pipe-seperator");
  const nonSubSubscribe = document.querySelector(".subscribe-link");

  // Sub elements
  const subExpanderButton = document.querySelector(".flag-account .expander");
  const subPopout = document.querySelector("#popout");
  
  body.classList.toggle("msb");
  
  if (body.classList.contains('msb')) {
    // If 'msb' class is present (subscriber mode)
    if (whiteLogo) whiteLogo.style.display = 'block';
    if (blackLogo) blackLogo.style.display = 'none';

    if (nonSubLogin) nonSubLogin.style.display = 'none';
    if (nonSubSeparator) nonSubSeparator.style.display = 'none';
    if (nonSubSubscribe) nonSubSubscribe.style.display = 'none';

    if (subExpanderButton) subExpanderButton.style.display = 'block'; // Assuming default display is block for button
    if (subPopout) subPopout.style.display = 'block'; // Assuming default display is block for div

  } else {
    // If 'msb' class is not present (non-subscriber mode)
    if (whiteLogo) whiteLogo.style.display = 'none';
    if (blackLogo) blackLogo.style.display = 'block';

    if (nonSubLogin) nonSubLogin.style.display = 'block';
    if (nonSubSeparator) nonSubSeparator.style.display = 'inline'; // Assuming default display is inline for span
    if (nonSubSubscribe) nonSubSubscribe.style.display = 'block';

    if (subExpanderButton) subExpanderButton.style.display = 'none';
    if (subPopout) subPopout.style.display = 'none';
  }
}

function showNavigation() {
  document.querySelector("#main-nav").classList.add("open");
  document.body.classList.add("freeze");
}

function closeNavigation() {
  document.querySelector("#main-nav").classList.remove("open");
  document.body.classList.remove("freeze");
}