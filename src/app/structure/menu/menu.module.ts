import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { VtMenuComponent } from './menu.component'

@NgModule({
  declarations: [VtMenuComponent],
  exports: [VtMenuComponent],
  imports: [CommonModule, RouterModule]
})
export class VtMenuModule {}
