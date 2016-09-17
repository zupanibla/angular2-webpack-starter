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
		let template = this._dna.articlify(htmlElement).htmlElement.innerHTML;
		return {template, selectedWordsIds: new Set(), wordDefinitionsById: new HashMap()};
	}

}