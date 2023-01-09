import { Component, Input } from '@angular/core'

@Component({
  selector: 'vt-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class VtMenuComponent {
  @Input() column: boolean = false

  public readonly menu = [
    {
      label: 'HOME',
      path: '/home'
    },
    {
      label: 'Sobre',
      path: '/sobre'
    },
    {
      label: 'Soluções',
      path: '/solucoes'
    },
    {
      label: 'Suporte',
      path: '/suporte'
    }
  ]
}
