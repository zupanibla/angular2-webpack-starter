import { NgModule, ApplicationRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { removeNgStyles, createNewHosts } from '@angularclass/hmr';

/*
 * Platform and Environment providers/directives/pipes
 */
import { ENV_PROVIDERS } from './environment';
import { ROUTES } from './app.routes';
// App is our top level component
import { App } from './app.component';
import { APP_RESOLVER_PROVIDERS } from './app.resolver';
import { AppState } from './app.service';

// PAGES
import { ArticleInputPage } from './pages/article-input';
import { WordMarkerPage }   from './pages/word-marker';

// SHARED SERVICES
import { AjaxRequestsService } from './shared/services/ajax-requests.service';
import { ArticleService } from './shared/services/article.service';

// PAGE: ARTICLE-INPUT
import { DOMNodeArticlifier } from './pages/article-input/tools/dom-node-articlifier.tool';

// PAGE: WORD-MARKER
import { AdaptedMarkableWordComponent } from
 './pages/word-marker/components/adapted-markable-word.component';
import { DictionaryAjaxRequestsService } from
 './pages/word-marker/services/dictionary-ajax-requests.service';
 import { DictionaryService } from
 './pages/word-marker/services/dictionary.service';

// MOCKS
import { MockArticleService } from './dev/article.service.mock';
import { MockDictionaryService } from './dev/dictionary.service.mock';

// Application wide providers
const APP_PROVIDERS = [
  ...APP_RESOLVER_PROVIDERS,
  AppState,
  { provide: ArticleService, useClass: MockArticleService }, // TODO MOCK
  AjaxRequestsService,
  { provide: DictionaryService, useClass: MockDictionaryService }, // TODO MOCK
  DictionaryAjaxRequestsService,
  DOMNodeArticlifier
];

/**
 * `AppModule` is the main entry point into Angular2's bootstraping process
 */
@NgModule({
  bootstrap: [ App ],
  declarations: [
    App,
    ArticleInputPage,
    WordMarkerPage,
    AdaptedMarkableWordComponent
  ],
  entryComponents: [AdaptedMarkableWordComponent],
  imports: [ // import Angular's modules
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES, { useHash: true })
  ],
  providers: [ // expose our Services and Providers into Angular's dependency injection
    ENV_PROVIDERS,
    APP_PROVIDERS
  ]
})
export class AppModule {
  constructor(public appRef: ApplicationRef, public appState: AppState) {}
  hmrOnInit(store) {
    if (!store || !store.state) return;
    console.log('HMR store', store);
    this.appState._state = store.state;
    this.appRef.tick();
    delete store.state;
  }
  hmrOnDestroy(store) {
    const cmpLocation = this.appRef.components.map(cmp => cmp.location.nativeElement);
    // recreate elements
    const state = this.appState._state;
    store.state = state;
    store.disposeOldHosts = createNewHosts(cmpLocation);
    // remove styles
    removeNgStyles();
  }
  hmrAfterDestroy(store) {
    // display new elements
    store.disposeOldHosts();
    delete store.disposeOldHosts;
  }
}
