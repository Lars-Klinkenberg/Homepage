import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PageIndexComponent } from './page-index/page-index.component';
import { ProjectsComponent } from './projects/projects.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HomeComponent,
    AboutComponent,
    PageIndexComponent,
    ProjectsComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  @ViewChild('home', { read: ElementRef }) homeElement!: ElementRef;
  @ViewChild('about', { read: ElementRef }) aboutElement!: ElementRef;
  @ViewChild('projects', { read: ElementRef }) projectsElement!: ElementRef;

  title = 'Portfoliopage';
  allPageIds = ['home', 'about', 'projects'];
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
}
