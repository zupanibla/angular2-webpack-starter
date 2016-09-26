import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable()
export class AjaxRequestsService {
	private get BACKEND_URL(): string { return 'backend-ajax-handler' };

	constructor(private _http: Http) {}

	actionToUrl(action: string, extraParams: Object = {}): string {
		let params = new URLSearchParams();
		params.append('a', action);
		for (var name in extraParams) {
			params.append(name, extraParams[name]);
		}
		return this.BACKEND_URL + '?' + params.toString();
	}

	request(action: string, extraParams: Object = {}): Observable<any> {
		return this._http.request(this.actionToUrl(action, extraParams))
			.map(response => {console.log('"!request response is"', response); return response; }) //LOG
			.map(response => response.json());
	}
}
