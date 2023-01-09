import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { VtDifferentialsComponent } from './differentials.component'

@NgModule({
  declarations: [VtDifferentialsComponent],
  exports: [VtDifferentialsComponent],
  imports: [CommonModule]
})
export class VtDifferentialsModule {}
