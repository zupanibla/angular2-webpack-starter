<<<<<<< HEAD
import { Routes } from '@angular/router';

import { ArticleInputPage } from './pages/article-input';
import { WordMarkerPage }   from './pages/word-marker';

export const ROUTES: Routes = [
  { path: '',              component: ArticleInputPage },
  { path: 'article-input', component: ArticleInputPage },
  { path: 'word-marker',   component: WordMarkerPage },
  { path: '**',            component: ArticleInputPage },
=======
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home';
import { AboutComponent } from './about';
import { NoContentComponent } from './no-content';

import { DataResolver } from './app.resolver';

export const ROUTES: Routes = [
  { path: '',      component: HomeComponent },
  { path: 'home',  component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'detail', loadChildren: './+detail#DetailModule'},
  { path: 'barrel', loadChildren: './+barrel#BarrelModule'},
  { path: '**',    component: NoContentComponent },
>>>>>>> refs/remotes/AngularClass/master
];
