import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { AjaxRequestsService } from '../../../shared/services/ajax-requests.service';
import { Word } from './../structures/word.structure';

@Injectable()
export class DictionaryAjaxRequestsService {

	constructor(private ajaxRequests: AjaxRequestsService) {}

	requestGetWordsByQuery(query): Observable<Array<Word>> {
		return this.ajaxRequests.request('get-words-by-query', {query});
	}
}
