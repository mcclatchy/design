class EdsButtons extends HTMLElement {
	get template() {
		let t = document.createElement("template");
		t.innerHTML = `
    <link rel="stylesheet" href="/design/css/email/eds.css">

    <style>
      :host {
        display: block;
      }

      table {
        margin: 0 auto;
      }
    </style>

    <table role="presentation" border="0" cellpadding="0" cellspacing="0">
      <tr>
        <td align="center" valign="top" class="button">
          <a href="#" class="button-link">Button Text</a>
        </td>
        <td class="ps8"></td>
        <td align="center" valign="top" class="button bg-blue">
          <a href="#" class="button-link border-blue white">Button Text</a>
        </td>
        <td class="ps8"></td>
        <td align="center" valign="top" class="button bg-white">
          <a href="#" class="button-link border-white gray">Button Text</a>
        </td>
        <td class="ps8"></td>
        <td align="center" valign="top" class="button bg-white">
          <a href="#" class="button-link border-white blue">Button Text</a>
        </td>
      </tr>
    </table>
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
customElements.define("eds-buttons", EdsButtons);

