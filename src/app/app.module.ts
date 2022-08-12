import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { LOCALE_ID } from '@angular/core';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ComponentsModule } from './components/components.module';
import { HideHeaderDirective } from './directives/hide-header.directive';
import { RightChatsComponentTime } from './all.pipe';

export function getLanguage() {
  return 'en-US';
}

@NgModule({
  declarations: [ AppComponent, HideHeaderDirective, RightChatsComponentTime ],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, ComponentsModule],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    {
      provide: LOCALE_ID,
      useFactory: getLanguage  //returns locale string
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
