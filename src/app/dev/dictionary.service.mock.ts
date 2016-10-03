import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

import { DictionaryKey } from './../shared/structures/dictionary-key.structure';
import { DictionaryService } from './../pages/word-marker/services/dictionary.service';
import { Word } from './../pages/word-marker/structures/word.structure';

@Injectable()
export class MockDictionaryService extends DictionaryService {
	private _words = new BehaviorSubject<Array<Word>>([{"text":"turtle","pronunciation":{"spell":"tur-tl","ipa":"\u02c8t\u025cr tl"},"usages":[{"type":"noun","meanings":[{"definition":" any reptile of the order Testudines, comprising aquatic and terrestrial species having the trunk enclosed in a shell consisting of a dorsal carapace and a ventral plastron. "},{"definition":" (not used technically) an aquatic turtle as distinguished from a terrestrial one. Compare tortoise (def 1). "}]},{"type":"verb (used without object)","meanings":[{"definition":" to catch turtles, especially as a business. "}]},{"type":"Idioms","meanings":[{"example":"Several of the cars turned turtle in the course of the race.","definition":" turn turtle, Nautical. to capsize or turn over completely in foundering. to overturn; upset: "}]}]},{"text":"turtle","pronunciation":{"spell":"tur-tl","ipa":"\u02c8t\u025cr tl"},"usages":[{"type":"noun","meanings":[{"definition":" a turtledove. "}]}]}]);
	
	getWords(query: string): Observable<Array<Word>> {
		return this._words.asObservable();
	}
}
