import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap'
import { VtFeedbackComponent } from './feedback.component'

@NgModule({
  declarations: [VtFeedbackComponent],
  exports: [VtFeedbackComponent],
  imports: [CommonModule, NgbCarouselModule]
})
export class VtFeedbackModule {}
