import { Component } from '@angular/core';
import { ListServicesService } from '../../services/list/list-services.service';
import {Team} from "../../interfaces/teams.interface";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent {
  originalTeamsModel: Team[] = [];
  teams: Team[] = [];
  locations: string[] = [];
constructor(private listService: ListServicesService) {
  }

  ngOnInit() {
    this.loadTeams()
      .then(() => {
        this.teams = this.originalTeamsModel;
        this.locations = this.getLocations(this.originalTeamsModel);
      })
      .catch((error) => {
        console.error('Error fetching teams:', error);
      });
  }

  async loadTeams() {
    try {
      const data = await this.listService.getTeamsByLeagueName();
      this.originalTeamsModel = data;
    } catch (error) {
      console.error('Error fetching teams:', error);
    }
  }

  getLocations(teams:Team[]) {
    let locations: string[] = [];
    teams.forEach((team:Team) => {
      if (team.strStadiumLocation) {
        let words = team.strStadiumLocation.split(',');

        let location = words.length > 1 ? words[1].trim() : words[0].trim();
        if (!locations.includes(location)) {
          locations.push(location);
        }
      }
    });
    return locations;
  }

  filterTeams(locationSelected: string) {
    this.teams = this.originalTeamsModel.filter((team) => {
      if (team.strStadiumLocation) {
        let words = team.strStadiumLocation.split(',');

        let location = words.length > 1 ? words[1].trim() : words[0].trim();
        return location === locationSelected;
      }
      return false;
    });
  }

  onOptionSelected(locationSelected: string ) {
    this.filterTeams(locationSelected);
  }
}
