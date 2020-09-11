---
title: "Full-Width Email Framework"
description: "used for full-width backgrounds"
menu: "frameworks"

---

This framework is not used as frequently as the standard one, but is particularly useful when a design calls for a large hero image in the background. The maximum base table width is 100%, which means background images and background colors extend the full width of the viewport.

The email containers on every row are still set for a maximum width of 600px with 24px of padding on the sides, which again leaves a 552px-wide area for content. On screens with a width of 480px and smaller that support media queries, the email container will scale to a width of 100%, with a maximum width of 480px. All of the base design system CSS is included in this framework in addition to the HTML structure.

This framework can also be modified if for any reason gutters are needed in the design. For example, the `#email-table` width can be changed to 600px and the tables on every row to 552px, which means there will always be 24px gutters, even on mobile screens (which is where this setup typically makes a difference). The header will need to be moved outside of the `#email-table` like it is in the standard email framework.

<div class="note">
	The <code>.collapse</code> class is required on every <code>table</code> with a fixed width, which occurs on every row in the base full-width framework. Any item that does not have a percentage-based width <em>and</em> is not referenced in the media queries will keep the email from scaling properly for mobile.
</div>

<a class="button big promo" style="margin-bottom:32px;" target="_blank" href="https://drive.google.com/file/d/1FEkMKAnZzl_nlLGB-iEt1TuWAdpeH96p/view?usp=sharing">Get HTML</a>


### Sample email using full-width framework
<div class="example">
		<full-width-framework></full-width-framework>
</div>

<script type="text/javascript">
class FullWidthFramework extends HTMLElement {
	get template() {
		let t = document.createElement("template");
		t.innerHTML = `
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,400;0,700;1,400&family=Noto+Serif:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet">
    <style type="text/css">
        @import url( '/css/email/eds.css' )
    </style>
</head>
<body>
    <center>
        <!-- BODY TABLE // -->
        <table border="0" cellpadding="0" cellspacing="0" role="presentation" height="100%" width="100%" id="body-table">
            <tr>
                <td align="center" valign="top" width="100%" id="body-cell">
                    <!-- MAIN TABLE // -->
                    <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%" id="email-table">
                        <!-- HEADER BLOCK // -->
                        <tr>
                            <td align="center" valign="top" width="100%" id="header" style="padding-bottom: 0;">
                                <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="border-collapse: collapse;">
                                    <tr>
                                        <td align="center" valign="top" width="100%" style="background-color: #fff;border-top: 1px solid #ccc;border-bottom: 2px solid #ccc;padding: 12px 24px;font-family: 'Noto Sans', Tahoma, Arial, sans-serif;">
                                            <a href="#" target="_blank"><img src="https://media.mcclatchy.com/email-assets/global/logos-color/charlotte-color.png" alt="The Charlotte Observer logo" width="289" style="display: inline-block;border: 0;outline: none;text-decoration: none;" /></a>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                        <!-- // HEADER BLOCK -->
                        <tr>
                            <td align="center" valign="top" width="100%" class="bg-gray">
                                <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="600" class="collapse">
                                    <tr>
                                        <td align="center" valign="top" width="100%" class="card">
                                            <table border="0" cellpadding="0" cellspacing="0" width="100%" role="presentation">
                                                <tr>
                                                    <td align="center" valign="top" width="100%" class="h1 white">
                                                        Welcome
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                        <tr>
                            <td align="center" valign="top" width="100%" class="bg-white">
                                <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="600" class="collapse">
                                    <tr>
                                        <td align="center" valign="top" width="100%" class="card">
                                            <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%" role="presentation">
                                                <tr>
                                                    <td align="left" valign="top" width="100%" class="p">
                                                        Dear Reader,<br /><br />
                                                        Welcome to The Charlotte Observer. With your subscription, you’re helping support vital local journalism in our community, and we deeply appreciate your commitment. The Observer’s journalists are also deeply committed &mdash; to making sure we bring you the important news in our city and state, to telling you stories about inspiring people around us and to sharing information that helps you live a good life here. For our reporters, editors, videographers and others, this is also our community &mdash; where we live, work, shop and play. Our local roots and connection are at the heart of The Observer’s mission to serve our community. Thank you for helping make our work possible with your support.
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                        <tr>
                            <td align="center" valign="top" width="100%" class="">
                                <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="600" class="collapse">
                                    <tr>
                                        <td align="center" valign="top" width="100%" class="card">
                                            <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                                                <tr>
                                                    <td align="center" valign="top" width="100%" class="h2 pb24">
                                                        Get to know us
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td align="center" valign="top" width="100%" class="pb24">
                                                        <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                                                            <tr>
                                                                <td align="left" valign="top" width="136" class="headshot collapse center-mobile">
                                                                    <img src="https://media.mcclatchy.com/email-assets/global/headshots/dumbledore.png" width="120" class="img-inline" alt="reporter headshot" />
                                                                </td>
                                                                <td align="left" valign="top" class="small collapse">
                                                                    <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                                                                        <tr>
                                                                            <td align="left" valign="top" class="h3 pb8">
                                                                                Albus Dumbledore, O.M.
                                                                            </td>
                                                                            <td align="right" valign="middle" width="48">
                                                                                <a href="#" target="_blank"><img src="https://media.mcclatchy.com/email-assets/global/icons/envelope-alt-dark-unicon.png" width="24" alt="email"></a>
                                                                            </td>
                                                                            <td align="right" valign="middle" width="48">
                                                                                <a href="#" target="_blank"><img src="https://media.mcclatchy.com/email-assets/global/icons/twitter-dark.png" width="24" alt="twitter"></a>
                                                                            </td>
                                                                        </tr>
                                                                    </table>
                                                                    Professor Albus Percival Wulfric Brian Dumbledore, O.M. (First Class) was the Headmaster of Hogwarts School of Witchcraft and Wizardry. He was considered to have been the greatest wizard of modern times, perhaps of all time.
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td align="center" valign="top" width="100%" class="pb24">
                                                        <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                                                            <tr>
                                                                <td align="left" valign="top" width="136" class="headshot collapse center-mobile">
                                                                    <img src="https://media.mcclatchy.com/email-assets/global/headshots/dumbledore.png" width="120" class="img-inline" alt="reporter headshot" />
                                                                </td>
                                                                <td align="left" valign="top" class="small collapse">
                                                                    <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                                                                        <tr>
                                                                            <td align="left" valign="top" class="h3 pb8">
                                                                                Albus Dumbledore, O.M.
                                                                            </td>
                                                                            <td align="right" valign="middle" width="48">
                                                                                <a href="#" target="_blank"><img src="https://media.mcclatchy.com/email-assets/global/icons/envelope-alt-dark-unicon.png" width="24" alt="email"></a>
                                                                            </td>
                                                                            <td align="right" valign="middle" width="48">
                                                                                <a href="#" target="_blank"><img src="https://media.mcclatchy.com/email-assets/global/icons/twitter-dark.png" width="24" alt="twitter"></a>
                                                                            </td>
                                                                        </tr>
                                                                    </table>
                                                                    Professor Albus Percival Wulfric Brian Dumbledore, O.M. (First Class) was the Headmaster of Hogwarts School of Witchcraft and Wizardry. He was considered to have been the greatest wizard of modern times, perhaps of all time.
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td align="center" valign="top" width="100%">
                                                        <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                                                            <tr>
                                                                <td align="left" valign="top" width="136" class="headshot collapse center-mobile">
                                                                    <img src="https://media.mcclatchy.com/email-assets/global/headshots/dumbledore.png" width="120" class="img-inline" alt="reporter headshot" />
                                                                </td>
                                                                <td align="left" valign="top" class="small collapse">
                                                                    <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                                                                        <tr>
                                                                            <td align="left" valign="top" class="h3 pb8">
                                                                                Albus Dumbledore, O.M.
                                                                            </td>
                                                                            <td align="right" valign="middle" width="48">
                                                                                <a href="#" target="_blank"><img src="https://media.mcclatchy.com/email-assets/global/icons/envelope-alt-dark-unicon.png" width="24" alt="email"></a>
                                                                            </td>
                                                                            <td align="right" valign="middle" width="48">
                                                                                <a href="#" target="_blank"><img src="https://media.mcclatchy.com/email-assets/global/icons/twitter-dark.png" width="24" alt="twitter"></a>
                                                                            </td>
                                                                        </tr>
                                                                    </table>
                                                                    Professor Albus Percival Wulfric Brian Dumbledore, O.M. (First Class) was the Headmaster of Hogwarts School of Witchcraft and Wizardry. He was considered to have been the greatest wizard of modern times, perhaps of all time.
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                        <tr>
                            <td align="center" valign="top" width="100%" class="bg-blue">
                                <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="600" class="collapse">
                                    <tr>
                                        <td align="center" valign="top" width="100%" class="card">
                                            <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                                                 <tr>
                                                    <td align="center" valign="top" width="100%" class="pb24">
                                                        <img src="https://media.mcclatchy.com/email-assets/global/icons/paper-plane-white.png" width="40" alt="paper plane icon" />
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td align="center" valign="top" width="100%" class="h2 white pb8">
                                                        Sign up for newsletters
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td align="center" valign="top" width="100%" class="p white pb24">
                                                        Email newsletters are an easy way to keep up with breaking news and the latest on your favorite topics.
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td align="center" valign="top" width="100%">
                                                        <table border="0" cellpadding="0" cellspacing="0" role="presentation">
                                                            <tr>
                                                                <td align="center" valign="top" class="button bg-white">
                                                                    <a href="https://<%= recipient.siteBrand.publicationUrl %>newsletters" target="_blank" class="button-link border-white blue">Sign Up Now</a>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                        <!-- FOOTER BLOCK // -->
                        <tr>
                            <td align="center" valign="top" width="100%">
                                <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="600" class="collapse">
                                    <tr>
                                        <td align="center" valign="top" width="100%" id="footer">
                                        <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                                                <tr>
                                                        <td align="left" valign="top" width="100%" style="padding:24px 24px 8px;">
                                                                <table border="0" cellpadding="0" cellspacing="0" role="presentation">
                                                                        <tr>
                                                                                <td align="center" valign="middle" style="padding-right:5px;">
                                                                                        <a href="#"><img src="http://media.mcclatchy.com/email-assets/global/icons/facebook-gray.png" alt="Facebook icon" width="10" style="display: block; border: 0px none; outline: none; text-decoration: none;" /></a>
                                                                                </td>
                                                                                <td align="center" valign="middle" style="padding-left:5px;">
                                                                                        <a href="#"><img src="http://media.mcclatchy.com/email-assets/global/icons/twitter-gray.png" alt="Twitter icon" width="21" style="display: block; border: 0px none; outline: none; text-decoration: none;" /></a>
                                                                                </td>
                                                                        </tr>
                                                                </table>
                                                        </td>
                                                </tr>
                                                <tr>
                                                        <td align="left" valign="top" width="100%" style="padding: 8px 24px;font-family: 'Noto Sans', Tahoma, Arial, sans-serif;font-size: 11px;color: #525252;line-height: 16px;">
                                                            Copyright &copy; 2020 Official Property Name.
                                                            All Rights Reserved.
                                                        </td>
                                                </tr>
                                                <tr>
                                                        <td align="left" valign="top" width="100%" style="padding: 8px 24px;font-family: 'Noto Sans', Tahoma, Arial, sans-serif;font-size: 11px;color: #525252;line-height: 16px;">
                                                                Official Property Name<br>
                                                                123 Street Name<br>
                                                                City, ST 000000
                                                        </td>
                                                </tr>
                                                <tr>
                                                        <td align="left" valign="top" width="100%" style="padding: 8px 24px;font-family: 'Noto Sans', Tahoma, Arial, sans-serif;font-size: 11px;color: #525252;line-height: 16px;">
                                                                We respect your right to privacy and protect your private information at all times.
                                                        </td>
                                                </tr>
                                            <tr>
                                                <td align="left" valign="top" width="100%" style="padding: 8px 24px 24px;font-family: 'Noto Sans', Tahoma, Arial, sans-serif;font-size: 11px;color: #525252;line-height: 16px;">
                                                    <a href="#" style="font-size: 11px;color: #525252;">About Us</a>&nbsp;|&nbsp;
                                                    <a href="#" style="font-size: 11px;color: #525252;">Terms of Use</a>&nbsp;|&nbsp;
                                                    <a href="#" style="font-size: 11px;color: #525252;">Manage Newsletter Subscriptions</a>&nbsp;|&nbsp;
                                                    <a href="#" style="font-size: 11px;color: #525252;" target="_blank">View as webpage</a>&nbsp;|&nbsp;
                                                    <a href="#" style="font-size: 11px;color: #525252;">Unsubscribe</a>
                                                </td>
                                            </tr>
                                        </table>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                        <!-- // FOOTER BLOCK -->
                    </table>
                    <!-- // MAIN TABLE -->
                </td>
            </tr>
        </table>
        <!-- // BODY TABLE -->
    </center>
</body>
			`;
			return t;   
		}
		constructor() {
			super();
		}
		connectedCallback() {
			let clone = this.template.content.cloneNode(true);
			this.attachShadow({ mode: "open" });
			this.shadowRoot.appendChild(clone);
		}
	} // end Class
	customElements.define("full-width-framework", FullWidthFramework);
	</script>
