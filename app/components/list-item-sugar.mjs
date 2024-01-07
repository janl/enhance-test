import enhance from '@enhance/element'

const ListItem = {
  attrs: [ 'label' ],
  render({ html, state }) {
    const { attrs = {}, instanceID = '' } = state
    const { id, label } = attrs
    return html`
			<li item-id="${id}">
				${label}
			</li>
		`
  }
}

enhance("list-item", ListItem);
export default ListItem
