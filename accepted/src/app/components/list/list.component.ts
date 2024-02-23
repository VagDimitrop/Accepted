import {Component, Input} from '@angular/core';
import {Team} from "../../interfaces/teams.interface";
import {Router} from "@angular/router";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.less']
})
export class ListComponent {

  @Input() teams!: Team[];
  @Input() dataHasLoaded!: boolean;

  constructor(private router: Router) {}

  handleClick(team: Team) {
      this.router.navigate(['/details'],{state: {team}});
  }
}
