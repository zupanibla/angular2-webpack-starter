import { Component } from '@angular/core';
import { ArticleComponent } from './components/article.component';

@Component({
	template: `
		<h1>WordMarkerPage</h1><br>
		<article></article>
	`,
	directives: [ArticleComponent]
})
export class WordMarkerPage {

}
