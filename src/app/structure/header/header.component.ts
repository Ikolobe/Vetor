import { Component, TemplateRef } from '@angular/core'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'vt-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class VtHeaderComponent {
  constructor(private offcanvasService: NgbOffcanvas) {}

  public readonly icons = {
    email: faEnvelope,
    menu: faBars
  }

  public openOffcanvas(content: TemplateRef<any>): void {
    this.offcanvasService.open(content, { position: 'end' })
  }
}
