import {Component, Input} from '@angular/core';
import {Team} from "../../interfaces/teams.interface";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.less']
})
export class ListComponent {

  @Input() teams!: Team[];
  @Input() dataHasLoaded!: boolean;

}
