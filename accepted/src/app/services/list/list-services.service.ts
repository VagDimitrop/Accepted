import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Team} from "../../interfaces/teams.interface";

@Injectable({
  providedIn: 'root'
})
export class ListServicesService {

  constructor(private http: HttpClient) {
  }


  async getTeamsByLeagueName(): Promise<Team[]> {
    try {
      const data = await this.http.get<any>(`https://www.thesportsdb.com/api/v1/json/3/search_all_teams.php?l=English_Premier_League`).toPromise();
      return data.teams;
    } catch (error) {
      console.error('Error fetching teams:', error);
      return [];
    }
  }

}
