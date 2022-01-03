---
title: "timeline"
description: "Used in live updates and for static timelines."
menu: cards
---

The timeline organism is a stack of events styled for chronological display. In the live updates implementation, all events should be shown at all times. When using the timeline as a story telling enhancement to a normal story, it should be combined with an expander molecule to hide what's not completely necessary to the story on initial load. This will change from story to story.

#### Example
{{< timeline type="story" >}}

---

## LIVE UPDATES VERSION

The live updates version doesn't use the expander molecule since the primary purpose of the page is to show these events. The same structure works without this addition.

#### LIVE UPDATES EXAMPLE
{{< timeline >}}
