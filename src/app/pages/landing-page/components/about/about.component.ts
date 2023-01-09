import { Component, OnInit } from '@angular/core'
import { About, AboutField } from './model/about.model'

@Component({
  selector: 'vt-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class VtAboutComponent implements OnInit {
  public readonly about: About = {
    yearsOfHistory: 0,
    clients: 0,
    brazilStates: 0,
    goal: 0
  }

  ngOnInit(): void {
    this.increase()
  }

  private increase(): void {
    this.gradualIncrease(20, 'yearsOfHistory', 2, 100)
    this.gradualIncrease(1500, 'clients', 10, 0.1)
    this.gradualIncrease(8, 'brazilStates', 1, 100)
    this.gradualIncrease(1, 'goal', 1, 400)
  }

  private async gradualIncrease(
    value: number,
    field: AboutField,
    increment: number,
    ms: number
  ): Promise<void> {
    do {
      await new Promise(resolve => {
        setTimeout(() => {
          this.about[field] = this.about[field] + increment

          resolve(this.about[field])
        }, ms)
      })
    } while (this.about[field] < value)
  }
}
