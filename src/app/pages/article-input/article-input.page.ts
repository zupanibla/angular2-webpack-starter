import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { ArticleService } from './../../shared/services/article.service';
import { ArticleFactory } from './factories/article.factory';

import { RtfInputComponent, RtfData } from './components/rtf-input.component';

@Component({ // TODO lepsi template, prestav template
	template: `
	    <div class="container">
	        <div class="col-md-2">
	        </div>
	        <div class="col-md-8" style="overflow: hidden;">
	            <div id="main">
	                <div class="page-header">
	                    <h1 class="title">
	                    Članker<br>
	                    <small class="subtitle">Inovativna rešitev za domače naloge pri angleščini</small>
	                    </h1>
	                </div>
	                <rtf-input (submit)="handleRtfInput($event)"></rtf-input>
	            </div>
	        </div>
	        <div class="col-md-2">
	        </div>
	    </div>
	    <footer>
	        <a
	         href="javascript: void(alert('Pejd do Blaža pa ti povedu o Aplikaciji za članke'))"
	        >o Aplikaciji za clanke</a> 
	        | 
	        <a href="mailto:zupaniblaz@gmail.com">kontaktirajte nas</a>
	    </footer>
	`,
	styleUrls: ['article-input.page.style.sass'],
	directives: [RtfInputComponent],
	providers: [ArticleFactory]
})
export class ArticleInputPage {

	constructor(private _router: Router, private _articleFactory: ArticleFactory, private _articleService: ArticleService) {
		console.log('!ArticleInputPage.constructor');
	}

	private handleRtfInput(rtf: RtfData) {
		this._articleService.currentArticle = this._articleFactory.create(rtf.html);
		this._router.navigate(['/word-marker']);
	}
}
