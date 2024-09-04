import { Component } from '@angular/core';
import { ThemingService } from '../theming.service';
import { CommonModule } from '@angular/common';

export interface Project {
  name: string;
  imagePath: string;
  description: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  constructor(public themingService: ThemingService) {}

  allProjects: Project[] = [
    {
      name: 'Chatbots',
      imagePath: 'assets/chatbot.png',
      description:
        'Played a pivotal role in the integration and enhancement of chatbot services for customers like toom Baumarkt and eprimo.',
    },
    {
      name: 'Smart Desk',
      imagePath: 'assets/smart_desk.png',
      description:
        'Working on controlling my Desk via Raspeberry Pi to monitor my time standing. Furthermore control the height of the desk.',
    },
    {
      name: 'Resume Page',
      imagePath: 'assets/resume.png',
      description:
        'A personal resume built as a responsive webpage, designed for seamless viewing on digital devices and optimized for high-quality, professional printing with consistent formatting across platforms.',
    },
  ];
  currentProject = 0;

  switchProject(direction: 'left' | 'right') {
    const increment = direction === 'right' ? 1 : -1;
    this.currentProject =
      (this.currentProject + increment + this.allProjects.length) %
      this.allProjects.length;
  }
}
