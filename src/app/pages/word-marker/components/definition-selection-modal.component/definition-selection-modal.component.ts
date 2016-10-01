import { Component, ViewChild } from '@angular/core';

import { DictionaryKey } from './../../../../shared/structures/dictionary-key.structure';
import { DictionaryService } from './../../services/dictionary.service';
import { WordCardComponent } from './../../components/word-card.component';

@Component({
	selector: 'definition-selection-modal',
	template: `
	<modal #modal>
	    <modal-header>
	        <h4 class="modal-title">Drugi pomeni besede <b>{{dictionaryKey?.query}}</b></h4>
	    </modal-header>
	    <modal-body>
	        <ul>
		        <li *ngFor="let wordCard of wordCards">
					<word-card [data]="wordCard"></word-card>
		        </li>
	        </ul>
	    </modal-body>
	    <modal-footer>
	        <button type="button" class="btn btn-default" data-dismiss="modal" (click)="modal.dismiss()">Zapri</button>
	    </modal-footer>
	</modal>
	`,
	directives: [WordCardComponent],
	styleUrls: ['definition-selection-modal.component.style.sass']
})
export class DefinitionSelectionModalComponent {
	private dictionaryKey;
	private wordCards = [];
	@ViewChild('modal') modal;

	constructor(private dictionary: DictionaryService) {}

	open(dictionaryKey: DictionaryKey) {
		this.dictionaryKey = dictionaryKey;
		this.dictionary.getWords(dictionaryKey.query).subscribe(words => {
			this.wordCards = Array.prototype.concat.apply([],
				words.map(word => {
					return word.definitions.map(definition => {
						return {text:word.text, pronunciation:word.pronunciation, definition};
					});
				})
			);
		});
		this.modal.open();
	}
}
