import { Component, ChangeDetectorRef } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

import { MarkableWordComponent } from './../components/markable-word.component';

@Component({
	selector: 'markable-word-wrapper',
	template: `<markable-word [marked]="marked" (mark)="markHandler($event)">{{content}}</markable-word>`,
	directives: [MarkableWordComponent]
})
export class AdaptedMarkableWordComponent { // TODO nared al rxjs al pa direct
	private content: string = '';
	private marked: boolean = false;

	public onMark: BehaviorSubject<boolean> = new BehaviorSubject(false);
	
	constructor(private _cd: ChangeDetectorRef) {}
	
	private markHandler(e) {
		this.onMark.next(e);
		this._cd.detectChanges();
	}

	setContent(content: string) {
		this.content = content;
		this._cd.detectChanges();
	}

	setMarked(marked: boolean) {
		this.marked = marked;
		this._cd.detectChanges();
	}
}
