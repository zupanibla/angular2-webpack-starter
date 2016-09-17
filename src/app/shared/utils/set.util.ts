export class Set<E> {
	private _store: Object = {};

	add(element: E) {
		this._store[(<any>element)] = true;
	}

	remove(element: E) {
		delete this._store[(<any>element)];
	}

	toggle(element: E) {
		if (this.has(element)) {
			this.remove(element);
			return false;
		} else {
			this.add(element);
			return true;
		}
	}

	has(element: E): boolean {
		return Object.prototype.hasOwnProperty.call(this._store, element);
	}

	toArray(): Array<string> {
		return Object.keys(this._store);
	}
}
