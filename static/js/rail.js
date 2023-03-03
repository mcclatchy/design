let rail = document.querySelector(".rail");
let lastScroll = localStorage.getItem("scroll")

if(lastScroll && (window.innerWidth > 769)) {
  rail.scrollBy(0, lastScroll);
}

rail.addEventListener("click", e => {
  localStorage.setItem("scroll", rail.scrollTop);
})
