import CustomElement from '@enhance/custom-element'

export default class ListItem extends CustomElement {
	render ({ html, state }) {
		const { attrs, instanceID } = state
		const { id, label } = attrs
		return html`
			<li item-id="${id}">
				${label}
			</li>
		`
	}
}

customElements.define('list-item', ListItem)
