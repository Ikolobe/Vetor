import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./pages/landing-page/landing-page.module').then(
        m => m.VtLandingPageModule
      )
  },
  {
    path: 'sobre',
    loadChildren: () =>
      import('./pages/landing-page/landing-page.module').then(
        m => m.VtLandingPageModule
      )
  },
  {
    path: 'solucoes',
    loadChildren: () =>
      import('./pages/landing-page/landing-page.module').then(
        m => m.VtLandingPageModule
      )
  },
  {
    path: 'suporte',
    loadChildren: () =>
      import('./pages/landing-page/landing-page.module').then(
        m => m.VtLandingPageModule
      )
  },
  {
    path: '**',
    redirectTo: '/home',
    pathMatch: 'full'
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class VtLandingPageRoutingModule {}
