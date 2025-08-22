import {Component, input, Output} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HeaderComponent, statusType} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import EventEmitter from 'node:events';
import {BattleLogComponent} from './battle-log/battle-log.component';
import {PlannerComponent} from './planner/planner.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, BattleLogComponent, PlannerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'wot-stats-ui';
  status: statusType = 'WELCOME';

  setStatus(status: statusType) {
    this.status = status;
  }
}
