import { Component, Input, Output, EventEmitter } from '@angular/core';

import { DictionaryKey } from './../../../../shared/structures/dictionary-key.structure';
import { DictionaryService } from './../../services/dictionary.service';
import { WordCardComponent } from './../../components/word-card.component';

@Component({
	selector: 'selected-words-list-item',
	template: `
		<word-card [data]="dictionary.getDefinitionCard(dictionaryKey)"></word-card>
	`,
	directives: [WordCardComponent]
})
export class SelectedWordsListItemComponent {
	@Input() dictionaryKey: DictionaryKey;
	@Output() delete: EventEmitter<boolean> = new EventEmitter<boolean>();

	constructor(public dictionary: DictionaryService) {}
}
