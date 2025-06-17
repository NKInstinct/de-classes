/**
 * Dying Earth Witch character sheet overrides
 */

import DCCActorSheet from '/systems/dcc/module/actor-sheet.js'

/**
 * Extend the zero-level/NPC sheet for a Witch
 * @extends {DCCActorSheet}
 */
class ActorSheetWitch extends DCCActorSheet {
	static height = 635

	/** @override */
	/** getData () {
	 const data = super.getData() **/
	async getData (options) {
		const data = await super.getData(options)
		this.options.template = 'modules/de-classes/templates/actor-sheet-witch.html'
		this.options.classes = ['dcc', 'sheet', 'actor', 'pc']
		if (data.system.details.sheetClass !== 'Witch') {
			this.actor.update({
				'system.class.className': game.i18n.localize('DE.Witch')
			})
		}

		// Add in witch-specific data if missing
    if (!data.system.class.pact) {
			this.actor.update({
				'system.class.pact': {
					label: 'DE.Pact',
					value: ' '
				}
			})
		}
		if (!data.system.class.pactweapon) {
			this.actor.update({
				'system.class.pactweapon': {
					label: 'DE.PactWeapon',
					value: ' '
				}
			})
		}
		if (!data.system.class.sympatheticspells) {
			this.actor.update({
				'system.class.sympatheticspells': {
					label: 'DE.SympatheticSpells',
					value: ' '
				}
			})
		}
		if (!data.system.class.antitheticspells) {
			this.actor.update({
				'system.class.antitheticspells': {
					label: 'DE.AntitheticSpells',
					value: ' '
				}
			})
		}
		if (!data.system.class.heldspellburn) {
			this.actor.update({
				'system.class.heldspellburn': {
					label: 'DE.HeldSpellburn',
					value: 0
				}
			})
		}
		if (!data.system.class.demonictaint) {
			this.actor.update({
				'system.class.demonictaint': {
					label: 'DE.DemonicTaint',
					value: 0
				}
			})
		}

		return data
	}
}

export {
	ActorSheetWitch
}
