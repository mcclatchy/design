---
title: "Theming pages in the design system"
type: theming
---

The ability to quickly theme and enhance pages is built into the foundation of the design system. We do this by creating layers for each part of our organization and binding them together with some fun tools and techniques. Most atoms and molucules are customizable, using CSS custom properties, and they have default values. These defaults are used in the base layer coming from WPS and make most of our pages, but we can put a layer on top of that base to change it where we want to. Take color for example, which is a configurable part of the paper atom. Click the buttons below to see how changing those properties affects the story card.

<div class="panel">
  <section class="grid color-example">
    {{< card >}}
    <div class="grid" style="--columns: repeat(3, 1fr)">
      <button class="button big impact">Impact</button>
      <button class="button big promo">Promo</button>
      <button class="button big custom">Custom</button>
    </div>
  </section>
</div>

We have additional customizations for spacing, alignment, columns, link treatment and typography. Put together in different ways, we can make the standard atoms, molecules and cards look very different with simple CSS. 

As we get into more advanced concepts and JavaScript later on this page, it's important to remember layering is critical. McClatchy has several development teams, and each one has their own needs, schedule and tech debt to manage. Here is a very rudimentary list of some that have the most direct involvement with the design system. When a reader goes to one of our urls, the work of these teams is used in this order.

1. The back end team handles CUE and the APIs that make the data from CUE available. Joe Vitale is the primary contact for this team.
2. The front end team handles WPS output and the default elements on the page. They take the API data and build HTML utilizing the design system. Eric Chima is the primary contact for that team.
3. The performance team appends dynamic logic to the HTML that includes: analytics, advertising, page optimizations, vendor integration and zone implementation. Eric Chima is the primary contact for that team as well.
4. The NewsX team provides additional enhancements and tools for specific pages using HTML, CSS and JavaScript. Eddie Alvarez is the primary contact for that team.

Layering provides both insulation for each team and a way for concepts to move from one team to another. The rest of this page will primarily focus on the work of the NewsX team, as we are currently handling theming. Our layer is closest to our readers, but it cannot negatively impact the work from other teams without communicating that back to to them in the code. Don't worry, we have tools to make that easy to do.


## Articles

In the past, we have tried a number of techniques to give enterprise content special visual presentations. Most of them culminated with content managed outside of CUE, and pages completely scrubbed and rebuilt entirely with JavaScript. Yes, very different presentations are possible with these techniques, but at significant costs:

1. It breaks the standard newsroom workflow.
2. Newsrooms lose the ability to publish at the last minute.
3. It cannot be scaled or implemented by newsrooms independently.
4. Individual programmers cannot handle more than one or two concurrent projects.
5. It very negatively impacts the other layers and teams by deleting their code.
6. It does not age well, and long-term support adds significant tech debt.

In the second half of 2021, after communication with all development teams and help from the DevOps team, we were able to reimagine how theming could work without the costs listed above. We organized what we typically do for custom presentations into the following sublayers: enhancements, themes, skins and custom cards. Just like the team layers, each of these sublayers builds on the one below it.

### Enhancements

The enhancements layer is a base JavaScript file that can be used by itself or in more complicated cards. Its primary function is to communicate to the other development teams by adding code to the page in a specific place, and for that reason it should be included in all themes and skins. 

It also provides a layer of functionality that NewsX uses in multiple projects, themes and skins including: utilities to remove or replace elements on the page and communicate those changes to the other teams, the valid point insertion concept, media width adjustments and a series nav fix when published across multiple markets. This file should only be used directly by employees that are comfortable working with JavaScript, and will change as business needs change.

{{% tip %}}
The enhancements file is a native ES6 module that exports a series of utility functions, and is available on all markets through a bucket-to-server sync DevOps set up at the following relative path <a href="https://www.miamiherald.com/static/hi/themes/enhancements.js">/static/hi/themes/enhancements.js</a>. All files are initially stored in a Google Cloud Bucket, providing an additional layer of security.

To include the file into your own module, import the functions that you want to use with the following syntax.

```
import { makePhotosWide, removeNodes } from "/static/hi/themes/enhancements.js"
```

You can also import all functions into an `enhancements` object using this syntax.

```
import * as enhancements from "./enhancements.js";
```

Simply importing the file will set up the communication to the other teams using the global <code>window.mi.theme</code> object. This location was chosen by the performance team and cannot change. They are generating analytics reports for pages where this object exists. The help desk team is also aware of the object, and if they get a ticket for a page where it exists, they know to contact NewsX to troubleshoot. This object eliminates a lot of confusion and internal communication between teams, so it's vital that it's included on custom pages and that these functions are used to manipulate the page when possible.
{{% /tip %}}

### Themes

Each theme is simply a group of enhancments designed around a specific concept or type of story. Two currently working prototypes are the [premium](./premium) and [guide](./guide/) themes, and are designed for enterprise and evergreen content respectively. Themes are created by the NewsX team, but can be implemented by anyone with access to CUE by adding an embed into the related content area in articles. We are also working with the development teams to have these themes added to the layout options dropdown in CUE, similar to the Immersive layout today. That work has been vetted and needs scheduling. 

The purpose of themes is to empower our journalists with the ability to enhance their stories directly, and by doing so spread the work to a much larger group of people. Because many of the people implementing themes will have little knowledge of how they work or what they are doing to the page, themes should adhere to the following rules.

1. It must support all CUE content types and embeds.
2. It must integrate with CUE when removing or modifying elements. For example, if a newsroom unchecks "Allows Ads" for a specific story a theme can provide additional enhancements based on that decision, but the newsroom must make it.
3. It must identify itself uniquely in the `window.mi.theme` object for the other development teams. 

{{% tip %}}
Themes should consist of no more than one CSS file and one JavaScript file. The JavaScript file should be a standard ES module, and must import the enhancements file to initiate the `window.mi.theme` object. Additional functionality can be imported to accommodate the needs of the theme. Here is the embed code for the premium theme.

```
<link rel="stylesheet" href="/static/hi/themes/premium.css">
<script type="module" src="/static/hi/themes/premium.js"></script>
```

After importing the enhancements file, the theme should set a specific name and description so the performance team can use it for their analytics reporting. Here is the top of the premium theme file showing how to do that.

```
/**
 * Premium content skin
 */

import * as enhancements from "./enhancements.js";

/**
 * Set this theme config
 */

mi.theme.name = "premium";
mi.theme.description = "A light theme for enterprise content";
```

Frameworks like React and templating libraries like Vue.js should not be used, as they can negatively impact code written in the other development layers without our knowledge.
{{% /tip %}}

### Skins

Skins are very similar to themes, in that they group enhancements and provide additional functionality, but are focused on a specific story or series of stories. These have been called special or high impact projects in the past, and the NewsX team continues to provide the same service to all of our newsrooms. Reporters and editors can [put in a request](https://airtable.com/shrwhpHxJ1n0S8kGp) for a custom skin.

Skins should be built the same way as themes for portability and scalability, but they can be more destructive to the page. They should import the enhancements file and use the functions in it when manipulating the DOM to communicate changes in the same way. The CSS and JavaScript files should only be managed by the NewsX team, and would never be added to the layout options dropdown in CUE. Newsrooms can and should add a skin to any follow-ups or sidebars associated with the project or series, and would can do so by adding the embed to the related content area in CUE. 

### Extending with custom cards

Custom cards are simply additional items to be incorporated within a story that display content CUE cannot. Examples of these are: data visualizations, maps, block quotes that play an mp3 when clicked, or a recipe that adds metadata to the page for SEO. Cards are meant to add value to a story, and must work in any story. Ideally, they should work on all page types as well, but that's not always possible. They are not meant to provide a completely different user experience. They are light and isolated, which makes them easy to create and minimizes their impact on the other development layers. If a newsroom would like to request a new card, they should use the [NewX request form](https://airtable.com/shrwhpHxJ1n0S8kGp).

<div class="embed-infographic">
  <script type="module" src="https://storage.googleapis.com/mc-high-impact/cards/audible-quote/audible-quote.js"></script>
  <audible-quote data-speaker="" data-mp3="https://dcs.megaphone.fm/MCCLATCHY3245393625.mp3?key=af242023bcee67d0cb64ad4fc4138486">
    And I never talked to anybody about this. Y’all are the first people I’m talking to about anything down there.
  </audible-quote>
</div>


{{% tip %}}
There are many ways to make a card, and it may need additional libraries to do what it needs to do. Unless there is a very specific reason, cards should be a custom element with a single JavaScript class file as the blueprint. There are many advantages to this approach.

1. Custom elements are extremeley fast and portable.
2. Lifecycle callbacks, observed attributes, and setter functions provide the same event and data-binding functionality as large frameworks.
3. ShadowDOM provides CSS scoping and can incorporate the CSS custom properties defined in the design system.
4. Slots provide a way to give newsrooms control of specific portions of a card without using external structured data.
5. ES class files are only executed once, regardless of how many times they are included in the DOM.
6. DOM nodes previously touched by other development layers are left in tact, even if they are moved.
7. Blueprint files can and should be ES modules or deferred.
8. It requires no additional architecture that can negatively interact with the page.

For an overview of Custom Elements API, check out the [MDN web docs page](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements#transpilers_vs._classes). For an example of our recommended structure, study the [`custom-card`](https://www.kansascity.com/static/hi/cards/custom-card/custom-card.js) element.
{{% /tip %}}

## Sections and homepages

The idea of section theming started with the invention of the [Labs pages](https://www.sacbee.com/news/equity-lab/) and the `simple-grid` concept in late 2020. We were looking to be able to add custom elements above, below and inside the regular grid of stories on section pages, and we needed to do it quickly. NewsX made a custom element that found all of the article cards and placed them into memory, then created a new structure and put the cards back in along with any other elements added manually. The concept worked very well and has been growing in popularity. But, that's where we ran into the same problems we had faced before on story pages.

1. Although story management and section workflow wasn't impacted too badly in the newsroom, editors became very hesitant to change these pages.
2. Managing content required the willingness to decipher large chunks of HTML.
3. HTML was delivered in an all-or-nothing approach, which could break.
4. Elements on the pages had no blueprint files, making the implementation-to-debt ratio linear.
5. For all the items listed above, and despite the valiant efforts of several editors, the NewsX team was always going to be heavily involed in periodic management of these pages.

To counter all these issues, we're using the same model that worked well on the story pages: layering. There are three primary teams that contribute to the page in the following order.

1. The front end team and WPS builds HTML using data from CUE that is always delivered no matter who is viewing the site. These are the elements that are absolutely critical to our business and on section pages include the flags, navigation, article cards, digests, videos, photos, and the footer.
2. The performance team appends additional elements that are also critical, but may differ depending on the reader. These include ads, zones, vendor content and a whole slew of other things immediately after the page is loaded. 
3. The NewsX team further enhances individual pages or sets of pages with non-critical custom cards, or in the case of the `simple-grid` sections mostly negates the work of the performance team. The latter is fine for testing a concept, but not something that should be common practice.

For all the elements on section pages, including homepages, we've identified the layer in which they should belong and have made an HTML structure that would be easy to organize by team. Here is the result:

```html
<section class="grid">
  <article class="card">..</article>
  <article class="card">..</article>
  <div class="zone-el">...</div>
  <article class="card">..</article>
  // WPS continues adding elements that all readers should see

  <div class="hidden">
    // This area is directly tied to the Banner options group and is used by NewsX
  </div>
</section>
// The performance team has a bird's eye view of the whole page
```

Hopefully it's easy to see the pattern and how the teams are organized. This is very similar to the way the `simple-grid` concept rebuilds the page, but it's directly incorporated into CUE.  

### The grid

Much like the `simple-grid` concept, the primary layout for all section pages, including homepages and topic pages, is our standard grid. CSS grid allows us to change the presentaion of each card, or group of cards, at the card level without needing to re-define the structure. We've got three decks to highlight how we can use this to our advantage, and we're exluding the flags, navigation and footer from this explanation.

The [section deck](/saratoga/decks/section/) represents the bare minimum display coming from WPS. These are the elements that are absolutely critical to our business: articles, a digest and ads.

The [topic page](/saratoga/decks/topic/) adds a few custom cards and starts to resemble the labs pages. All of these custom elements and digests can be created and delivered by any of the three teams, depending on the business need.

Finally, [the homepage](/saratoga/decks/homepage/) shows custom cards in addition to more complex elements that group cards and define their own space. In this case the partner content digests are a group that, on desktop, fill all three columns and control the layout independently. 

So how does this help us?

By diversifying output to different teams that operate at different speeds, intentionally, we get more flexibility as a company. Ideas and tests that are not critical to the business can be added to the page by the NewsX team, individually and without negatively impacting the other development layers. Ideas that are critical can be added through WPS or the performance team, depending on the need to be dynamic. Ideas that were not critical and initially developed by the NewsX team, but have become critical over time can be passed from NewsX to any of the other development teams easily. In each of these scenarios, the reader knows no difference. 

Take the following two examples. The first is a concept for a marketing card that NewsX has been asked to test. Click the button to simulate adding the element to the page in the same way that it would automatically for readers we wanted to see it.

<div class="panel grid-example">
  <section class="grid">
    {{< card >}}
    {{< card >}}
    {{< card class="d-tablet" >}}
    {{< card class="d-tablet" >}}
    {{< card class="d-tablet" >}}
    {{< card class="d-tablet" >}}

  <div class="load-more">
    <a class="button big impact">Load Card</a>
  </div>

  <div class="hidden">
    <custom-card>
      <div class="test-card promo">
        <p class="h2">Content goes here</p>
      </div>
    </custom-card>
  </div>
  </section>
</div>

That can be done rapidly by making a new HTML element in CUE and adding it to the appropriate Banner options groups, but should this particular card be deemed vital later, the WPS team can use the exact same output in the proper location in the grid for everyone. This is how layering allows output to move freely from one team to another.

<div class="panel grid-example">
  <section class="grid">
    {{< card >}}
    {{< card >}}
    {{< card class="d-tablet" >}}
    <div class="test-card promo">
      <p class="h2">Content goes here</p>
    </div>
    {{< card class="d-tablet" >}}
    {{< card class="d-tablet" >}}
    {{< card class="d-tablet" >}}
  </section>
</div>

### Custom cards

Custom cards are very similar to those made for story pages, but need to move themselves into the correct position. We have created a new `<custom-card>` element to make this easy, and initiate the communication with the other development layers. This element is very basic, and simply moves whatever HTML placed inside it into position. When we couple this with the flexibility of the CSS grid, we can change the page very quickly in many different ways without touching any other layer. 

Custom cards can also be extended to provide more advanced functionality, like digests built from API data or visualizations connected to the Google Workspace app. 

{{% tip %}}
`<custom-card>` is a custom element that provides functionality for the order attribute. Changing that attribute, or setting it initially, will move the card into position inside the `<section>` at the specified index. These values start at zero, so `<custom-card order="5">...</custom-card>` would be moved into the fifth slot. The order attribute can also be "before" or "after" to move the content above or below the `<section>` element, giving us the full-width panels we use on lab pages. The file is available on all markets at the following path [/static/hi/cards/custom-card/custom-card.js](https://www.kansascity.com/static/hi/cards/custom-card/custom-card.js).

SDS sets `display: contents` for the `<custom-card>` element, allowing us to pretend it's not there when making new cards. Elements that extend it, like the `<custom-digest>` element on the [topic page deck](/saratoga/decks/topic/) can set their own rules.

<!--

### Extending the base element
-->
