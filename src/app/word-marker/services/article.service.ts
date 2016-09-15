import { Injectable } from '@angular/core';
import { Set } from './../../shared/utils/set.util.ts';

@Injectable()
export class ArticleService {
	private _article: Article;

	setArticle(article: Article) {
		this._article = article;
	}

	getSelectedWordsIds() {
		console.log('!getSelectedWords');
		return this._article.selectedWordsIds.toArray().map(parseInt);
	}

	markWord(id: number) {
		this._article.selectedWordsIds.add(id);
	}
	unmarkWord(id: number) {
		this._article.selectedWordsIds.remove(id);
	}
	toggleWordMark(id: number) {
		this._article.selectedWordsIds.toggle(id);
	}

	getWord(id: number) {
		return this._article.words[id];
	}
	
}

export class ArticleWordFactory {
	constructor(private _articleService: ArticleService) {}

	create(id: number) {
		return {
			getWord: this._articleService.getWord.bind(null, id),
			mark: this._articleService.markWord.bind(null, id),
			unmark: this._articleService.unmarkWord.bind(null, id),
			toggleMark: this._articleService.toggleWordMark.bind(null, id)
		}
	}
}

class Article {
	words: Array<string>
	selectedWordsIds: Set<number>
}
