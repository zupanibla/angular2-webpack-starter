import { Component, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';

import { Article } from './../../shared/structures/article.structure';
import { ArticlePanelComponent } from './components/article-panel.component';
import { ArticleService } from './../../shared/services/article.service';
import { WordListComponent } from './components/word-list.component';

@Component({
	template: `
		<div class="container">
	        <div class="col-md-2">
	        </div>
	        <div class="col-md-8">
	            <div id="main">
					<article-panel [article]="article"></article-panel>
	            </div>
	        </div>
	        <div class="col-md-2">
				<word-list
				 [words]="markedWords"
				 (wordDefinitionSelect)="handleDefinitionSelect($event)"
				 (wordDelete)="handleWordDelete($event)"
				></word-list>
	        </div>
	    </div>
	`,
	directives: [ArticlePanelComponent, WordListComponent]
})
export class WordMarkerPage {
	article: Article;

	constructor(router: Router, public articleService: ArticleService, cdr: ChangeDetectorRef) {
		console.log('!WordMarkerPage.constructor');
		if (!(this.article = articleService.currentArticle)) {
			cdr.detach();
			router.navigate(['/']);
		}
	}

	// TODO: ARTICLE PANEL ?

	// MARKED WORDS LIST
	get markedWords() {
		return this.article.markedWordsIds.toArray().map(str=>parseInt(str)).map(wordId => {
			return { wordId, dictionaryKey: this.article.wordDefinitions[wordId]}
		});
	}
	private handleDefinitionSelect(e) {
		this.articleService.defineWord(e.wordId, e.dictionaryKey);
	}
	private handleWordDelete(e) {
		this.articleService.unmarkWord(e);
	}
}
