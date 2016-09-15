import { Set } from './../utils/set.util';

export interface Article {
	template: string;
	selectedWordsIds: Set<number>;
}
