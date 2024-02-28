import { Component } from '@angular/core';
import {ThemeServicesService} from "./services/theme/theme-services.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'accepted';
  private themeSubscription!: Subscription;

  constructor(private themeService: ThemeServicesService) {}

  ngOnInit() {
    this.themeSubscription = this.themeService.getEvent().subscribe(() => {
      this.themeService.toggleTheme();
    });
  }

  ngOnDestroy() {
    this.themeSubscription.unsubscribe();
  }
}
