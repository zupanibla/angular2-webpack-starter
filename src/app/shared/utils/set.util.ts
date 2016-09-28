import { Observable, Subject } from 'rxjs'; // TODO poprav _ terminologijo

export class Set<E> {
	private _store: Object = {};
	private _onChange: Subject<any> = new Subject<{element:string,exists:boolean}>();
	public onChange: Observable<{element:string,exists:boolean}> = this._onChange.asObservable();

	add(element: E) {
		this._store[(<any>element)] = true;
		this._onChange.next({element, exists: true});
	}

	remove(element: E) {
		delete this._store[(<any>element)];
		this._onChange.next({element, exists: false});
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
