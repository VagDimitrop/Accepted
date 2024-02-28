import {Component, Input} from '@angular/core';
import {ThemeServicesService} from "../../services/theme/theme-services.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent {

  @Input() title: string = '';
  isDarkMode: boolean = false;
  private themeSubscription: Subscription;

  constructor(private themeService: ThemeServicesService) {
    this.isDarkMode = this.themeService.darkMode;
    this.themeSubscription = this.themeService.getEvent().subscribe(() => {
      this.isDarkMode = this.themeService.darkMode;
    });
  }

  toggleDarkMode() {
    this.themeService.emitEvent();
  }

  ngOnDestroy() {
    this.themeSubscription.unsubscribe();
  }
}
