import { Component, Input, ViewChild, ComponentFactoryResolver, Injector  } from '@angular/core';
import { DOMNodeArticlifier } from './../../article-input/tools/dom-node-articlifier.tool'; // TODO
import { MarkableWordComponent } from './../components/markable-word.component';

@Component({
	selector: 'article',
	template: `
	<h3>ArticleComponent</h3>
	<div #articleContainer></div>
	`,
	entryComponents: [MarkableWordComponent]
})
export class ArticleComponent {
	@Input() set html(val) { this.setHtml(val); }
	@ViewChild('articleContainer') articleContainer;
	
	constructor(private _cfr: ComponentFactoryResolver, private _injector: Injector) {
	}

	private setHtml(html: string) {
		let articleNode = document.createElement('div');
		articleNode.innerHTML = html;
		let article = new DOMNodeArticlifier().articlify(articleNode);
		this.articleContainer.nativeElement.appendChild(article.domNode);
		let markableWordComponentFactory = this._cfr.resolveComponentFactory(MarkableWordComponent);
		for (let wordNode of article.wordNodes) {
			let markableWordComponentRef = markableWordComponentFactory.create(this._injector, [], wordNode);
		}
	}
}
