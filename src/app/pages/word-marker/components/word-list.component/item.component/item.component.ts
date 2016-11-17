import { Component, Input, Output, EventEmitter } from '@angular/core';

import { DictionaryKey } from './../../../../../shared/structures/dictionary-key.structure';
import { DictionaryService, DictionaryEntry, DictionaryEntryState } from './../../../services/dictionary.service';
import { WordCardComponent } from './../../../components/word-card.component';

@Component({
	selector: 'word-list-item', // TODO Error case
	template: `
	<div class="wrapper">
		<div class="remove-wrapper"><span class="remove" (click)="delete.emit(true)"></span></div>
		
		<div *ngIf="dictionaryEntry.state === State.LOADING">Loading...</div>
		<div *ngIf="dictionaryEntry.state === State.READY">
			<word-card [data]="definitionCardFromEntry(dictionaryEntry, dictionaryKey)"></word-card>
		</div>
		<div *ngIf="dictionaryEntry.state === State.FAILURE">Failed to load word <b>{{dictionaryKey.query}}</b> 
			<a href="javascript:void(0)" (click)="reload()">Try Reloading?</a>
		</div>
	</div>
	`,
	styleUrls: ['item.component.style.sass'],
	directives: [WordCardComponent]
})
export class WordListItemComponent {
	State = DictionaryEntryState;

	@Input() dictionaryKey: DictionaryKey;
	@Output() delete: EventEmitter<boolean> = new EventEmitter<boolean>();
	private dictionaryEntry: DictionaryEntry = null;

	constructor(private dictionary: DictionaryService) {}

	ngOnInit() {
		console.log('A');
		this.dictionary.getEntry(this.dictionaryKey.query).subscribe(data => { this.dictionaryEntry = data; });
		console.log('B');
	}

	private definitionCardFromEntry(entry: DictionaryEntry, key: DictionaryKey) { // TODO tole je shit
			let word = entry.data[key.wordNumber];
			console.log(word);
			return {
				text: word.text,
				pronunciation: word.pronunciation,
				usageType: word.usages[key.usageNumber].type,
				meaning: word.usages[key.usageNumber].meanings[key.meaningNumber]
			}
	}
}
