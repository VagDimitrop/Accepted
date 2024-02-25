import {Component, Input} from '@angular/core';
import {ThemeServicesService} from "../../services/theme/theme-services.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent {

  @Input() title: string = '';

  constructor(private sharedService: ThemeServicesService) {
  }

  toggleDarkMode() {
    this.sharedService.emitEvent();
  }
}
