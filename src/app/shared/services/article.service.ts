import { Injectable } from '@angular/core';
import { Article } from './../structures/article.structure';

@Injectable()
export class ArticleService {
	public currentArticle: Article = null;
}
