import { Component } from '@angular/core';

export interface Project {
  name: string;
  imagePath: string;
  description: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  allProjects: Project[] = [
    {
      name: 'Chatbots',
      imagePath: 'assets/placeholder.png',
      description:
        'I worked in a small team on the toom.de and eprimo.de chatbot integration',
    },
    {
      name: 'Smart Desk',
      imagePath: 'test',
      description: 'test',
    },
    {
      name: 'Resume Page',
      imagePath: 'test',
      description: 'My Resume as a Website',
    },
  ];
  currentProject = 0;

  switchProject(direction: 'left' | 'right') {
    if (direction == 'left' && this.currentProject == 0) {
      this.currentProject = this.allProjects.length - 1;
    } else if (direction == 'left') {
      this.currentProject--;
    }

    if (
      direction == 'right' &&
      this.currentProject == this.allProjects.length - 1
    ) {
      this.currentProject = 0;
    } else if (direction == 'right') {
      this.currentProject++;
    }
  }
}
