import {Component} from '@angular/core';
import {SportsDBService} from '../../services/list/sportsDB.service';
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
  searchKeyword: string = '';
  dataHasLoaded: boolean = false;
  filteredTeams: Team[] = [];
  inputTeams: Team[] = [];
  title: string = 'Welcome to the EPL Team Finder';

  constructor(private listService: SportsDBService) {
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
      this.dataHasLoaded = true;
    } catch (error) {
      console.error('Error fetching teams:', error);
    }
  }

  getLocations(teams: Team[]) {
    let locations: string[] = [];
    locations.push('All locations');
    teams.forEach((team: Team) => {
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
    if (locationSelected === 'All locations') {
      this.filteredTeams = this.originalTeamsModel;
    } else {
      this.filteredTeams = this.originalTeamsModel.filter((team) => {
        if (team.strStadiumLocation) {
          let words = team.strStadiumLocation.split(',');

          let location = words.length > 1 ? words[1].trim() : words[0].trim();
          return location === locationSelected;
        }
        return false;
      });
    }
    this.applySearchTerms();
  }

  searchTeams() {
    if (this.searchKeyword.trim() === '') {
      this.inputTeams = this.originalTeamsModel;
    } else {
      this.inputTeams = this.originalTeamsModel.filter(team =>
        team.strTeam.toLowerCase().includes(this.searchKeyword.toLowerCase())
      );
    }
    this.applySearchTerms();
  }

  applySearchTerms() {
    if (this.searchKeyword.trim() === '' && this.filteredTeams.length > 0) {
      this.teams = this.filteredTeams;
    } else if (this.searchKeyword.trim() !== '' && this.filteredTeams.length > 0) {
      this.teams = this.filteredTeams.filter((team) => {
        return this.inputTeams.includes(team);
      });
    } else if (this.searchKeyword.trim() !== '' && this.filteredTeams.length === 0) {
      this.teams = this.inputTeams;
    } else if (this.searchKeyword.trim() === '' && this.filteredTeams.length === 0) {
      this.teams = this.originalTeamsModel;
    }
  }

  onOptionSelected(locationSelected: string) {
    this.filterTeams(locationSelected);
  }
}
