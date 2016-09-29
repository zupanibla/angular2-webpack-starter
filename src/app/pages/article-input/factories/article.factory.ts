import { Injectable } from '@angular/core';

import { Article } from './../../../shared/structures/article.structure';
import { DOMNodeArticlifier } from './../tools/dom-node-articlifier.tool';
import { Set } from './../../../shared/utils/set.util';
import { HashMap } from './../../../shared/utils/hash-map.util';

@Injectable()
export class ArticleFactory {

	constructor(private _dna: DOMNodeArticlifier) {}

	create(html: string): Article {
		let htmlElement = document.createElement('div');
		htmlElement.innerHTML = html;
		let articlified = this._dna.articlify(htmlElement);
		return {
			template: articlified.htmlElement.innerHTML,
			markedWordsIds: new Set(),
			wordDefinitions: articlified.wordContainers.map(container => ({
				query: container.innerHTML,
				wordNumber: 0,
				definitionNumber: 0
			}))
		};
	}

}