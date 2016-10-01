import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

import { DictionaryKey } from './../shared/structures/dictionary-key.structure';
import { DictionaryService } from './../pages/word-marker/services/dictionary.service';
import { WordData } from './../pages/word-marker/structures/word-data.structure';

@Injectable()
export class MockDictionaryService extends DictionaryService {
	private _words = new BehaviorSubject<Array<WordData>>([{"text":"drug","pronunciation":"druhg","definitions":["a habit-forming medicinal or illicit substance, especially a narcotic."]},{"text":"drug","pronunciation":"druhg","definitions":["a simple past tense and past participle of"]},{"text":"Drug","pronunciation":"droo g","definitions":["the cosmic principle of disorder and falsehood."]}]);
	
	getWords(query: string): Observable<Array<WordData>> {
		return this._words.asObservable();
	}
}
