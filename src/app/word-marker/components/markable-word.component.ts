import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'markable-word',
	template: `<span [class.marked]="marked" (click)="clickHandler($event)"><ng-content></ng-content></span>`,
	styles: [`
	span {
		cursor: pointer;
	}
	.marked {
		background-color: yellow;
	}
	`]
})
export class MarkableWordComponent {
	@Input()  marked: boolean;
	@Output() mark: EventEmitter<boolean> = new EventEmitter<boolean>();

	private clickHandler(e: MouseEvent) {
		this.marked = !this.marked;
		this.mark.emit(this.marked);
		e.preventDefault();
	}
}
