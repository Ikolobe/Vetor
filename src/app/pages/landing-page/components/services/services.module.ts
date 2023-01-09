import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { VtServicesComponent } from './services.component'

@NgModule({
  declarations: [VtServicesComponent],
  exports: [VtServicesComponent],
  imports: [CommonModule]
})
export class VtServicesModule {}
