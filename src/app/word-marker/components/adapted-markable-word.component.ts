import { Component, ChangeDetectorRef, Input, Output } from '@angular/core';
import { MarkableWordComponent } from './../components/markable-word.component';

@Component({
	selector: 'markable-word-wrapper',
	template: `<markable-word (mark)="markHandler($event)">{{_content}}</markable-word>`,
	directives: [MarkableWordComponent]
})
export class AdaptedMarkableWordComponent {
	@Input() set content(val: string) { this._content = val; this._cd.detectChanges(); }
	private _content: string = '';
	
	constructor(private _cd: ChangeDetectorRef) {}
	
	private markHandler(e) {
		this._cd.detectChanges();
	}
}
