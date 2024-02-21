import { Component } from '@angular/core';
import { ListServicesService } from '../../services/list/list-services.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent {
  leagues!: { idLeague: string,
    strLeague: string,
    strLeagueAlternate: string,
    strSport: string }[];

  teams: any[] = [];
constructor(private listService: ListServicesService) {
  }

  ngOnInit() {
    this.loadLeagues();
  }

  async loadLeagues() {
    try {
      this.leagues = await this.listService.getAllLeagues();
    } catch (error) {
      console.error('Error fetching leagues:', error);
    }
  }

  async loadTeams(leagueName: string) {
    try {
      const data = await this.listService.getTeamsByLeagueName(leagueName);
      this.teams = data;
    } catch (error) {
      console.error('Error fetching teams:', error);
    }
  }
  onOptionSelected(optionValue: {  idLeague: string, strLeague: string, strLeagueAlternate: string, strSport: string }) {
    this.loadTeams(optionValue.strLeague);
  }

}
