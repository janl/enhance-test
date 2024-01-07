/* globals customElements */
import CustomElement from '@enhance/custom-element'
import MorphdomMixin from '@enhance/morphdom-mixin'

export default class ListItem extends MorphdomMixin(CustomElement) {

  static get observedAttributes() {
    return [ 'label' ]
  }

  render ({ html, state }) {
    const { attrs = {}, instanceID = '' } = state
    const { id, label } = attrs
    return html`
			<li item-id="${id}">
				${label}
			</li>
		`
  }
}

customElements.define('list-item', ListItem)
