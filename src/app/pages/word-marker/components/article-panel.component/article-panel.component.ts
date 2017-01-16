import { Component, Input, Output, EventEmitter, ViewChild } from '@angular/core';

import { Article } from './../../../../shared/structures/article.structure';
import { DictionaryKey } from './../../../../shared/structures/dictionary-key.structure';
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
	@Output() wordMark:   EventEmitter<{id: number, dictionaryKey: DictionaryKey}> = new EventEmitter<any>();
	@Output() wordUnmark: EventEmitter<{id: number}> = new EventEmitter<any>();

	@ViewChild('articleContainer') articleContainer;
	
	constructor(private mwf: MarkableWordFactory) {}

	displayArticle(article: Article) {
		let htmlElement       = document.createElement('div');
		htmlElement.innerHTML = article.template;
		let wordContainers    = htmlElement.querySelectorAll('[data-word]');

		let markableWords = {}
		for (let wordContainer of (<any>wordContainers)) {
			let dictionaryKey: DictionaryKey =
				{query: wordContainer.innerHTML, wordNumber: 0, usageNumber: 0, meaningNumber: 0}; // TODO ta {}
			let id           = wordContainer.dataset['wordId'];
			let markableWord = this.mwf.create(wordContainer);
			markableWord.instance.onMark.subscribe(marked => {
				if (marked) this.wordMark.emit({id, dictionaryKey});
				else        this.wordUnmark.emit({id});
			});
			markableWords[id] = markableWord;
		}

		article.definedWords.onChange.subscribe(e => {
			markableWords[e.key].instance.setMarked(e.exists);
		});
		this.articleContainer.nativeElement.appendChild(htmlElement);
	}
}
