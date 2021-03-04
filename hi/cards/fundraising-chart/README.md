# The fundraising chart

This element is an attempt to simplify the process of repeatedly editing a chart in CUE over time by hiding most of the stricture and styling in the ShadowDOM. I created it for The Fresno Bee [Education Lab landing page](https://www.fresnobee.com/news/local/education/article235079937.html).

As with most elements I have been making of late, this element will append the ShadowDOM and fill it in the `connectedCallback()` handler. This means that changes to the attributes after it has been appended to the DOM will not be reflected.

### Example
```html
<fundraising-chart collected="246000" goal="600000">
  <chart-phase value="300000">Phase 1 goal</chart-phase>
  <chart-phase value="600000">Phase 2 Goal</chart-phase>
</fundraising-chart>
```

The script includes the definition for both the `<fundraising-chart>` and `<chart-phase>` elements. You may add as many phases as you like, but at a certain point they start to collide on mobile devices. I recommend using CSS to toggle certain phases, or keeping it around three.

### Configurable attributes/properties

`collected` and `goal`

These attributes will be converted to integers and used to mathematically figure out the filled portion of the bar.

`value` 

This number will be formatted into a monetary string for display, including proper commas and a dollar sign.
