import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { VtFooterComponent } from './footer.component'

@NgModule({
  declarations: [VtFooterComponent],
  exports: [VtFooterComponent],
  imports: [CommonModule, FontAwesomeModule]
})
export class VtFooterModule {}
