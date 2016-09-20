import { Set } from './../utils/set.util';
import { DefinitionKey } from './../structures/definition-key.structure';

export interface Article {
	template: string;
	selectedWordsIds: Set<number>;
	wordDefinitions: Array<DefinitionKey>;
}
