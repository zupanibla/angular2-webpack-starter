import { Component, Input } from '@angular/core';

import { Article } from './../../../../shared/structures/article.structure';
import { MarkedWordsListItemComponent } from './item.component';

@Component({
	selector: 'marked-words-list',
	template: `
		<ul>
			<li *ngFor="let wordId of markedWordsIds">
				<marked-words-list-item
				 [dictionaryKey]="article.wordDefinitions[wordId]"
				 (delete)="article.markedWordsIds.remove(wordId)"
				></marked-words-list-item>
			</li>
		</ul>
	`,
	styleUrls: ['marked-words-list.component.style.sass'],
	directives: [MarkedWordsListItemComponent],
})
export class MarkedWordsListComponent {
	@Input() article: Article;

	get markedWordsIds() {
		return this.article.markedWordsIds.toArray().map(str=>parseInt(str));
	}
}
