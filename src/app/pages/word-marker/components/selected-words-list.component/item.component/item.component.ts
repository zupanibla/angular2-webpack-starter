import { Component, Input, Output, EventEmitter } from '@angular/core';

import { DictionaryKey } from './../../../../../shared/structures/dictionary-key.structure';
import { DictionaryService } from './../../../services/dictionary.service';
import { WordCardComponent } from './../../../components/word-card.component';

@Component({
	selector: 'selected-words-list-item', // TODO Error case
	template: `
	<div class="wrapper">
		<div class="remove" (click)="delete.emit(true)"></div>
		<div *ngIf="!_data">Nalagam besedo...</div>
		<div><word-card *ngIf="_data" [data]="_data"></word-card></div>
	</div>
	`,
	styleUrls: ['item.component.style.sass'],
	directives: [WordCardComponent]
})
export class SelectedWordsListItemComponent {
	@Input() dictionaryKey: DictionaryKey;
	@Output() delete: EventEmitter<boolean> = new EventEmitter<boolean>();
	private _data = null;

	constructor(private _dictionary: DictionaryService) {}

	ngOnInit() {
		this._dictionary.getDefinitionCard(this.dictionaryKey).subscribe(data => { this._data = data });
	}
}
