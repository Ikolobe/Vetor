import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { VtMenuModule } from '../menu/menu.module'
import { VtHeaderComponent } from './header.component'

@NgModule({
  declarations: [VtHeaderComponent],
  exports: [VtHeaderComponent],
  imports: [CommonModule, VtMenuModule, FontAwesomeModule]
})
export class VtHeaderModule {}
