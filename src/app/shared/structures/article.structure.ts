import { Dict } from './../utils/dict.util';
import { DictionaryKey } from './../structures/dictionary-key.structure';

export interface Article {
	template: string;
	definedWords: Dict<number, DictionaryKey>;
}
