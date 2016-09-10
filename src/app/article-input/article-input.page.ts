import { Component } from '@angular/core';

import { RtfInputComponent, RtfData } from './components/rtf-input.component';
import { ArticleComponent } from './../word-marker/components/article.component'; //TODO temporary

@Component({ // TODO lepsi template
	template: `
	    <div class="container">
	        <div class="col-md-2">
	        </div>
	        <div class="col-md-8" style="overflow: hidden;">
	            <div id="main">
	                <div class="page-header">
	                    <h1>
	                    Članker<br>
	                    <small>Inovativna rešitev za domače naloge pri angleščini</small>
	                    </h1>
	                </div>
	                <rtf-input (submit)="handleRtfInput($event)"></rtf-input>
	                <article [html]="this.articleHtml"></article>
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
	styleUrls: ['./styles/article-input.style.sass'],
	directives: [RtfInputComponent, ArticleComponent]
})
export class ArticleInputPage {
	articleHtml: string = '';

	constructor() {}

	private handleRtfInput(rtf: RtfData) {
		console.log('!handleRtfInput', rtf);
		this.articleHtml = rtf.html;
	}
}