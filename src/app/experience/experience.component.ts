import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent {
  items = [
    {
      duration: 'Jul 2023 - Present',
      job_title: 'Full-Stack Engineer',
      context: 'Freelance Projects',
      highlights: [
        'Translate project needs into use cases, system requirements, and clear technical plans.',
        'Design and implement database schemas and application architecture for maintainable products.',
        'Build responsive interfaces, REST APIs, and structured documentation across the project lifecycle.'
      ],
      technologies: ['Angular', 'React', 'Node.js', 'Express.js', 'MongoDB']
    }
  ];
}
