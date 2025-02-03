import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-education',
  imports: [CommonModule],
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})
export class EducationComponent {
  isHovered=false;
  hover(){
    this.isHovered=true
  }
  unhover(){
    this.isHovered=false
  }
}
