import { ArticleService } from './shared/services/article.service';
import { DictionaryService } from
 './pages/word-marker/services/dictionary.service';

import { MockArticleService } from './dev/article.service.mock';
import { MockDictionaryService } from './dev/dictionary.service.mock';

const DEV_MOCKS = [
	  { provide: ArticleService, useClass: MockArticleService },
	  { provide: DictionaryService, useClass: MockDictionaryService }
];

let PROVIDERS = [];
declare var ENV: string;
if (ENV !== 'production') {
	PROVIDERS = [...DEV_MOCKS]
}

export const MOCK_PROVIDERS = [
	...PROVIDERS
];
