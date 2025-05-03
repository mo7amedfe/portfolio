import { NgStyle } from '@angular/common';
import { Component, HostListener } from '@angular/core';

import { NavComponent } from "./nav/nav.component";
import { AboutComponent } from "./about/about.component";
import { ExperienceComponent } from "./experience/experience.component";
import { ProjectsComponent } from "./projects/projects.component";
import { EducationComponent } from "./education/education.component";
import { SkillsComponent } from "./skills/skills.component";

@Component({
  selector: 'app-root',
  imports: [ NgStyle, NavComponent, AboutComponent, ExperienceComponent, ProjectsComponent, EducationComponent, SkillsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolio';

  spotlightStyle = { left: '0px', top: '0px' };

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    this.spotlightStyle = {
      left: `${event.clientX}px`,
      top: `${event.clientY}px`
    };
  }

}

