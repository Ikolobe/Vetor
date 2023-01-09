import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { VtLandingPageRoutingModule } from './app-routing.module'

import { AppComponent } from './app.component'
import { VtFooterModule } from './structure/footer/footer.module'
import { VtHeaderModule } from './structure/header/header.module'

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    VtLandingPageRoutingModule,
    VtFooterModule,
    VtHeaderModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
