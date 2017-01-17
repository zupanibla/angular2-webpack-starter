import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
<<<<<<< HEAD
import { RouterModule } from '@angular/router';

import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';
=======
import {
  NgModule,
  ApplicationRef
} from '@angular/core';
import {
  removeNgStyles,
  createNewHosts,
  createInputTransfer
} from '@angularclass/hmr';
import {
  RouterModule,
  PreloadAllModules
} from '@angular/router';
>>>>>>> refs/remotes/AngularClass/master

/*
 * Platform and Environment providers/directives/pipes
 */
import { ENV_PROVIDERS } from './environment';
import { ROUTES } from './app.routes';
// App is our top level component
<<<<<<< HEAD
import { App } from './app.component';

import { MOCK_PROVIDERS } from './mock-providers';

// PAGES
import { ArticleInputPage } from './pages/article-input';
import { WordMarkerPage }   from './pages/word-marker';

// SHARED SERVICES
import { AjaxRequestsService } from './shared/services/ajax-requests.service';
import { ArticleService } from './shared/services/article.service';
import { ViewSizeService } from './shared/services/view-size.service';

// PAGE: ARTICLE-INPUT
import { DOMNodeArticlifier } from './pages/article-input/tools/dom-node-articlifier.tool';

// PAGE: WORD-MARKER
import { AdaptedMarkableWordComponent } from
 './pages/word-marker/components/adapted-markable-word.component';
import { DictionaryAjaxRequestsService } from
 './pages/word-marker/services/dictionary-ajax-requests.service';
 import { DictionaryService } from
 './pages/word-marker/services/dictionary.service';
 import { SettingsService } from
 './pages/word-marker/services/settings.service';

=======
import { AppComponent } from './app.component';
import { APP_RESOLVER_PROVIDERS } from './app.resolver';
import { AppState, InternalStateType } from './app.service';
import { HomeComponent } from './home';
import { AboutComponent } from './about';
import { NoContentComponent } from './no-content';
import { XLargeDirective } from './home/x-large';

import '../styles/styles.scss';
import '../styles/headings.css';
>>>>>>> refs/remotes/AngularClass/master

// Application wide providers
const APP_PROVIDERS = [
  ArticleService,
  AjaxRequestsService,
  ViewSizeService,
  DictionaryService,
  SettingsService,
  DictionaryAjaxRequestsService,
  DOMNodeArticlifier
];

type StoreType = {
  state: InternalStateType,
  restoreInputValues: () => void,
  disposeOldHosts: () => void
};

/**
 * `AppModule` is the main entry point into Angular2's bootstraping process
 */
@NgModule({
  bootstrap: [ AppComponent ],
  declarations: [
<<<<<<< HEAD
    App,
    ArticleInputPage,
    WordMarkerPage,
    AdaptedMarkableWordComponent
=======
    AppComponent,
    AboutComponent,
    HomeComponent,
    NoContentComponent,
    XLargeDirective
>>>>>>> refs/remotes/AngularClass/master
  ],
  entryComponents: [AdaptedMarkableWordComponent],
  imports: [ // import Angular's modules
    BrowserModule,
    FormsModule,
    HttpModule,
<<<<<<< HEAD
    RouterModule.forRoot(ROUTES, { useHash: false }),
    Ng2Bs3ModalModule
=======
    RouterModule.forRoot(ROUTES, { useHash: true, preloadingStrategy: PreloadAllModules })
>>>>>>> refs/remotes/AngularClass/master
  ],
  providers: [ // expose our Services and Providers into Angular's dependency injection
    ENV_PROVIDERS,
    APP_PROVIDERS,
    MOCK_PROVIDERS
  ]
})
<<<<<<< HEAD
export class AppModule {}
=======
export class AppModule {

  constructor(
    public appRef: ApplicationRef,
    public appState: AppState
  ) {}

  public hmrOnInit(store: StoreType) {
    if (!store || !store.state) {
      return;
    }
    console.log('HMR store', JSON.stringify(store, null, 2));
    // set state
    this.appState._state = store.state;
    // set input values
    if ('restoreInputValues' in store) {
      let restoreInputValues = store.restoreInputValues;
      setTimeout(restoreInputValues);
    }

    this.appRef.tick();
    delete store.state;
    delete store.restoreInputValues;
  }

  public hmrOnDestroy(store: StoreType) {
    const cmpLocation = this.appRef.components.map((cmp) => cmp.location.nativeElement);
    // save state
    const state = this.appState._state;
    store.state = state;
    // recreate root elements
    store.disposeOldHosts = createNewHosts(cmpLocation);
    // save input values
    store.restoreInputValues  = createInputTransfer();
    // remove styles
    removeNgStyles();
  }

  public hmrAfterDestroy(store: StoreType) {
    // display new elements
    store.disposeOldHosts();
    delete store.disposeOldHosts;
  }

}
>>>>>>> refs/remotes/AngularClass/master
