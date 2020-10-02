---
title: "flag"
description: "The top banner of the sites including the search panel and account popout"
menu: cards 
---

The flag goes at the top of all pages. In keeping with the changes in 1.11.3 raw SVG code is used in place of CSS classes for the icons. The search panel animation is included and can be toggled with a class on the flag itself. The account popout uses our standard expander molecule with a small amount of CSS to set the positioning.

There are a few other enhancements to the style guide to optimize this code.

##### media breakpoint classes

We added very rudimentary utility classes to toggle visibility for three media breakpoints. The approach is mobile first, with classes to toggle display at larger breakpoints. Typically we like to keep these rules isolated to each card to keep structure semantic and safeguard against unintended future breaks, but in larger cards that's not optimal. Check out [display-classes.css](/css/decks/display-classes.css) file for a reference.

#### EXAMPLE

*The flag is included in our [story deck](../decks/story/) and is better represented there.*

#### HTML

The HTML is separate, to a point, for account holders and anonymous readers. There is also a separate bottom navigation and homepage class to make the logo a little larger for that page. For a better idea of the logic and what's different between versions check out the [flag.html](https://github.com/mcclatchy/design/blob/master/layouts/shortcodes/flag.html) shortcode on GitHub.
