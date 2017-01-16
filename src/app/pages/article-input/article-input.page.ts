import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { ArticleService } from './../../shared/services/article.service';
import { ArticleFactory } from './factories/article.factory';
import { ViewSizeService, Size } from './../../shared/services/view-size.service';

import { RtfInputComponent, RtfData } from './components/rtf-input.component';

@Component({ // TODO lepsi template, prestav template
	templateUrl: './article-input.page.template.html',
	styleUrls: ['article-input.page.style.sass'],
	directives: [RtfInputComponent],
	providers: [ArticleFactory]
})
export class ArticleInputPage {
	private Size = Size;

	constructor(private router: Router, private articleFactory: ArticleFactory,
	 private articleService: ArticleService, private view: ViewSizeService) {}

	private handleRtfInput(rtf: RtfData) {
		this.articleService.currentArticle = this.articleFactory.create(rtf.html);
		this.router.navigate(['/word-marker']);
	}
}
