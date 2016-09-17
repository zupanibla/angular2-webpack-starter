import { Set } from './../utils/set.util';
import { HashMap } from './../utils/hash-map.util';
import { DefinitionKey } from './../structures/definition-key.structure';

export interface Article {
	template: string;
	selectedWordsIds: Set<number>;
	wordDefinitionsById: HashMap<number, DefinitionKey>;
}
