import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { VtClientsComponent } from './clients.component'

@NgModule({
  declarations: [VtClientsComponent],
  exports: [VtClientsComponent],
  imports: [CommonModule]
})
export class VtClientsModule {}
