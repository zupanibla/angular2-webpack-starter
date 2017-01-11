import { Observable, Subject } from 'rxjs';

export class Dict<K, V> {
	private store: Object = {};
	private _onChange: Subject<{key: K, value?: V, exists: boolean}> = new Subject<any>();
	public onChange: Observable<{key: K, value?: V, exists: boolean}> = this._onChange.asObservable();

	constructor() {}

	get(key: K) {
		return this.store[(<any>key)];
	}

	set(key: K, value: V) {
		this.store[(<any>key)] = value;
		this._onChange.next({key, value, exists: true});
	}

	remove(key: K) {
		delete this.store[(<any>key)];
		this._onChange.next({key, exists: false});
	}

	has(key: V): boolean {
		return Object.prototype.hasOwnProperty.call(this.store, key);
	}

	values(): Array<V> {
		return this.keys().map(key => this.store[key]);
	}

	keys(): Array<string> {
		return Object.keys(this.store);
	}

	items(): Array<{key: string, value: V}> {
		return this.keys().map(key => ({key, value: <V>this.store[key]}));
	}
}
