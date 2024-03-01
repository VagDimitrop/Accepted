import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Team} from "../../interfaces/teams.interface";
import {MatDialog} from '@angular/material/dialog';
import {DialogComponent} from '../../components/dialog/dialog.component';

@Injectable({
  providedIn: 'root'
})
export class SportsDBService {

  constructor(private http: HttpClient, private dialog: MatDialog) {
  }

  openDialog(): void {
    this.dialog.open(DialogComponent);
  }

  closeDialog(): void {
    this.dialog.closeAll();
  }

  async getTeamsByLeagueName(): Promise<Team[]> {
    this.openDialog();
    try {
      const data = await this.http.get<any>(`https://www.thesportsdb.com/api/v1/json/3/search_all_teams.php?l=English_Premier_League`).toPromise();
      this.closeDialog();
      return data.teams;
    } catch (error) {
      console.error('Error fetching teams:', error);
      this.closeDialog();
      return [];
    }
  }

}
