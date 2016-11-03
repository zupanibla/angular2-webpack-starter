import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { ArticleService } from './../../shared/services/article.service';
import { ArticleFactory } from './factories/article.factory';

import { RtfInputComponent, RtfData } from './components/rtf-input.component';

@Component({ // TODO lepsi template, prestav template
	template: `
	    <div class="container">
	        <div class="col-md-3">
	        </div>
	        <div class="col-md-6" style="overflow: hidden;">
	            <div id="main">
	                <div class="page-header">
	                    <h1 class="title">
	                    Članker<br>
	                    <small class="subtitle">Word study made easy</small>
	                    </h1>
	                </div>
	                <rtf-input (submit)="handleRtfInput($event)"></rtf-input>
	            </div>
	        </div>
	        <div class="col-md-3">
	        </div>
	    </div>
	    <footer>
	        <a
	         href="javascript: void(alert('Pejd do Blaža pa ti povedu o Aplikaciji za članke'))"
	        >about us</a> 
	        | 
	        <a href="mailto:zupaniblaz@gmail.com">contact us</a>
	    </footer>
	`,
	styleUrls: ['article-input.page.style.sass'],
	directives: [RtfInputComponent],
	providers: [ArticleFactory]
})
export class ArticleInputPage {

	constructor(private router: Router, private articleFactory: ArticleFactory,
	 private articleService: ArticleService) {
		console.log('!ArticleInputPage.constructor');
	}

	private handleRtfInput(rtf: RtfData) {
		this.articleService.currentArticle = this.articleFactory.create(rtf.html);
		this.router.navigate(['/word-marker']);
	}
}
