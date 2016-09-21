import { Injectable } from '@angular/core';

import { DictionaryKey } from './../../../shared/structures/dictionary-key.structure';
@Injectable()
export class DictionaryService {

	getWords(query: string): Array<WordData> {
		return [{"text":"drug","pronounciation":"druhg","definitions":["a habit-forming medicinal or illicit substance, especially a narcotic."]},{"text":"drug","pronounciation":"druhg","definitions":["a simple past tense and past participle of"]},{"text":"Drug","pronounciation":"droo g","definitions":["the cosmic principle of disorder and falsehood."]}];
	}

	getDefinitionCard(key: DictionaryKey) {
		let word = this.getWords(key.query)[key.wordNumber];
		return {
			text: word.text,
			pronounciation: word.pronounciation,
			definition: word.definitions[key.definitionNumber]
		}
	}
}

interface WordData {
	text: string;
	pronounciation: string;
	definitions: Array<string>;
}
