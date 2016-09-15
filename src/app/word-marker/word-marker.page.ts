import { Component, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';

import { Article } from './../shared/structures/article.structure';
import { ArticlePanelComponent } from './components/article-panel.component';
import { ArticleService } from './../shared/services/article.service';

@Component({
	template: `
		<div class="container">
	        <div class="col-md-2">
	        </div>
	        <div class="col-md-8" style="overflow: hidden;">
	            <div id="main">
					<article-panel [article]="article"></article-panel>
	            </div>
	        </div>
	        <div class="col-md-2">
	        </div>
	    </div>
	`,
	directives: [ArticlePanelComponent]
})
export class WordMarkerPage {
	article: Article;

	constructor(router: Router, articleService: ArticleService, cdr: ChangeDetectorRef) {
		console.log('!WordMarkerPage.constructor');
		if (!(this.article = articleService.currentArticle)) {
			cdr.detach();
			router.navigate(['/']);
		}
	}

}
