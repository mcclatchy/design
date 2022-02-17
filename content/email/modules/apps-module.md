---
title: "App Module"
description: "download our app and app badges"
menu: "modules"
---

This module is frequently used before the footer in marketing emails.

### Example

<div class="example">
	<eds-app-molecule></eds-app-molecule>
</div>

### HTML

```html
<!-- // DOWNLOAD OUR APP -->
<table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%">
	<tr>
		<td align="center" valign="top" class="pb16 h3">
			Download our app
		</td>
	</tr>
	<tr>
		<td align="center" valign="top">

			<!-- APP BADGES // -->
			<table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%">
				<tr>
					<td align="right" valign="top" class="col-fixed first">
						<a href="https://<%= recipient.siteBrand.iosApp %>?ac_cid=<%= message.delivery.internalName %>&ac_bid=<%= message.id %>" target="_blank"><img src="https://media.mcclatchy.com/email-assets/global/app-store-badge.png" width="120" alt="Download on the App Store" /></a>
					</td>
					<td align="left" valign="top" class="col-fixed last">
						<a href="https://<%= recipient.siteBrand.googlePlayApp %>?ac_cid=<%= message.delivery.internalName %>&ac_bid=<%= message.id %>" target="_blank"><img src="https://media.mcclatchy.com/email-assets/global/google-play-badge.png" width="134" alt="Get it on Google Play" /></a>
					</td>
				</tr>
			</table>
			<!-- // APP BADGES -->

		</td>
	</tr>
</table>
<!-- // DOWNLOAD OUR APP -->
```
