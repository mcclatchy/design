---
title: "Conditional Formatting"
description: "how to use if-else formatting to display content"
menu: "campaign"

---
Adobe Campaign allows the use of conditional formatting to display different content in the same template. This formatting can be used anywhere in the body of an email and in the subject line field.

The best example of this is in our footers, where Spanish is shown to subscribers of *el Nuevo Herald* and English is shown for everywhere else.

### Syntax
This code looks like JavaScript except that every portion of JS has to be contained within the `<% %>` tag that Adobe Campaign uses. This can be used on the simplest level just using an `if` statement followed by a single `else` statement, or can go as specific as needed with multiple `else if` statements in between.

```javascript
<% if (siteName == 'site1') { %>
	site1 stuff
<% } else if (siteName == 'site2') { %>
	site2 stuff
<% } else { %>
	all other sites stuff
<% } %>
```

<div class="note">
There are only 2 operators we are likely to use: <code>==</code> for "is equal to" and <code>!=</code> for "does not equal."
</div>
