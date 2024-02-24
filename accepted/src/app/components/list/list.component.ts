import {Component, Input, ViewEncapsulation} from '@angular/core';
import {Team} from "../../interfaces/teams.interface";
import {Router} from "@angular/router";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.less'],
  encapsulation: ViewEncapsulation.None
})
export class ListComponent {

  @Input() teams!: Team[];
  @Input() dataHasLoaded!: boolean;

  constructor(private router: Router) {
  }


  handleClick(team: Team) {
    if (!window.location.href.includes('details')) {
      this.router.navigate(['/details'], {state: {team}});
    }
  }
}
