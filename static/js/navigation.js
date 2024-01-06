// Set menu button to click
var navButton = document.getElementById('menu-toggle');

// Click the button
navButton.onclick = function() {
	
  // Toggle class "opened". Set also aria-expanded to true or false. Toggle #main-nav class "open".
  if ( -1 !== navButton.className.indexOf('opened') ) {
    navButton.className = navButton.className.replace( ' opened', '' );
    navButton.setAttribute( 'aria-expanded', 'false' );
    document.querySelector("#main-nav").classList.remove("open");
    document.body.classList.remove("freeze");
  } else {
    navButton.className += ' opened';
    navButton.setAttribute( 'aria-expanded', 'true' );
    document.querySelector("#main-nav").classList.add("open");
    document.body.classList.add("freeze");
   }
    
};

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