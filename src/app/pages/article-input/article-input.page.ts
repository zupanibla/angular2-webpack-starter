import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { ArticleService } from './../../shared/services/article.service';
import { ArticleFactory } from './factories/article.factory';
import { PerspectiveService, ViewType } from './../../shared/services/perspective.service';

import { RtfInputComponent, RtfData } from './components/rtf-input.component';

@Component({ // TODO lepsi template, prestav template
	templateUrl: './article-input.page.template.html',
	styleUrls: ['article-input.page.style.sass'],
	directives: [RtfInputComponent],
	providers: [ArticleFactory]
})
export class ArticleInputPage {
	private ViewType = ViewType;

	constructor(private router: Router, private articleFactory: ArticleFactory,
	 private articleService: ArticleService, private perspective: PerspectiveService) {}

	private handleRtfInput(rtf: RtfData) {
		this.articleService.currentArticle = this.articleFactory.create(rtf.html);
		this.router.navigate(['/word-marker']);
	}
}
