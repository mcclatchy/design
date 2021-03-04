# The zone swapper

This element simply swaps itself with any zone on our story pages, regardless of where you place it in the DOM.

Since this element moves itself, I have set the `updatePosition()` in the   `connectedCallback()` handler instead of an `attributeChanged()` handler. Therefore, if you need to dynamically set the zone after adding to the DOM, you will need to call it manually. This can usually be avoided by setting everything prior to appending it, if you are not using HTML to do it.

Lastly, this element is intentionally light to allow for simple direct use and so that other more specific custom elements can extend it.

### Example

```
<zone-swap zone="4">
  ...
</zone-swap>
```


### Configurable attributes/properties

`zone`

The zone attribute will accept an integer from 1 to 5, or a CSS selector that it will pass to a `document.querySelector()` function call. Note that the integers 3 and 4 will replace the full box including the ad. To replace the left side only, use a CSS selector.

### Method and properties

`updatePosition()`

This function updates the position of the element using the zone getter as the new location. It is called automatically in the `connectedCallback()` handler. This function hides the content previously in the zone, so multiple manual calls could end up removing more from the page than desired.
