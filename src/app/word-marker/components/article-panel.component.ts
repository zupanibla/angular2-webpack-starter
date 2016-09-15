import { Component, Input, ViewChild } from '@angular/core';

import { Article } from './../../shared/structures/article.structure';
import { ArticleService } from './../services/article.service';
import { DOMNodeArticlifier } from './../../article-input/tools/dom-node-articlifier.tool'; // TODO
import { MarkableWordFactory } from './../factories/markable-word.factory';

@Component({
	selector: 'article-panel',
	template: `
	<div #articleContainer></div>
	`,
	styles: [`
	div {
		-webkit-touch-callout: none; /* iOS Safari */
		-webkit-user-select: none;   /* Chrome/Safari/Opera */
		-khtml-user-select: none;    /* Konqueror */
		-moz-user-select: none;      /* Firefox */
		-ms-user-select: none;       /* Internet Explorer/Edge */
		user-select: none;           /* Non-prefixed version, currently
		                                not supported by any browser */
	}
	`],
	providers: [MarkableWordFactory, ArticleService]
})
export class ArticlePanelComponent {
	@Input() set article(val) { this.displayArticle(val); }
	@ViewChild('articleContainer') _articleContainer;
	
	constructor(private _mwf: MarkableWordFactory) {}

	displayArticle(article: Article) {
		let htmlElement = document.createElement('div');
		htmlElement.innerHTML = article.template;
		let wordContainers = htmlElement.querySelectorAll('[data-word]');
		
		for (let wordContainer of (<any>wordContainers)) {
			this._mwf.create(wordContainer);
		}

		this._articleContainer.nativeElement.appendChild(htmlElement);
	}
}
