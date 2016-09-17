import { Component, ChangeDetectorRef, Input, Output, EventEmitter } from '@angular/core';
import { MarkableWordComponent } from './../components/markable-word.component';

@Component({
	selector: 'markable-word-wrapper',
	template: `<markable-word (mark)="markHandler($event)">{{_content}}</markable-word>`,
	directives: [MarkableWordComponent]
})
export class AdaptedMarkableWordComponent {
	@Input() set content(val: string) { this._content = val; this._cd.detectChanges(); }
	@Output() mark: EventEmitter<boolean> = new EventEmitter<boolean>();
	private _content: string = '';
	
	constructor(private _cd: ChangeDetectorRef) {}
	
	private markHandler(e) {
		this.mark.emit(e);
		this._cd.detectChanges();
	}
}
