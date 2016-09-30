import { Component, ViewChild } from '@angular/core';

import { DictionaryKey } from './../../../../shared/structures/dictionary-key.structure';

@Component({
	selector: 'definition-selection-modal',
	template: `
	<modal #modal>
	    <modal-header>
	        <h4 class="modal-title">Drugi pomeni besede <b>{{dictionaryKey?.query}}</b></h4>
	    </modal-header>
	    <modal-body>
	        Hello World!
	    </modal-body>
	    <modal-footer>
	        <button type="button" class="btn btn-default" data-dismiss="modal" (click)="modal.dismiss()">Zapri</button>
	    </modal-footer>
	</modal>
	`,
	styleUrls: ['definition-selection-modal.component.style.sass']
})
export class DefinitionSelectionModalComponent {
	private dictionaryKey;
	@ViewChild('modal') modal;

	open(dictionaryKey: DictionaryKey) {
		this.dictionaryKey = dictionaryKey;
		this.modal.open();
	}
}
