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
    { "icon": "fa-brands fa-angular", "title": "Angular" },
    { "icon": "fa-brands fa-react", "title": "React" },
    { "icon": "fa-brands fa-node", "title": "NodeJS" },
    { "icon": "fa-brands fa-js", "title": "JS" },
    { "imgSvg": '', "title": "MongoDB" },
    { "imgSrc": "", "title": "ExpressJS" },
    { "icon": "fa-brands fa-java", "title": "JAVA" }
  ];
isHovered=false;
  hover(){
this.isHovered=true
  }
  unhover(){
    this.isHovered=false
      }
}
