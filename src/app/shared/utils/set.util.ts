export class Set<C> {
	private _set: Object = {};

	add(element: C) {
		this._set[(<any>element)] = true;
	}
	remove(element: C) {
		delete this._set[(<any>element)];
	}
	toggle(element: C) {
		if (this.has(element)) {
			this.remove(element);
			return false;
		} else {
			this.add(element);
			return true;
		}
	}

	has(element: C): boolean {
		return Object.prototype.hasOwnProperty.call(this._set, element);
	}

	toArray(): Array<string> {
		return Object.keys(this._set);
	}
}
