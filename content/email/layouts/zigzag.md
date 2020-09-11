---
title: "Zig-Zag Layout"
description: "how to create a zig-zag layout that collapses gracefully on mobile"
menu: "layouts"
---

Zig-zag layouts are great on desktop, but need to collapse so that everything is in the same order on mobile. This layout uses elements from the [columns](../columns) layout.

How to zig-zag:

1. Code every row in a zig-zag layout in the order intended for mobile (usually image in the left column and text in the right).
2. For reversed rows, put the `.first`/`.row-end`/`.last` classes in reverse (so the first column on each row as coded would have `.last` or `.row-end` but the last one would have `.first`).
3. Add the `dir=rtl` attribute on the outermost `td` for the zig-zag rows and add `dir=ltr` on each column in the zig-zag rows.

### Example
#### Desktop Render
<div class="example">
	<zig-zag></zig-zag>
</div>

#### Mobile Render
<div class="example">
	<zig-zag-mobile></zig-zag-mobile>
</div>

### HTML
```html
<!-- ZIG-ZAG MOLECULE // -->
<table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
	<!-- NORMAL ROW // -->
	<tr>
		<td align="center" valign="top" class="pb24">

			<table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
				<tr>
					<td align="left" valign="top" width="168" class="col first collapse">
						image
					</td>
					<td align="center" valign="middle" width="360" class="col row-end collapse">
						text (use a nested table if there are different styles of text)
					</td>
				</tr>
			</table>

		</td>
	</tr>
	<!-- // NORMAL ROW -->
	<!-- ZIG-ZAG ROW // -->
	<tr>
		<td align="center" valign="top" class="pb24" dir="rtl">

			<table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
				<tr>
					<td align="left" valign="top" width="168" class="col row-end collapse" dir="ltr">
						image
					</td>
					<td align="center" valign="middle" width="360" class="col first collapse" dir="ltr">
						text (use a nested table if there are different styles of text)
					</td>
				</tr>
			</table>

		</td>
	</tr>
	<!-- // ZIG-ZAG ROW -->
	<!-- NORMAL ROW // -->
	<tr>
		<td align="center" valign="top" class="pb24">

			<table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
				<tr>
					<td align="left" valign="top" width="168" class="col first collapse">
						image
					</td>
					<td align="center" valign="middle" width="360" class="col last collapse">
						text (use a nested table if there are different styles of text)
					</td>
				</tr>
			</table>

		</td>
	</tr>
	<!-- // NORMAL ROW -->
</table>
<!-- // ZIG-ZAG MOLECULE -->

```
