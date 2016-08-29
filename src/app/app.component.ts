import { Component, ViewEncapsulation } from '@angular/core';

import { AppState } from './app.service';

@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  template: `
    <main>
      <router-outlet></router-outlet>
    </main>
  `
})
export class App {

  constructor(public appState: AppState) {}

}
