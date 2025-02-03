import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-nav',
  imports: [CommonModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
  items = [
    { name: 'ABOUT', active: false },
    { name: 'Education', active: false },
    { name: 'Skills', active: false },
    { name: 'Experience', active: false },
    { name: 'Projects', active: false },
  ];

  activate(item: any) {
    for (let i = 0; i < this.items.length; i++) {
      this.items[i].active = false

    }
    item.active=true;
  }

  activeSection = 'ABOUT'; 

  @HostListener('window:scroll', [])
  onScroll() {
    const sections = ['ABOUT', 'Education', 'Skills','Experience','Projects']; 
    const scrollPosition = window.scrollY; // Get scroll position

    sections.forEach(section => {
      const sectionElement = document.getElementById(section);
      if (sectionElement) {
        const sectionTop = sectionElement.offsetTop; // Get the top position of the section
        const sectionHeight = sectionElement.offsetHeight; // Get the height of the section

        // Check if the section is in the viewport
        if (scrollPosition >= sectionTop - 50 && scrollPosition < sectionTop + sectionHeight - 50) {
          this.activeSection = section;
        }
      }
    });
  }
}
