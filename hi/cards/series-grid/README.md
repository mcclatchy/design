# The series grid

This card takes the articles loaded into the series nav and builds a grid that will either display underneath the story body or inline wherever the embed is placed. We are attempting to work with analytics to build a more SEO-rich landing page, and at the same time create something simple to implement that can turn all parts of a series into landing pages.

Stories are added to the grid slot automatically, and the intro will accept any element. Since the intro content comes from the LightDOM, all SDS classes can apply.

## Example

```html
<series-grid [inline] [feature-next] [hide-series-nav]>
  <p slot="intro">...</p>
</series-grid>
```

## Mock

![Series grid mock](screenshot.jpg)

## ShadowDOM structure

```html
<div class="content">
  <slot name="intro" class="intro"></slot>
  <slot class="grid"></slot>
</div>
```

## Configurable attributes

*All attributes are currently read-only, as this element is intended to be used in the CMS system as an HTML snippet.*

#### feature-next

The element will always figure out what story it is in the list, and add the class `next-story` to the next one in the list. In the case that the story is the last one on the list, or it is not included in the list, the first story will get the class. 

The `feature-next` attribute will append additional classes to that elment to turn it into the horizontal in-dpeth card and it will move it to the first row and first column of the grid spanning however many columns there are.

The cards are appended to the LightDOM, so more custom displays can be made on a project-by-project basis.

#### inline

This element has two use cases. The `inline` attribute will cause the grid to appear wherever the embed is placed. This should only be used in building standalone landing pages, as the significant size of the grid would prevent readers ffom finishing the story. As we don't put paper on paper, this mode changes the styles of the cards a tad to fit that setting better.

#### hide-series-nav

By default this element will not hide the normal series nav. In the inline mode, it is likely that we will be asked to do so. By placing the possibility in this element, we can reduce some of the code in the embed to make it more readable and accessible for journalists.

## Custom events

This card will dispatch two events at different points in the process. These are listed in the order and neither include any data.

#### series-nav-moved

This event will only be dispatched if the default presentation is used. It is located at the end of the `move()` function, and will therefore dispatch prior to the `feature-next` or `hide-series-nav` flags are evaluated.

#### series-nav-complete

This event is dispatcehd at the end of the `connectedCallback()` handler and all flags have been evaluated.
