---
title: figure
description: Semantic wrapper for media in stories and cards
menu: atom
---

The `<figure>` atom is used as a semantic method of targeting media in different scenarios. The default margins are removed and any images are contained to the container. In previous versions we used `object-fit: cover` to ensure a 16:9 ratio but that has been removed in favor of consistent images coming from the server.

#### EXAMPLE
{{< figure >}}

#### Rules

Property | Value
--- | ---
Spacing | flush to edge of container
Image | Fills container
