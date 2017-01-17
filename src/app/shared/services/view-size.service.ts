import { Injectable } from '@angular/core';

@Injectable()
export class ViewSizeService { // TODO causes too many change detections
	size: Size = this._size;

	constructor() {
		window.addEventListener('resize', () => {
			this.size = this._size;
		});
	}

	private get width () {
		return Math.max(
			document.documentElement['clientWidth'],
			document.documentElement['scrollWidth'],
			document.documentElement['offsetWidth'],
			document.body['clientWidth'],
			document.body['scrollWidth'],
			document.body['offsetWidth']
		);
	}

	private get _size () {
		return Object.keys(Size).map(key => Size[key]).find(width => (width > this.width));
	}

}

export enum Size {
	SMALL_PHONE = 322, PHONE = 480, SMALL_TABLET = 768, TABLET = 992, DESKTOP = 99999
}
