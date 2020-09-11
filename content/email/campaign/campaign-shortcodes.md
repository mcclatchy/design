---
title: "Campaign Shortcodes"
description: "shortcodes for Adobe Campaign that import dynamic content or personalization data"
menu: "campaign"

---
Campaign Shortcodes pull in content blocks, user information, property information, logos, and more. This is a list of items that are used frequently, but is not a comprehensive list.

<div class="note">
In order for Adobe Campaign to properly track any URLs in its tables, the URLs have to be inserted in the tables without <code>https://</code> at the beginning and the <code>https://</code> must be added in the HTML as shown in the list below.
</div>

### Content blocks

#### Header
```
<%@ include view='mccDynamicHeader' %>
```

#### FOOTER
```
<%@ include view='mccDynamicFooterLeftAligned' %>
<%@ include view='mccDynamicFooterFlexibleWidth' %>
<%@ include view='mccFooterNoSocial' %>
```

#### TERMS OF SERVICE
```
<%@ include view='tos_digital_2019_10' %>
<%@ include view='tos_combo_2019_10' %>
```
<br>

### Importing Content From a CSV
```
<%= targetData.imageURL %>
(Replace imageURL with whatever the name of the column is in the spreadsheet)
```
<br>

### Site Brand Table

#### Property Names
```
Official Property Name (what it says in the masthead)
<%= recipient.siteBrand.paperName %>

The Property Name
<%= recipient.siteBrand.upperThePropertyName %>

the Property Name
<%= recipient.siteBrand.lowerThePropertyName %>

Property Name
<%= recipient.siteBrand.propertyName %>
```

#### Publication Links
```
https://<%= recipient.siteBrand.publicationUrl %>
https://<%= recipient.siteBrand.eeditionVanity %>
https://<%= recipient.siteBrand.subActivation %>
https://<%= recipient.siteBrand.gamesPage %>
https://<%= recipient.siteBrand.nieDonationURL %>

You can also add a link to a specific section of a publication or vanity link by using the structure:
https://www.<%= recipient.siteName %>/section
```

#### App Links
```
https://<%= recipient.siteBrand.googlePlayApp %>
https://<%= recipient.siteBrand.iosApp %>
```

#### Social Media Links
```
https://www.facebook.com/<%= recipient.siteBrand.connectFacebookUrl %>
https://www.twitter.com/<%= recipient.siteBrand.connectTwitterUrl %>
https://www.instagram.com/<%= recipient.siteBrand.connectInstagramUrl %>
```

#### CUSTOMER SERVICE
```
<%= recipient.siteBrand.customerServiceEmail %>
<%= recipient.siteBrand.customerServicePh1 %>
https://<%= recipient.siteBrand.customerServicePage %>
```
<br>

### Subscriber Table
```
<%= recipient.firstName %>
<%= recipient.lastName %>
<%= recipient.account %>
```
