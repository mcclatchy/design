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

#### FOOTERS
```
<%@ include view='footer_marketing' %>
<%@ include view='footer_newsletter' %>
<%@ include view='footer_generic' %>
<%@ include view='footer_transactional' %>
```

#### TERMS OF SERVICE
```
<%@ include view='tos_digital_2019_10' %>
<%@ include view='tos_combo_2019_10' %>
```
<br>

### Importing Content From a CSV
```
<%= targetData.columnName %>
(Replace columnName with whatever the name of the column is in the spreadsheet)
```
<br>

### Site Brand Table

#### Property Names
```
Official Property Name (what it says in the flag)
<%= recipient.siteBrand.paperName %>

The Property Name (for use at the beginning of a sentence)
<%= recipient.siteBrand.upperThePropertyName %>

the Property Name (for use in the middle of a sentence)
<%= recipient.siteBrand.lowerThePropertyName %>

Property Name (for use as a compound adjective)
<%= recipient.siteBrand.propertyName %>
```

#### Publication Links
```
https://<%= recipient.siteBrand.publicationUrl %>
https://<%= recipient.siteBrand.eeditionVanity %>
https://<%= recipient.siteBrand.subActivation %>
https://<%= recipient.siteBrand.gamesPage %>

You can also add a link to a specific section of a publication or vanity link by using the structure:
https://www.<%= recipient.siteName %>.com/section
```

#### App Links
```
https://<%= recipient.siteBrand.googlePlayApp %>?ac_cid=<%= message.delivery.internalName %>&ac_bid=<%= message.id %>
https://<%= recipient.siteBrand.iosApp %>?ac_cid=<%= message.delivery.internalName %>&ac_bid=<%= message.id %>
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
