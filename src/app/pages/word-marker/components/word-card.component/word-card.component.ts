import { Component, Input } from '@angular/core';
import { Meaning, Pronunciation } from './../../structures/word.structure';

@Component({
	selector: 'word-card',
	template: `
		<span class="word">{{data.text}}</span>
		<span class="pronunciation" [ngSwitch]="options.pronunciationFormat">
			<span *ngSwitchCase="'spell'">[{{data.pronunciation.spell}}]</span>
			<span *ngSwitchCase="'ipa'">/{{data.pronunciation.ipa}}/</span>
		</span>
		<span class="definition">{{data.meaning.definition}}
			<span class="example" *ngIf="options.showExamples">{{data.meaning.example}}</span>
		</span>
	`,
	styleUrls: ['word-card.component.style.sass']
})
export class WordCardComponent {
	@Input() data: WordCardData;
	private options: Object = { pronunciationFormat: 'ipa', showExamples: true };
}

export interface WordCardData {
	text: string;
	pronunciation: Pronunciation;
	usageType: string;
	meaning: Meaning;
}
