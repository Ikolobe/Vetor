import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { VtAboutSystemComponent } from './about-system.component'

@NgModule({
  declarations: [VtAboutSystemComponent],
  exports: [VtAboutSystemComponent],
  imports: [CommonModule]
})
export class VtAboutSystemModule {}
