import { Component, Input } from '@angular/core';

import { Article } from './../../../../shared/structures/article.structure';
import { DictionaryService } from './../../services/dictionary.service';
import { SelectedWordsListItemComponent } from './item.component';

@Component({ // TypeError: Cannot read property 'query' of undefined
	selector: 'selected-words-list',
	template: `
		<h1>SelectedWordsListComponent</h1>
		<ul>
			<li *ngFor="let key of selectedWordsDictionaryKeys">
				<selected-words-list-item [dictionaryKey]="key"></selected-words-list-item>
			</li>
		</ul>
	`,
	directives: [SelectedWordsListItemComponent],
	providers: [DictionaryService]
})
export class SelectedWordsListComponent {
	@Input() article: Article;

	get selectedWordsDictionaryKeys() {
		if (!this.article) return [];
		return this.article.selectedWordsIds.toArray().map(str=>parseInt(str)).map(wordId => {
			return this.article.wordDefinitions[wordId];
		});

	}
}
