import { Component, Input, ChangeDetectorRef, Output, EventEmitter, ViewChild } from '@angular/core';

import { DictionaryKey } from './../../../../shared/structures/dictionary-key.structure';
import { WordListItemComponent } from './item.component';

@Component({
	selector: 'word-list',
	template: `
		<ul>
			<li *ngFor="let word of words">
				<word-list-item
				 [dictionaryKey]="word.dictionaryKey"
				 (delete)="onWordDelete.emit({id: word.wordId})"
				 (click)= "onWordClick.emit({id: word.wordId})"
				></word-list-item>
			</li>
		</ul>
	`,
	styleUrls: ['word-list.component.style.sass'],
	directives: [WordListItemComponent],
})
export class WordListComponent {
	@Input() words: Array<{wordId: number, dictionaryKey: DictionaryKey}>;

	@Output('wordDelete') onWordDelete: EventEmitter<{id: number}> = new EventEmitter<any>();
	@Output('wordClick')  onWordClick:  EventEmitter<{id: number}> = new EventEmitter<any>();

	constructor(private cd: ChangeDetectorRef) {}

}
