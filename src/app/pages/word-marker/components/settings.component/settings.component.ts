import { Component } from '@angular/core';

import { SettingsService } from './../../services/settings.service';

@Component({
	selector: 'settings',
	template: `
	Pronunciation format: <br>
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
			Show usage examples
		</label>
	</div>
	`
})
export class SettingsComponent {

	constructor(private settings: SettingsService) {}
}

// TODO flikn v form
// import { Component } from '@angular/core';

// import { SettingsService } from './../../services/settings.service';

// @Component({
// 	selector: 'settings',
// 	template: `
// 	Format izgovorjave: <br>
// 	<div class="btn-group" data-toggle="buttons">
// 		<label class="btn btn-default"
// 		 [class.active]="settings.pronunciationFormat == 'ipa'"
// 		 (click)="settings.pronunciationFormat = 'ipa'"
// 		>IPA</label>
// 		<input type="radio" autocomplete="off">
// 		<label class="btn btn-default"
// 		 [class.active]="settings.pronunciationFormat == 'spell'"
// 		 (click)="settings.pronunciationFormat = 'spell'"
// 		>Spell</label>
// 		<input type="radio" autocomplete="off">
// 	</div>
// 	<div class="checkbox">
// 		<label>
// 			<input type="checkbox" [(ngModel)]="settings.showExamples"> 
// 			Prikaži primere uporabe
// 		</label>
// 	</div>
// 	`
// })
// export class SettingsComponent {

// 	constructor(private settings: SettingsService) {}
// }
