---
title: "spacing"
description: "EDS spacing rules"
menu: "atoms"

---

All CSS classes for default spacing are found in the framework. The `.card` class adds 24px padding on all sides of an element and is usually applied to each outermost `td` in the `#email-table`. To put padding before, after or on the sides of individual elements within a card, or if a custom template requires different spacing, there are 3 sets of classes in the base template that can be used. Padding can be added to the just the top, bottom or sides with these classes and can be 8, 16 or 24 px.

Otherwise, new classes or ids will need to be created. The only rules are to use only padding and never margin and to use multiples of 8.

<div class="note">
	Outlook Desktop on Windows ignores padding applied to images, so if an image needs padding, apply the padding class to the image's parent container or the other element from which you are separating the image.<br><br>
	Outlook also ignores padding on anchor tags (inline and block) unless there is a border -- then it will render top and bottom padding.<br><br>
	Outlook also ignores padding on heading tags, so don't use those and instead use the supplied heading classes on a <code>td</code>.
</div>
