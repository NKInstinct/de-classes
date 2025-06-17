/* global Actors */

import * as WitchSheets from './actor-sheets-witch.js';

/* -------------------------- */
/* Foundry VTT Initialization */
/* -------------------------- */

Hooks.once('init', async function () {
	console.log(`Dying Earth | Initializing Dying Earth Classes`)

	// Register sheet application classes
	Actors.registerSheet('de-witch', WitchSheets.ActorSheetWitch, {
		types: ['Player'],
		label: 'DE.ActorSheetWitch'
	})

	// Register shared templates for Dying Earth characters
	// const templatePaths = [
	// 	'modules/de-classes/templates/actor-partial-curses.html'
	// ]
	// loadTemplates(templatePaths)
})
