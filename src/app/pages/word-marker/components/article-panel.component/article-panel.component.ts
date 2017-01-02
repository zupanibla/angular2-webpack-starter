import { Component, Input, Output, EventEmitter, ViewChild } from '@angular/core';

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
	@Output() wordToggle: EventEmitter<{id: number, marked: boolean}> = new EventEmitter<any>();

	@ViewChild('articleContainer') articleContainer;
	
	constructor(private mwf: MarkableWordFactory) {}

	displayArticle(article: Article) {
		let htmlElement       = document.createElement('div');
		htmlElement.innerHTML = article.template;
		let wordContainers    = htmlElement.querySelectorAll('[data-word]');

		let markableWords = {};
		for (let wordContainer of (<any>wordContainers)) {
			let id           = wordContainer.dataset['wordId'];
			let markableWord = this.mwf.create(wordContainer);
			markableWord.instance.onMark.subscribe(marked => {
				if (marked) article.markedWordsIds.add(id);
				else        article.markedWordsIds.remove(id);
				this.wordToggle.emit({id, marked});
			});
			markableWords[id] = markableWord;
		}

		article.markedWordsIds.onChange.subscribe(val => {
			markableWords[val.element].instance.setMarked(val.exists);
		});
		this.articleContainer.nativeElement.appendChild(htmlElement);
	}
}
