import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { ArticleService } from './../../shared/services/article.service';
import { ArticleFactory } from './factories/article.factory';
import { PerspectiveService, ViewType } from './../../shared/services/perspective.service';

import { RtfInputComponent, RtfData } from './components/rtf-input.component';

@Component({ // TODO lepsi template, prestav template
	template: `
	    <div class="container">
	        <div class="col-md-3">
	        </div>
	        <div class="col-md-6" style="overflow: hidden;">
	            <div id="main">
	                <div class="page-header">
	                    <h1 class="title" [class.mobile-view]="perspective.viewType === ViewType.MOBILE">
	                    Članker<br>
	                    <small class="subtitle">Word study made easy</small>
	                    </h1>
	                </div>
	                <rtf-input (submit)="handleRtfInput($event)" (typingAttempt)="showHelp = true"></rtf-input>
	                <br>
					<div class="alert alert-info" *ngIf="showHelp">[<strong>TODO</strong>: insert some random text here]
					</div>
	            </div>
	        </div>
	        <div class="col-md-3">
	        </div>
	    </div>
	    <footer>
	        <a href="javascript:void(0)">what's new in v0.2.1 (alpha)?</a> 
	        | 
	        <a href="mailto:zupaniblaz@gmail.com">contact us</a>
	    </footer>
	`,
	styleUrls: ['article-input.page.style.sass'],
	directives: [RtfInputComponent],
	providers: [ArticleFactory]
})
export class ArticleInputPage {
	private ViewType = ViewType;

	constructor(private router: Router, private articleFactory: ArticleFactory,
	 private articleService: ArticleService, private perspective: PerspectiveService) {
		console.log('!ArticleInputPage.constructor');
	}

	private handleRtfInput(rtf: RtfData) {
		this.articleService.currentArticle = this.articleFactory.create(rtf.html);
		this.router.navigate(['/word-marker']);
	}
}
