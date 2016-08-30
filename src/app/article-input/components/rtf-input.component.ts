import { Component, ElementRef, Output, EventEmitter, ViewChild } from '@angular/core';

@Component({
    selector: 'rtf-input', // TODO a je vse to res pomembn?????????
    template: `
	<textarea #inputField
	 class="form-control input-lg"
	 id="input-field"
	 (beforepaste)="iePasteHandler($event)"
	 (paste)="defaultPasteHandler($event)"
	 (keydown)="keydownHandler($event)"
	 placeholder="Prilepi besedilo iz Worda ali iz spleta"
	 autofocus
	></textarea>
	<div
	 contenteditable="true"
	 style="position: absolute; left: 0; top: -20000px;"
	 #contentEditableDiv
	></div>
    `,
    styles: [`
	#input-field {
		margin: 15px auto;
		widht: 100%;
		box-shadow: none !important;
		border-color: #ccc !important;
		resize: none;
	}
    `]
})
export class RtfInputComponent {
	@Output() submit = new EventEmitter<RtfData>();
	@ViewChild('contentEditableDiv') contentEditableDiv;
	@ViewChild('inputField') inputField;

	constructor() {
		setTimeout(() => { this.inputField.nativeElement.focus(); }, 1);
	}

	iePasteHandler(e: ClipboardEvent) {
		console.log('!iePasteHandler in ArticleInput'); // LOG
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
	}

	defaultPasteHandler(e: ClipboardEvent) {
		console.log('!defaultPasteHandler in ArticleInput'); // LOG
		let html = e.clipboardData.getData('text/html') || '<p>' + e.clipboardData.getData('text') + '</p>';
		let text = e.clipboardData.getData('text');
		this.submit.emit({html, text});
	}

	keydownHandler(e: KeyboardEvent) {
		if (!e.ctrlKey) e.preventDefault();
	}
}

export interface RtfData {
	html: string;
	text: string;
}