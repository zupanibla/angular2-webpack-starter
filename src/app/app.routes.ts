import { Routes } from '@angular/router';

import { ArticleInputPage } from './pages/article-input';
import { WordMarkerPage }   from './pages/word-marker';

export const ROUTES: Routes = [
  { path: '',              component: ArticleInputPage },
  { path: 'article-input', component: ArticleInputPage },
  { path: 'word-marker',   component: WordMarkerPage },
  { path: '**',            component: ArticleInputPage },
];
