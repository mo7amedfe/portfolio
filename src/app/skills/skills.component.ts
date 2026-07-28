import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  skills = [
    { icon: 'fa-brands fa-angular', title: 'Angular' },
    { icon: 'fa-brands fa-react', title: 'React' },
    { icon: 'fa-brands fa-react', title: 'React Native' },
    { icon: 'fa-brands fa-node-js', title: 'Node.js' },
    { icon: 'fa-brands fa-js', title: 'TypeScript' },
    { kind: 'mongodb', title: 'MongoDB' },
    { kind: 'express', title: 'Express.js' },
    { icon: 'fa-brands fa-java', title: 'Java' },
    { icon: 'fa-brands fa-python', title: 'Python' },
    { icon: 'fa-brands fa-git-alt', title: 'Git' }
  ];

  supportingSkills = [
    'JavaScript',
    'C++',
    'HTML & CSS',
    'SCSS',
    'Bootstrap',
    'Tailwind CSS',
    'jQuery',
    'Oracle',
    'REST APIs',
    'OOP',
    'MVC',
    'Design Patterns'
  ];
}
