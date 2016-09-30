import { Component, Input } from '@angular/core';

import { Article } from './../../../../shared/structures/article.structure';
import { DefinitionSelectionModalComponent }
	from './../../components/definition-selection-modal.component';
import { MarkedWordsListItemComponent } from './item.component';

@Component({
	selector: 'marked-words-list',
	template: `
		<ul>
			<li *ngFor="let wordId of markedWordsIds">
				<marked-words-list-item
				 [dictionaryKey]="article.wordDefinitions[wordId]"
				 (delete)="article.markedWordsIds.remove(wordId)"
				 (click)="ds.open(article.wordDefinitions[wordId])"
				></marked-words-list-item>
			</li>
		</ul>
		<definition-selection-modal #ds></definition-selection-modal>
	`,
	styleUrls: ['marked-words-list.component.style.sass'],
	directives: [MarkedWordsListItemComponent, DefinitionSelectionModalComponent],
})
export class MarkedWordsListComponent {
	@Input() article: Article;

	get markedWordsIds() {
		return this.article.markedWordsIds.toArray().map(str=>parseInt(str));
	}
}
