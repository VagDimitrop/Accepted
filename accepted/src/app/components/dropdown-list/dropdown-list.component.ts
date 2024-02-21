import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-dropdown-list',
  templateUrl: './dropdown-list.component.html',
  styleUrls: ['./dropdown-list.component.less']
})
export class DropdownListComponent {

  @Input() dropdownOptions!: {  idLeague: string, strLeague: string, strLeagueAlternate: string, strSport: string }[];

  selectedOption!: {
    idLeague: string,
    strLeague: string,
    strLeagueAlternate: string,
    strSport: string
  };

  onSelectionChange(event: any) {
    this.selectedOption = event.target.value;
  }
}
