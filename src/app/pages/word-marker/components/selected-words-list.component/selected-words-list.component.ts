import { Component, Input } from '@angular/core';

import { Article } from './../../../../shared/structures/article.structure';
import { SelectedWordsListItemComponent } from './item.component';

@Component({
	selector: 'selected-words-list',
	template: `
		<ul>
			<li *ngFor="let wordId of selectedWordsIds">
				<selected-words-list-item
				 [dictionaryKey]="article.wordDefinitions[wordId]"
				 (delete)="article.selectedWordsIds.remove(wordId)"
				></selected-words-list-item>
			</li>
		</ul>
	`,
	styleUrls: ['selected-words-list.component.style.sass'],
	directives: [SelectedWordsListItemComponent],
})
export class SelectedWordsListComponent {
	@Input() article: Article;

	get selectedWordsIds() {
		return this.article.selectedWordsIds.toArray().map(str=>parseInt(str));
	}
}
