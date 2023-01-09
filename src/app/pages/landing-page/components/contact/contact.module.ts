import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { VtContactComponent } from './contact.component'

@NgModule({
  declarations: [VtContactComponent],
  exports: [VtContactComponent],
  imports: [CommonModule]
})
export class VtContactModule {}
