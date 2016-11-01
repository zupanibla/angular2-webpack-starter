import { Injectable, ComponentFactory, ComponentFactoryResolver, Injector, ComponentRef } from '@angular/core';
import { AdaptedMarkableWordComponent } from './../components/adapted-markable-word.component';

@Injectable()
export class MarkableWordFactory {
	private componentFactory: ComponentFactory<AdaptedMarkableWordComponent>;

	constructor(cfr: ComponentFactoryResolver, private injector: Injector) {
		this.componentFactory = cfr.resolveComponentFactory(AdaptedMarkableWordComponent);
	}

	create(wordContainer: HTMLElement): ComponentRef<AdaptedMarkableWordComponent> {
		let content      = wordContainer.innerHTML;
		let componentRef = this.componentFactory.create(this.injector, [], wordContainer);
		componentRef.instance.setContent(content);
		return componentRef;
	}
}
