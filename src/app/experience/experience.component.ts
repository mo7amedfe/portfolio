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
      "duration": "2022-present",
      "job_title": "Frontend or Full Stack web developer",
      "description": "FreeLance jobs",
      "job_requirements_technologies": ["Angular", "React", "MongoDB", "ExpressJS", "NodeJS"]

    }
  ]
  isHovered: boolean = false
  hover() {

    this.isHovered = true
  }
  leave() {
    this.isHovered = false

  }
}
