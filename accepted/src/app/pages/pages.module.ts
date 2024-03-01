import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home/home.component';
import {SportsDBService} from '../services/list/sportsDB.service';
import {FormsModule} from "@angular/forms";
import {ComponentsModule} from "../components/components.module";

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ComponentsModule
  ],
  providers: [
    SportsDBService
  ],
  exports: []
})
export class PagesModule {
}
