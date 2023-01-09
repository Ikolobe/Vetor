import { Component } from '@angular/core'
import {
  faFacebook,
  faInstagram,
  faLinkedinIn
} from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'vt-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class VtFooterComponent {
  public readonly currentYear: number = this.getYear()
  public readonly icons = {
    email: faEnvelope,
    phone: faPhoneAlt,
    facebook: faFacebook as any,
    instagram: faInstagram as any,
    linkedin: faLinkedinIn as any
  }

  private getYear(): number {
    const date: Date = new Date(Date.now())

    return date.getFullYear()
  }
}
