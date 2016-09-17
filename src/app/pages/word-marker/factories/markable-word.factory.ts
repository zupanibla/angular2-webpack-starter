import { Injectable, ComponentFactory, ComponentFactoryResolver, Injector } from '@angular/core';
import { AdaptedMarkableWordComponent } from './../components/adapted-markable-word.component';

@Injectable()
export class MarkableWordFactory {
	private _componentFactory: ComponentFactory<AdaptedMarkableWordComponent>;

	constructor(cfr: ComponentFactoryResolver, private _injector: Injector) {
		this._componentFactory = cfr.resolveComponentFactory(AdaptedMarkableWordComponent);
	}

	create(wordContainer: HTMLElement) {
		let content      = wordContainer.innerHTML;
		let componentRef = this._componentFactory.create(this._injector, [], wordContainer);
		componentRef.instance.content = content;
		return componentRef.instance;
	}

}
