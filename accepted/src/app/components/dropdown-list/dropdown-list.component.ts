import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-dropdown-list',
  templateUrl: './dropdown-list.component.html',
  styleUrls: ['./dropdown-list.component.less']
})
export class DropdownListComponent {

  @Input() dropdownOptions!: {  idLeague: string, strLeague: string, strLeagueAlternate: string, strSport: string }[];
  @Output() optionSelected = new EventEmitter<{  idLeague: string, strLeague: string, strLeagueAlternate: string, strSport: string }>();

  selectedOption!: {
    idLeague: string,
    strLeague: string,
    strLeagueAlternate: string,
    strSport: string
  };

  onSelectionChange(event: any) {
    const selectedIndex = event.target.selectedIndex - 1;
    this.selectedOption = this.dropdownOptions[selectedIndex];
    this.optionSelected.emit(this.selectedOption);
  }
}
