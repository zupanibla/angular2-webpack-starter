import { Component, ChangeDetectorRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { Article } from './../../shared/structures/article.structure';
import { ArticlePanelComponent } from './components/article-panel.component';
import { ArticleService } from './../../shared/services/article.service';
import { WordListComponent } from './components/word-list.component';
import { SettingsModalComponent } from './components/settings-modal.component';
import { PerspectiveService, ViewType } from './../../shared/services/perspective.service';
import { DefinitionSelectionModalComponent } from './components/definition-selection-modal.component';

@Component({
	templateUrl: './word-marker.page.template.html',
	directives: [ArticlePanelComponent, WordListComponent, SettingsModalComponent, DefinitionSelectionModalComponent],
	styleUrls: ['./word-marker.page.style.sass']
})
export class WordMarkerPage {
	ViewType = ViewType;
	article: Article;

	constructor(router: Router, public articleService: ArticleService,
	 cdr: ChangeDetectorRef, private perspective: PerspectiveService) {
		if (!(this.article = articleService.currentArticle)) {
			cdr.detach();
			router.navigate(['/']);
		}
	}

	@ViewChild('definitionSelectionModal') definitionSelectionModal;
	private openDefinitionSelectionModal(wordId: number) {
		this.definitionSelectionModal.open(this.article.wordDefinitions[wordId]).subscribe(dictionaryKey => {
			this.article.wordDefinitions[wordId] = dictionaryKey;
		});
	}
	
	private get markedWords() {
		return this.article.markedWordsIds.toArray().map(str=>parseInt(str)).map(wordId => {
			return { wordId, dictionaryKey: this.article.wordDefinitions[wordId]}
		});
	}

	private printArticle() {
		window.print();
	}
}
