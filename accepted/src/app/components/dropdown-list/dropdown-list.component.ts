import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-dropdown-list',
  templateUrl: './dropdown-list.component.html',
  styleUrls: ['./dropdown-list.component.less']
})
export class DropdownListComponent {

  @Input() dropdownOptions!: string[];
  @Output() optionSelected = new EventEmitter<string>();

  selectedOption!: string;

  onSelectionChange(event: any) {
    const selectedIndex = event.target.selectedIndex - 1;
    this.selectedOption = this.dropdownOptions[selectedIndex];
    this.optionSelected.emit(this.selectedOption);
  }
}
