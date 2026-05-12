import { NgStyle } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';

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
export class AppComponent implements OnInit {
  title = 'portfolio';

  spotlightStyle = { left: '50vw', top: '50vh' };

  ngOnInit(): void {
    if (typeof window !== 'undefined') {
      this.spotlightStyle = {
        left: `${window.innerWidth / 2}px`,
        top: `${window.innerHeight / 2}px`
      };
    }
  }

  @HostListener('document:pointermove', ['$event'])
  onPointerMove(event: PointerEvent) {
    if (typeof window !== 'undefined' && window.matchMedia('(max-width: 767px)').matches) {
      return;
    }
    this.spotlightStyle = {
      left: `${event.clientX}px`,
      top: `${event.clientY}px`
    };
  }

}

