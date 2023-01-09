import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { VtLandingPageComponent } from './landing-page.component'

const routes: Routes = [
  {
    path: '',
    component: VtLandingPageComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VtLandingPageRoutingModule {}
