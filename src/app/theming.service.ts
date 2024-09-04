import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemingService {
  public isDarkModeActive = false;

  constructor() {}

  public toggleDarkMode() {
    this.isDarkModeActive = !this.isDarkModeActive;
  }
}
