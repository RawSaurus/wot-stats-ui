import {Component, Output, output} from '@angular/core';
import EventEmitter from 'node:events';

export type statusType = 'WELCOME' | 'BATTLE_LOG' | 'PLANNER' | 'LOGIN' | 'LOGOUT';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  // @Output() status = new EventEmitter();
  status = output<statusType>();

  onChangeStatus(status: statusType){
    this.status.emit(status);
  }
}
