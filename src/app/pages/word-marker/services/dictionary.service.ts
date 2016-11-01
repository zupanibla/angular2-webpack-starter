import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { DictionaryKey } from './../../../shared/structures/dictionary-key.structure';
import { DictionaryAjaxRequestsService } from './../services/dictionary-ajax-requests.service';
import { Word } from './../structures/word.structure';

@Injectable()
export class DictionaryService {

	constructor(private dictionaryAjaxRequests: DictionaryAjaxRequestsService) {} // TODO Kje je cache

	getWords(query: string): Observable<Array<Word>> {
		return this.dictionaryAjaxRequests.requestGetWordsByQuery(query);
	}

	getDefinitionCard(key: DictionaryKey): Observable<any> { // TODO tole je shit
		return this.getWords(key.query).map(words => {
			let word = words[key.wordNumber];
			return {
				text: word.text,
				pronunciation: word.pronunciation,
				usageType: word.usages[key.usageNumber].type,
				meaning: word.usages[key.usageNumber].meanings[key.meaningNumber]
			}
		});
	}
}
