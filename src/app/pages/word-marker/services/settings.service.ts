import { Injectable } from '@angular/core';

@Injectable()
export class SettingsService {
	pronunciationFormat: string = "spell";
	showExamples: boolean       = true;
}
