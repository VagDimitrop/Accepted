import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ListServicesService } from '../services/list/list-services.service';
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
    ListServicesService
  ],
  exports: []
})
export class PagesModule {}
