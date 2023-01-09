import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { VtAboutSystemModule } from './components/about-system/about-system.module'
import { VtAboutModule } from './components/about/about.module'
import { VtClientsModule } from './components/clients/clients.module'
import { VtContactModule } from './components/contact/contact.module'
import { VtDifferentialsModule } from './components/differentials/differentials.module'
import { VtFeedbackModule } from './components/feedback/feedback.module'
import { VtJumbotromModule } from './components/jumbotrom/jumbotrom.module'
import { VtMarketplacesModule } from './components/marketplaces/marketplaces.module'
import { VtServicesModule } from './components/services/services.module'
import { VtLandingPageRoutingModule } from './landing-page-routing.module'
import { VtLandingPageComponent } from './landing-page.component'

@NgModule({
  declarations: [VtLandingPageComponent],
  exports: [VtLandingPageComponent],
  imports: [
    CommonModule,
    VtLandingPageRoutingModule,

    // Components
    VtContactModule,
    VtMarketplacesModule,
    VtClientsModule,
    VtServicesModule,
    VtAboutSystemModule,
    VtJumbotromModule,
    VtDifferentialsModule,
    VtFeedbackModule,
    VtAboutModule
  ]
})
export class VtLandingPageModule {}
