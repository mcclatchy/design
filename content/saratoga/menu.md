---
title: "menu"
description: "Side menu panel tied to the hamburger."
menu: cards
---

The slide-out menu is a fixed panel with internal scrolling. We used button elements to keep the DOM similar and have added a couple new custom properties to optimize this structure. 

| Property ||
|---|---|
| \--bc | button text color |
| \--bbc | button background color |

A large portion of the menu is a simple stack of expander elements and will require Javascript to toggle the "open" class. The menu will slide out on a similar class toggle of "open". For this demo we created a simple [navigation.js](/js/navigation.js) file to hold the functions. Originally made for modals, the "freeze" class can be added to the body element to stop scrolling on most devices when the menu is open.

#### EXAMPLE

*The menu is included in the [story deck](../decks/story/) and is better represented there.  
Click the hamburger menu in the flag to open it.*
