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

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
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

  ngAfterViewInit() {
    this.mainElement.nativeElement.addEventListener(
      'scroll',
      this.onViewportScroll.bind(this)
    );
  }

  public onViewportScroll() {
    const DELTA = 100;
    const TOP = 0;
    const home = this.homeElement.nativeElement.getBoundingClientRect();
    const about = this.aboutElement.nativeElement.getBoundingClientRect();
    const projects = this.projectsElement.nativeElement.getBoundingClientRect();
    const contact = this.contactElement.nativeElement.getBoundingClientRect();

    if (this.checkIfNumInRange(home.top, TOP, DELTA)) {
      this.currentPage = 0;
    }
    if (this.checkIfNumInRange(about.top, TOP, DELTA)) {
      this.currentPage = 1;
    }
    if (this.checkIfNumInRange(projects.top, TOP, DELTA)) {
      this.currentPage = 2;
    }
    if (this.checkIfNumInRange(contact.top, TOP, DELTA)) {
      this.currentPage = 3;
    }
  }

  title = 'Portfoliopage';
  allPageIds = ['home', 'about', 'projects', 'contact'];
  currentPage = 0;

  scrollToElement(elementId: string): void {
    let element;
    switch (elementId) {
      case 'home': {
        element = this.homeElement;
        break;
      }
      case 'about': {
        element = this.aboutElement;
        break;
      }
      case 'projects': {
        element = this.projectsElement;
        break;
      }
      case 'contact': {
        element = this.contactElement;
        break;
      }
      default:
        return;
    }

    if (element) {
      element.nativeElement.scrollIntoView({ behavior: 'smooth' });
    }
  }

  scrollToIndex(index: number) {
    this.scrollToElement(this.allPageIds[index]);
    this.currentPage = index;
  }

  checkIfNumInRange(num: number, target: number, delta: number): boolean {
    return num >= target - delta && num <= target + delta;
  }
}
