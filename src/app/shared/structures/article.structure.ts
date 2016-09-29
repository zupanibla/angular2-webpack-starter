import { Set } from './../utils/set.util';
import { DictionaryKey } from './../structures/dictionary-key.structure';

export interface Article {
	template: string;
	markedWordsIds: Set<number>;
	wordDefinitions: Array<DictionaryKey>;
}
