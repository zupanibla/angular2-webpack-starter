import { Component, ViewChild } from '@angular/core';

@Component({
	selector: 'update-log-modal',
	templateUrl: './update-log-modal.component.template.html'
})
export class UpdateLogModalComponent {

	@ViewChild('modal') modal;

	open() {
		this.modal.open();
	}
}
