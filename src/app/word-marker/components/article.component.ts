import { Component, Input, ViewChild } from '@angular/core';
import { DOMNodeArticlifier } from './../../article-input/tools/dom-node-articlifier.tool'; // TODO
import { MarkableWordFactory } from './../factories/markable-word.factory';

@Component({
	selector: 'article',
	template: `
	<h3>ArticleComponent</h3>
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
	providers: [MarkableWordFactory]
})
export class ArticleComponent {
	@Input() set html(val) { this.setHtml(val); }
	@ViewChild('articleContainer') _articleContainer;
	
	constructor(private _mwf: MarkableWordFactory) {}

	private setHtml(html: string) {
		let articleNode = document.createElement('div');
		articleNode.innerHTML = html;
		let article = new DOMNodeArticlifier().articlify(articleNode);
		for (let wordContainer of article.wordContainers) {
			this._mwf.create(wordContainer);
		}
		this._articleContainer.nativeElement.appendChild(article.domNode);
	}
}
