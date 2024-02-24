import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {Team} from "../../interfaces/teams.interface";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.less']
})
export class DetailsComponent {
  team!: Team;
  teams!: Team[];
  title: string = 'Team Details';

  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    if (navigation && navigation.extras.state) {
      this.team = navigation.extras.state['team'];

    }
  }

  ngOnInit() {
    this.teams = [];
    this.teams.push(this.team);
    this.team = this.teams[0];
  }

  navigateToHomePage() {
    this.router.navigate(['']);
  }
}
