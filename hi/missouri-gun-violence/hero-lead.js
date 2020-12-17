const leadArt = document.querySelector(".story-body header + figure");
leadArt.classList.add("full-bleed");
leadArt.previousElementSibling.insertAdjacentElement("beforebegin", leadArt);
