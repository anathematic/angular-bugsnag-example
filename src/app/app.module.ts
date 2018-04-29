import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Import bugsnag-js and bugsnag-angular
import BugsnagErrorHandler from 'bugsnag-angular'
import bugsnag from 'bugsnag-js'

// configure Bugsnag ASAP, before any other imports
const bugsnagClient = bugsnag('API_KEY')

// create a factory which will return the bugsnag error handler
export function errorHandlerFactory() {
  return new BugsnagErrorHandler(bugsnagClient)
}

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
