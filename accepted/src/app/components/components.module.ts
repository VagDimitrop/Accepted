import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownListComponent } from './dropdown-list/dropdown-list.component';
import { ListComponent } from './list/list.component';

@NgModule({
  declarations: [
    DropdownListComponent,
    ListComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DropdownListComponent,
    ListComponent
  ]
})
export class ComponentsModule {}
