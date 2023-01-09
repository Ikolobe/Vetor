import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { VtJumbotromComponent } from './jumbotrom.component'

@NgModule({
  declarations: [VtJumbotromComponent],
  exports: [VtJumbotromComponent],
  imports: [CommonModule]
})
export class VtJumbotromModule {}
