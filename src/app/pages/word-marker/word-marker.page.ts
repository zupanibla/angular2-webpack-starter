import { Component, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';

import { Article } from './../../shared/structures/article.structure';
import { ArticlePanelComponent } from './components/article-panel.component';
import { ArticleService } from './../../shared/services/article.service';
import { WordListComponent } from './components/word-list.component';
import { SettingsModalComponent } from './components/settings-modal.component';
import { PerspectiveService, ViewType } from './../../shared/services/perspective.service';

@Component({
	template: `
		<div class="container">
	        <div class="col-md-2">
	        	<div class="menu-wrapper" [class.affix]="perspective.viewType === ViewType.DESKTOP">
			        <div class="menu">
			        	<a href="javascript:void(0)" (click)="settingsModal.open()" class="menu-item">
			        		<i class="fa fa-cog fa-3x"></i>
			        	</a>
			        	<a href="javascript:void(0)" (click)="printArticle()" class="menu-item">
			        		<i class="fa fa-print fa-3x"></i>
			        	</a>
			        	<settings-modal #settingsModal></settings-modal>
			        </div>
		        </div>
	        </div>
	        <div class="col-md-8">
	            <div id="main">
					<article-panel [article]="article"></article-panel>
	            </div>
	        </div>
	        <div class="col-md-2 word-list-col">
	        	<div class="word-list-wrapper"
	        	 [class.affix]="perspective.viewType === ViewType.DESKTOP"
	        	>
					<word-list
					 [words]="markedWords"
					 (wordDefinitionSelect)="handleDefinitionSelect($event)"
					 (wordDelete)="handleWordDelete($event)"
					></word-list>
				</div>
	        </div>
	    </div>
	`,
	directives: [ArticlePanelComponent, WordListComponent, SettingsModalComponent],
	styleUrls: ['./word-marker.page.style.sass']
})
export class WordMarkerPage {
	ViewType = ViewType;
	article: Article;

	constructor(router: Router, public articleService: ArticleService,
	 cdr: ChangeDetectorRef, private perspective: PerspectiveService) {
		console.log('!WordMarkerPage.constructor');
		if (!(this.article = articleService.currentArticle)) {
			cdr.detach();
			router.navigate(['/']);
		}
	}

	// TODO: ARTICLE PANEL ?

	// MARKED WORDS LIST
	private get markedWords() {
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

	private printArticle(e) {
		window.print();
	}
}
