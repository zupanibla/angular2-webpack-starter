import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { DictionaryKey } from './../../../shared/structures/dictionary-key.structure';
import { DictionaryAjaxRequestsService } from './../services/dictionary-ajax-requests.service';
import { WordData } from './../structures/word-data.structure';

@Injectable()
export class DictionaryService {

	constructor(private _dictionaryAjaxRequests: DictionaryAjaxRequestsService) {} // Kje je cache

	getWords(query: string): Observable<Array<WordData>> {
		return this._dictionaryAjaxRequests.requestGetWordsByQuery(query);
	}

	getDefinitionCard(key: DictionaryKey): Observable<any> { // TODO tole je shit
		return this.getWords(key.query).map(words => {
			let word = words[key.wordNumber];
			return {
				text: word.text,
				pronunciation: word.pronunciation,
				definition: word.definitions[key.definitionNumber]
			}
		});
	}
}
