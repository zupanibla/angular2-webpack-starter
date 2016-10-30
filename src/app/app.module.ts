import { NgModule, ApplicationRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';

/*
 * Platform and Environment providers/directives/pipes
 */
import { ENV_PROVIDERS } from './environment';
import { ROUTES } from './app.routes';
// App is our top level component
import { App } from './app.component';

import { MOCK_PROVIDERS } from './mock-providers';

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
 import { SettingsService } from
 './pages/word-marker/services/settings.service';


// Application wide providers
const APP_PROVIDERS = [
  ArticleService,
  AjaxRequestsService,
  DictionaryService,
  SettingsService,
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
    RouterModule.forRoot(ROUTES, { useHash: true }),
    Ng2Bs3ModalModule
  ],
  providers: [ // expose our Services and Providers into Angular's dependency injection
    ENV_PROVIDERS,
    APP_PROVIDERS,
    MOCK_PROVIDERS
  ]
})
export class AppModule {}
