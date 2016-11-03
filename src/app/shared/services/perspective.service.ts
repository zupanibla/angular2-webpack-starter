import { Injectable } from '@angular/core';

@Injectable()
export class PerspectiveService {
	windowWidth: number = this._windowWidth;
	viewType: ViewType  = this._viewType;

	constructor() {
		window.addEventListener('resize', () => {
			this.windowWidth = this._viewType;
			this.viewType    = this._viewType;
		});
	}

	private get _windowWidth () {
		return Math.max(
			document.documentElement['clientWidth'],
			document.documentElement['scrollWidth'],
			document.documentElement['offsetWidth'],
			document.body['clientWidth'],
			document.body['scrollWidth'],
			document.body['offsetWidth']
		);
	}

	private get _viewType () {
		return (this._windowWidth > 992) ? ViewType.DESKTOP : ViewType.MOBILE;
	}

}

export enum ViewType { //TODO MOBILE_TABLET, TABLET, TABLET_DESKTOP
	DESKTOP, MOBILE
}
