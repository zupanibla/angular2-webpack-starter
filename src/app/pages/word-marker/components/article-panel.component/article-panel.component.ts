import { Component, Input, ViewChild } from '@angular/core';

import { Article } from './../../../../shared/structures/article.structure';
import { MarkableWordFactory } from './../../factories/markable-word.factory';

@Component({
	selector: 'article-panel',
	template: `
	<div #articleContainer></div>
	`,
	styleUrls: ['article-panel.component.style.sass'],
	providers: [MarkableWordFactory]
})
export class ArticlePanelComponent {
	@Input() set article(val) { this.displayArticle(val); }
	@ViewChild('articleContainer') _articleContainer;
	
	constructor(private _mwf: MarkableWordFactory) {}

	displayArticle(article: Article) {
		let htmlElement       = document.createElement('div');
		htmlElement.innerHTML = article.template;
		let wordContainers    = htmlElement.querySelectorAll('[data-word]');

		let markableWords = {};
		for (let wordContainer of (<any>wordContainers)) {
			let wordId       = wordContainer.dataset['wordId'];
			let markableWord = this._mwf.create(wordContainer);
			markableWord.instance.onMark.subscribe(marked => {
				if (marked) article.selectedWordsIds.add(wordId);
				else        article.selectedWordsIds.remove(wordId);
			});
			markableWords[wordId] = markableWord;
		}

		article.selectedWordsIds.onChange.subscribe(val => {
			markableWords[val.element].instance.setMarked(val.exists);
		});
		this._articleContainer.nativeElement.appendChild(htmlElement);
	}
}
