import { Routes, RouterModule } from '@angular/router';
import { WordMarker } from './word-marker';

import { DataResolver } from './app.resolver';


export const ROUTES: Routes = [
  { path: '',      component: WordMarker },
  { path: 'word-marker',  component: WordMarker },
  { path: '**',    component: WordMarker },
];
