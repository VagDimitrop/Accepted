import { Injectable } from '@angular/core';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private darkModeTrigger = new Subject<void>();
  darkMode: boolean = false;

  constructor() {
    // Retrieve theme preference from localStorage if available
    const savedTheme = localStorage.getItem('theme');
    this.darkMode = savedTheme ? JSON.parse(savedTheme) : false;
    this.applyTheme();
  }
  emitEvent() {
    this.darkModeTrigger.next();
  }

  getEvent() {
    return this.darkModeTrigger.asObservable();
  }

  toggleTheme(): void {
    this.darkMode = !this.darkMode;
    this.applyTheme();
    localStorage.setItem('theme', JSON.stringify(this.darkMode));
  }

  private applyTheme(): void {
    if (this.darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }
}
