import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ListServicesService {

  constructor(private http: HttpClient) {
  }

  async getAllLeagues(): Promise<{ idLeague: string, strLeague: string, strLeagueAlternate: string, strSport: string }[]> {
    try {
      const data = await this.http.get<any>('https://www.thesportsdb.com/api/v1/json/3/all_leagues.php').toPromise();
      return data.leagues;
    } catch (error) {
      console.error('Error fetching leagues:', error);
      return [];
    }
  }
  async getTeamsByLeagueName(leagueName: string): Promise<any[]> {
    try {
      const data = await this.http.get<any>(`https://www.thesportsdb.com/api/v1/json/3/search_all_teams.php?l=${leagueName}`).toPromise();
      return data.teams;
    } catch (error) {
      console.error('Error fetching teams:', error);
      return [];
    }
  }

}
