import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  ViewChild,
} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PageIndexComponent } from './page-index/page-index.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { ThemingService } from './theming.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    HomeComponent,
    AboutComponent,
    PageIndexComponent,
    ProjectsComponent,
    ContactComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements AfterViewInit {
  @ViewChild('main', { read: ElementRef }) mainElement!: ElementRef;
  @ViewChild('home', { read: ElementRef }) homeElement!: ElementRef;
  @ViewChild('about', { read: ElementRef }) aboutElement!: ElementRef;
  @ViewChild('projects', { read: ElementRef }) projectsElement!: ElementRef;
  @ViewChild('contact', { read: ElementRef }) contactElement!: ElementRef;

  title = 'Portfoliopage';
  allPageIds = ['home', 'about', 'projects', 'contact'];
  currentPage = 0;
  /**
   * The index to which the component is currently scrolling.
   * -1 not auto scrolling
   * index of scroll to page
   */
  currentlyScrollingToIndex = -1;

  constructor(public themingService: ThemingService) {
    themingService.loadDarkModeSettings();
  }

  ngAfterViewInit() {
    this.mainElement.nativeElement.addEventListener(
      'scroll',
      this.onViewportScroll.bind(this)
    );
  }

  public onViewportScroll() {
    const DELTA = 100;
    const TOP = 0;
    const elements = [
      this.homeElement,
      this.aboutElement,
      this.projectsElement,
      this.contactElement,
    ];

    for (let i = 0; i < elements.length; i++) {
      const rect = elements[i].nativeElement.getBoundingClientRect();
      if (this.checkIfNumInRange(rect.top, TOP, DELTA)) {
        this.setCurrentPage(i);
      }
    }
  }

  /**
   * Sets the current page to the specified index. if its not currently scrolling
   *
   * @param index - The index of the page to set as the current page.
   */
  setCurrentPage(index: number) {
    // if goal index of auto scroll is reached
    if (this.currentlyScrollingToIndex == index) {
      this.currentPage = index;
      this.currentlyScrollingToIndex = -1;
      return;
    }
    // if auto scrolling and index not reached
    if (this.currentlyScrollingToIndex != -1) {
      return;
    }

    // on manual scroll
    this.currentPage = index;
  }

  scrollToElement(elementId: string): void {
    const elementMap: { [key: string]: ElementRef } = {
      home: this.homeElement,
      about: this.aboutElement,
      projects: this.projectsElement,
      contact: this.contactElement,
    };

    if (elementMap[elementId]) {
      elementMap[elementId].nativeElement.scrollIntoView({
        behavior: 'smooth',
      });
    }
  }

  scrollToIndex(index: number) {
    this.scrollToElement(this.allPageIds[index]);
    this.currentlyScrollingToIndex = index;
  }

  checkIfNumInRange(num: number, target: number, delta: number): boolean {
    return num >= target - delta && num <= target + delta;
  }
}
