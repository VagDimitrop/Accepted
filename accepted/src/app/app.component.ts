import { Component } from '@angular/core';
import {ThemeServicesService} from "./services/theme/theme-services.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'accepted';

  constructor(private themeService: ThemeServicesService) {}

  ngOnInit() {
    this.themeService.getEvent().subscribe(() => {
      this.themeService.toggleTheme();
    });
  }
}
