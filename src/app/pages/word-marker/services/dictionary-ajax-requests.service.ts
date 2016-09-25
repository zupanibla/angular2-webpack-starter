import { Injectable } from '@angular/core';
import { Observable } from 'RxJS';

import { AjaxRequestsService } from '../../../shared/services/ajax-requests.service';
import { WordData } from './../structures/word-data.structure';

@Injectable()
export class DictionaryAjaxRequestsService {

	constructor(private _ajaxRequests: AjaxRequestsService) {}

	requestGetWordsByQuery(query): Observable<Array<WordData>> {
		return this._ajaxRequests.request('get-words-by-query', {query});
	}
}
