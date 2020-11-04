/**
 * AP map injection for 2020 election
 */

const t = document.createElement("template");
t.innerHTML = `
<section><iframe class="card" id="iframe_ff4da00c932e978a8f3a62bfea6b9ddf" style="overflow: hidden; min-width: 100%; border: none;" src="https://elections.ap.org/widgets/content/ff4da00c932e978a8f3a62bfea6b9ddf" width="100%" height="100%" frameborder="1" allowfullscreen="allowfullscreen" onload="iFrameResize({}, '#iframe_ff4da00c932e978a8f3a62bfea6b9ddf');"></iframe></section>`;

const resizer = document.createElement("script");
resizer.src = "https://elections.ap.org/widgets/js/resizer.client.min.js";
document.body.appendChild(resizer);

resizer.addEventListener("load", () => {
  const clone = t.content.cloneNode(true);
  const immersive = document.querySelector("article.immersive");
  document.body.insertBefore(clone, immersive.nextElementSibling);
});

