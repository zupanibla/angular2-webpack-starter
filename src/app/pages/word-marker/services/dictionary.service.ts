import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

import { HashMap } from './../../../shared/utils/hash-map.util';
import { DictionaryKey } from './../../../shared/structures/dictionary-key.structure';
import { DictionaryAjaxRequestsService } from './../services/dictionary-ajax-requests.service';
import { Word } from './../structures/word.structure';

@Injectable()
export class DictionaryService {
	words: HashMap<string, Observable<DictionaryEntry>> = new HashMap<string, Observable<DictionaryEntry>>();

	constructor(private dictionaryAjaxRequests: DictionaryAjaxRequestsService) {}

	getEntry(query: string): Observable<DictionaryEntry> { // TODO tole je shit
		if (!this.words.has(query)) {
			let subject = new BehaviorSubject<DictionaryEntry>({ data: null, state: DictionaryEntryState.LOADING });
			this.words.set(query, subject);
		}
		this.loadEntry(query);
		return this.words.get(query);
	}

	private loadEntry(query: string) {
		this.dictionaryAjaxRequests.requestGetWordsByQuery(query).subscribe(
			data => { this.words.get(query).next({ data, state: DictionaryEntryState.READY }); },
			()   => { this.words.get(query).next({ data: null, state: DictionaryEntryState.FAILURE })}
		);
	}

	reloadEntry(query: string) { this.loadEntry(query); }
}

export interface DictionaryEntry {
	data?: Array<Word>;
	state: DictionaryEntryState;
}

export enum DictionaryEntryState {
	READY, LOADING, FAILURE
}
