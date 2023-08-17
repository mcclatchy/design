/*
 * Allows for setting themes
 */

function setLayout() {
  const value = window.location.hash.substring(1);
  document.documentElement.dataset.layout = value;

  switch(value) {
    case "taboola":
      const regions = document.querySelectorAll("[data-tb-region]");

      regions.forEach(region => {
        const items = region.querySelectorAll("[data-tb-region-item]");
        items.forEach(item => item.dataset.region = region.dataset.tbRegion);
      });
  }
}

window.addEventListener("hashchange", setLayout);
setLayout()
