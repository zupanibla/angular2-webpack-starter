import { Component, Input, ChangeDetectorRef, Output, EventEmitter, ViewChild } from '@angular/core';

import { DictionaryKey } from './../../../../shared/structures/dictionary-key.structure';
import { Article } from './../../../../shared/structures/article.structure';
import { DefinitionSelectionModalComponent }
	from './../../components/definition-selection-modal.component';
import { WordListItemComponent } from './item.component';

@Component({
	selector: 'word-list',
	template: `
		<ul>
			<li *ngFor="let word of words">
				<word-list-item
				 [dictionaryKey]="word.dictionaryKey"
				 (delete)="handleWordDelete(word.wordId)"
				 (click)="handleItemClick(word)"
				></word-list-item>
			</li>
		</ul>
		<definition-selection-modal (select)="handleSelection($event)" #ds></definition-selection-modal>
	`,
	styleUrls: ['word-list.component.style.sass'],
	directives: [WordListItemComponent, DefinitionSelectionModalComponent],
})
export class WordListComponent {
	@Input() words: Array<{wordId: number, dictionaryKey: DictionaryKey}>;

	@Output('wordDefinitionSelect') onDefinitionSelect: EventEmitter<any> = new EventEmitter<any>(); // TODO ni any //TODO bedn ime
	@Output('wordDelete') onWordDelete: EventEmitter<any> = new EventEmitter<any>();


	@ViewChild('ds') definitionSelectionModal; // TODO prestav v service

	constructor(private cd: ChangeDetectorRef) {}

	private handleWordDelete(e: any) {
		this.onWordDelete.emit(e);
	}

	private handleItemClick(word: any) {
		this.definitionSelectionModal.open(word.dictionaryKey).subscribe(e=>{
				this.onDefinitionSelect.emit({dictionaryKey: e, wordId: word.wordId})
			}
		);
	}
}
