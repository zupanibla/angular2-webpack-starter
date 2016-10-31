import { Component } from '@angular/core';

import { SettingsService } from './../../services/settings.service';

@Component({
	selector: 'settings',
	template: `
	Format izgovorjave: <br>
	<div class="btn-group" role="group">
		<button class="btn btn-default"
		 [class.active]="settings.pronunciationFormat == 'ipa'"
		 (click)="settings.pronunciationFormat = 'ipa'"
		>IPA</button>
		<button class="btn btn-default"
		 [class.active]="settings.pronunciationFormat == 'spell'"
		 (click)="settings.pronunciationFormat = 'spell'"
		>Spell</button>
	</div>
	<div class="checkbox">
		<label>
			<input type="checkbox" [(ngModel)]="settings.showExamples"> 
			Prikaži primere uporabe
		</label>
	</div>
	`
})
export class SettingsComponent {

	constructor(private settings: SettingsService) {}
}
