import { Injectable } from '@angular/core';

import { Article } from './../../../shared/structures/article.structure';
import { DOMNodeArticlifier } from './../tools/dom-node-articlifier.tool';
import { Dict } from './../../../shared/utils/dict.util';

@Injectable()
export class ArticleFactory {

	constructor(private _dna: DOMNodeArticlifier) {}

	create(html: string): Article {
		let htmlElement = document.createElement('div');
		htmlElement.innerHTML = html;
		let articlified = this._dna.articlify(htmlElement);

		// smarter image scaling
		for (let img of (<Array<HTMLImageElement>><any>articlified.htmlElement.getElementsByTagName('img'))) {
			img.style.maxWidth = '100%';
			img.parentElement.style.maxWidth = '100%';
		}

		return {
			template: articlified.htmlElement.innerHTML,
			definedWords: new Dict<any, any>()
		};
	}

}
