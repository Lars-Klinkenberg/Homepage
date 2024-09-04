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

  public loadCookie(): boolean {
    let cookie = sessionStorage.getItem(this.COOKIE_NAME);

    if (!cookie) return false;

    if (cookie == 'true') {
      this.isDarkModeActive = true;
      return true;
    }
    if (cookie == 'false') {
      this.isDarkModeActive = false;
      return true;
    }
    return false;
  }

  private setCookie() {
    sessionStorage.setItem(this.COOKIE_NAME, this.isDarkModeActive.toString());
  }

  public loadDarkModeSettings() {
    // check if user has set preference before
    if (this.loadCookie()) return;

    // check for system preference
    if (
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
    ) {
      this.isDarkModeActive = true;
    }
  }
}
