export class HashMap<K, V> {
	private _store: Object = {};

	set(key: K, val: V) {
		this._store[(<any>key)] = val;
	}

	get(key: K) {
		return this._store[(<any>key)];
	}

	remove(key: K) {
		delete this._store[(<any>key)];
	}

	has(key: K): boolean {
		return Object.prototype.hasOwnProperty.call(this._store, key);
	}
}
