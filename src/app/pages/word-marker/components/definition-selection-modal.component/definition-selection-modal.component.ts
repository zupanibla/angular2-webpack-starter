import { Component, ViewChild } from '@angular/core';

import { DictionaryKey } from './../../../../shared/structures/dictionary-key.structure';
import { DictionaryService } from './../../services/dictionary.service';
import { Word } from './../../structures/word.structure';

@Component({
	selector: 'definition-selection-modal',
	templateUrl: 'definition-selection-modal.component.template.html',
	styleUrls: ['definition-selection-modal.component.style.sass']
})
export class DefinitionSelectionModalComponent {
	private dictionaryKey: DictionaryKey;
	private words: Array<Word> = [];
	private options: Object = { pronunciationFormat: 'ipa', showExamples: true };

	@ViewChild('modal') modal;

	constructor(private dictionary: DictionaryService) {}

	open(dictionaryKey: DictionaryKey) {
		this.dictionaryKey = dictionaryKey;
		this.dictionary.getWords(dictionaryKey.query).subscribe(words => {
			this.words = words;
		});
		this.modal.open();
	}

	changeMeaning(wordNumber: number, usageNumber: number, meaningNumber: number) {
		this.dictionaryKey.wordNumber    = wordNumber;
		this.dictionaryKey.usageNumber   = usageNumber;
		this.dictionaryKey.meaningNumber = meaningNumber;
	}
}
