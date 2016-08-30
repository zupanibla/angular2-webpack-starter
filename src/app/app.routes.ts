import { Routes } from '@angular/router';

import { ArticleInputPage } from './article-input';
import { WordMarkerPage }   from './word-marker';

export const ROUTES: Routes = [
  { path: '',              component: ArticleInputPage },
  { path: 'article-input', component: ArticleInputPage },
  { path: 'word-marker',   component: WordMarkerPage },
  { path: '**',            component: ArticleInputPage },
];
