import { Injectable } from '@angular/core';

@Injectable()
export class ViewSizeService { // TODO causes too many change detections
	width: number = this._width;
	size: Size    = this._size;

	constructor() {
		window.addEventListener('resize', () => {
			this.width   = this._size;
			this.size    = this._size;
		});
	}

	private get _width () {
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
		return (this._width > 992) ? Size.DESKTOP : ((this._width > 321) ? Size.TABLET : Size.MOBILE);
	}

}

export enum Size {
	MOBILE, TABLET, DESKTOP
}
