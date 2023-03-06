---
title: "Colors QA"
date: 2020-09-15T08:07:04-05:00
layout: article
aliases: 
  - /saratoga/decks/colors-qa/
---

<style>
  .package {
    box-sizing: border-box;
    padding: 15px;
  }
</style>

# Color and CSS Custom Properties

The most challenging thing to maintain in SDS is color. Take a button. It can be impact, promo, promo-light or disabled like so.

<div class="buttons">
  <a class="button impact">Impact</a>
  <a class="button promo">Promo</a>
  <a class="button promo-light">Promo-light</a>
  <a class="button disabled">Disabled</a>
</div>

Those are setup using the class directly on the button like so:

```html
<a class="button impact">Impact</a>
<a class="button promo">Promo</a>
<a class="button promo-light">Promo-light</a>
<a class="button disabled">Disabled</a>
```

This works fine and dandy by simply addind the appropriate color and background color directly like so:

```css
.impact {
  background-color: #373737;
  color: white;
}
```

Things get trickier when we take the concept of impact and promo up a level to the container, which we do frequently. The following CTA works fine with the above rules:

<div class="package paper promo">
  <h2>Title</h2>
  <p class="summary">Offer text goes here</p>
</div>

```html
<div class="package paper promo">
  <h2>Title</h2>
  <p class="summary">Offer text goes here</p>
</div>
```

Great, but soon we need to add children who also need a different color treatment, like a button, or a link, or a byline.

<div class="package paper promo">
  <h2>Title</h2>
  <p class="summary">Offer text goes here</p>
  <a class="button">OFFER ACTION</a>
</div>

Ok .. now the togo food container is starting to get a little funky. How are we going to handle this? Easy enough, we can add additional rules for buttons like so:

```css
.promo .button {
  color: blue;
}
```

Wait .. how many elements do we have with a default color .. like 12 .. OK .. impact, promo, light, disabled, 12 times 4 .. 48 rules ....... ok?

<div class="package paper promo">
  <h2>Title</h2>
  <p class="summary">Offer text goes here</p>
  <a class="button" style="--bc: #222">OFFER ACTION</a>
</div>

Wait .. why is that button text black?

<div class="package paper promo">
  <h2>Title</h2>
  <p class="summary">Offer text goes here</p>
  <a class="more-link" style="--lc: #707070">OFFER ACTION</a>
</div>

I'm sorry, we're throwing more links in promos now too? 

And you want them to be *white*?

**That's it, no more rules I'm locking everything down!**

...

...

...

No, we don't get to do that we gotta figure this out.

### CSS Custom Properties to the rescue

For many years developers have used pre-processors like Less and Sass to handle these messes. They do clean up code for the developer, but they don't help at all on payload size. In fact they often make it much much worse because the rule complexity is hidden from us. Custom properties are the new native way of handling funky logic like we have here. I don't have a total handle on best ways to set up larger projects, but this is what I've discovered so far.

Placing these properties on bigger boxes themselves provides a very limited advantage over the regular rule, if an advantage exists at all. If you place it on the most basic atom, however, it can be super helpful.

Take our more-link sample from above. Default rules state that the color of a more-link should be #707070 like so:

```css
.more-link {
  color: #707070;
}
```

This rule is why you see the more-link show up as gray in the promo box above. If we change this just slightly, however, we can set up some options.

```css
.more-link {
  color: var(--tc, #707070);
}
```

This rules states that the more-link should use the `--tc` (text-color in my head) variable, and if that isn't set to use the standard #707070. This let's us set up rules for cards at the card level, without having to worry about what elements may or may not get thrown into it through the stakeholder review process. Take the promo CTA from before where the link was gray. Instead of thinking about the specific elements that are going to go into the card, using CSS properties we can think about the rules for the card itself. 

In promo cards, the text should be white, which we can now define like so:

```css
.promo {
  --tc: white;
}
```

<div class="package paper promo">
  <h2>Title</h2>
  <p class="summary">Offer text goes here</p>
  <a class="more-link">OFFER ACTION</a>
</div>

If we ensure that every atom that sets a change of color does so in this way, not only do we drastically shrink our CSS payload, but we also get a system that works more like stakeholders think. Can I put a button that links to my special page but also one of those arrow things that goes to our terms and conditions?

<div class="package paper promo" style="padding: 30px;">
  <h3 class="sans bold" style="line-height: 1.5em">Get full access to The Sacramento Bee across all your devices. Unlimited Digital Access: Only $0.99 for your first month.</h3>
  <a class="button">OFFER ACTION</a>
  <a class="more-link">Terms and conditions</a>
</div>

Why yes .. yes you can :)

```html
<div class="package paper promo" style="padding: 30px;">
  <h3 class="sans bold" style="line-height: 1.5em">Get full access to The Sacramento Bee across all your devices. Unlimited Digital Access: Only $0.99 for your first month.</h3>
  <a class="button">OFFER ACTION</a>
  <a class="more-link">Terms and conditions</a>
</div>
```
