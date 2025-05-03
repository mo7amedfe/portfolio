import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  isHovered: boolean = false
  hover() {
    this.isHovered = true
  }
  unhover() {
    this.isHovered = false
  }

}


