import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { VtAboutComponent } from './about.component'

@NgModule({
  declarations: [VtAboutComponent],
  exports: [VtAboutComponent],
  imports: [CommonModule]
})
export class VtAboutModule {}
