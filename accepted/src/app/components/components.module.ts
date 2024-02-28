import { NgModule } from '@angular/core';
import {CommonModule } from '@angular/common';
import { DropdownListComponent } from './dropdown-list/dropdown-list.component';
import { ListComponent } from './list/list.component';
import { HeaderComponent } from './header/header.component';
import { DialogComponent } from './dialog/dialog.component';
import {MatDialogModule} from "@angular/material/dialog";

@NgModule({
  declarations: [
    DropdownListComponent,
    ListComponent,
    HeaderComponent,
    DialogComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule
  ],
  exports: [
    DropdownListComponent,
    ListComponent,
    HeaderComponent
  ]
})
export class ComponentsModule {}
