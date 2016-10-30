import { Component, ViewChild, Output, EventEmitter } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

import { DictionaryKey } from './../../../../shared/structures/dictionary-key.structure';
import { DictionaryService } from './../../services/dictionary.service';
import { SettingsService } from './../../services/settings.service';
import { Word } from './../../structures/word.structure';

@Component({
	selector: 'definition-selection-modal',
	templateUrl: 'definition-selection-modal.component.template.html',
	styleUrls: ['definition-selection-modal.component.style.sass']
})
export class DefinitionSelectionModalComponent {
	private dictionaryKey: DictionaryKey;
	private onSelect: BehaviorSubject<DictionaryKey>;
	private words: Array<Word> = [];

	@ViewChild('modal') modal;

	constructor(private dictionary: DictionaryService, private settings: SettingsService) {}

	open(dictionaryKey: DictionaryKey): Observable<DictionaryKey> {
		this.dictionaryKey = dictionaryKey;
		this.dictionary.getWords(dictionaryKey.query).subscribe(words => {
			this.words = words;
		});
		this.modal.open();
		this.onSelect = new BehaviorSubject<DictionaryKey>(this.dictionaryKey);
		return this.onSelect.asObservable();
	}

	select(wordNumber: number, usageNumber: number, meaningNumber: number) {
		this.dictionaryKey = {query: this.dictionaryKey.query, wordNumber, usageNumber, meaningNumber}
		this.onSelect.next(this.dictionaryKey);
	}

	isSelected(wordNumber: number, usageNumber: number, meaningNumber: number) {
		return this.dictionaryKey.wordNumber    == wordNumber &&
		       this.dictionaryKey.usageNumber   == usageNumber &&
		       this.dictionaryKey.meaningNumber == meaningNumber;
	}
}
