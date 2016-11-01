import { Component, ElementRef, Output, EventEmitter, ViewChild } from '@angular/core';

@Component({
    selector: 'rtf-input', // TODO a je vse to res pomembn?????????
    template: `
	<input type="text" #inputField
	 class="form-control input-lg"
	 (beforepaste)="iePasteHandler($event)"
	 (paste)="defaultPasteHandler($event)"
	 (keydown)="keydownHandler($event)"
	 placeholder="Prilepi besedilo iz Worda ali spleta"
	 autofocus
	>
	<div
	 contenteditable="true"
	 style="position: absolute; left: 0; top: -20000px;"
	 #contentEditableDiv
	></div>
    `,
    styleUrls: ['rtf-input.component.style.sass']
})
export class RtfInputComponent {
	@Output() submit = new EventEmitter<RtfData>();
	@ViewChild('contentEditableDiv') contentEditableDiv;
	@ViewChild('inputField') inputField;

	constructor() {
		setTimeout(() => { this.inputField.nativeElement.focus(); }, 1);
	}

	iePasteHandler(e: ClipboardEvent) {
		this.contentEditableDiv.nativeElement.focus();
		setTimeout(	() => {
			if (this.contentEditableDiv.nativeElement.innerHTML) {
				this.submit.emit({
					html: this.contentEditableDiv.nativeElement.innerHTML,
					text: e.clipboardData.getData('text')
				});
				this.contentEditableDiv.nativeElement.innerHTML = '';
			} else {
				this.inputField.nativeElement.focus();
			}
		}, 1);
		e.preventDefault();
	}

	defaultPasteHandler(e: ClipboardEvent) {
		let html = e.clipboardData.getData('text/html') || '<p>' + e.clipboardData.getData('text') + '</p>';
		let text = e.clipboardData.getData('text');
		this.submit.emit({html, text});
		e.preventDefault();
	}

	keydownHandler(e: KeyboardEvent) {
		if (!e.ctrlKey) e.preventDefault();
	}
}

export interface RtfData {
	html: string;
	text: string;
}
