/**
 * Theme page UI elements
 */

const toast = document.querySelector("mc-toast");

document.querySelector(".color-example")
  .addEventListener("click", (e) => {
    if(e.target.classList.contains("button")) {
      let card = e.currentTarget.querySelector(".card");
      card.classList.value = `card ${e.target.classList[2]}`;
    }
  });

document.querySelectorAll(".expander")
  .forEach(ele => {
    ele.addEventListener("click", () => ele.classList.toggle("open"));
  });

document.querySelectorAll(".story-body > h2, .story-body > h3")
  .forEach(ele => {
    ele.classList.add("permalink");

    let url = new URL(window.location.href);
    url.hash = ele.id;

    ele.addEventListener("click", () => {
      navigator.clipboard.writeText(url.href).then(() => {
        toast.message = "Link copied to the clipboard";
        toast.show(2000);
      });
    });
  });

const gridExample = document.querySelector(".grid-example");
gridExample.querySelector(".load-more")
  .addEventListener("click", (e) => {
    gridExample.querySelector("custom-card").order = 2;
  });
