import { Injectable } from '@angular/core';

@Injectable()
export class SettingsService {
	pronunciationFormat: string = "ipa";
	showExamples: boolean       = true;
}
