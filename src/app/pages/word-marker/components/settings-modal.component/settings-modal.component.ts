import { Component, ViewChild } from '@angular/core';
import { SettingsComponent } from './../settings.component';

@Component({
	selector: 'settings-modal',
	templateUrl: './settings-modal.component.template.html',
	directives: [SettingsComponent]
})
export class SettingsModalComponent {

	@ViewChild('modal') modal;

	open() {
		this.modal.open();
	}
}
