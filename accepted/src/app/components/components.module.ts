import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownListComponent } from './dropdown-list/dropdown-list.component';
import { ListComponent } from './list/list.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    DropdownListComponent,
    ListComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DropdownListComponent,
    ListComponent,
    HeaderComponent
  ]
})
export class ComponentsModule {}
