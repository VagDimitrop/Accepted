import {NgModule} from '@angular/core';
import {SportsDBService} from "./list/sportsDB.service";
import {ThemeService} from "./theme/theme.service";
import {CommonModule} from "@angular/common";


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule
  ],
  providers: [ThemeService, SportsDBService],
})
export class ServicesModule { }
