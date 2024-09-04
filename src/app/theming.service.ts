import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemingService {
  private COOKIE_NAME = 'darkModeActive';
  public isDarkModeActive = false;

  constructor() {}

  public toggleDarkMode() {
    this.isDarkModeActive = !this.isDarkModeActive;
    this.setCookie();
  }

  public loadCookie() {
    let cookie = sessionStorage.getItem(this.COOKIE_NAME);

    if (!cookie) return;

    if (cookie == 'true') this.isDarkModeActive = true;
    if (cookie == 'false') this.isDarkModeActive = false;
  }

  private setCookie() {
    sessionStorage.setItem(this.COOKIE_NAME, this.isDarkModeActive.toString());
  }
}
