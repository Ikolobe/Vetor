import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { VtMarketplacesComponent } from './marketplaces.component'

@NgModule({
  declarations: [VtMarketplacesComponent],
  exports: [VtMarketplacesComponent],
  imports: [CommonModule]
})
export class VtMarketplacesModule {}
