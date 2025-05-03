import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-education',
  imports: [CommonModule],
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})
export class EducationComponent {
  isHovered = false;
  hover() {
    this.isHovered = true
  }
  unhover() {
    this.isHovered = false
  }


  @HostListener('window:scroll', [])
  onScroll() {
    const scrollPosition = window.scrollY; // Get scroll position
    const section = document.getElementById('ABOUT')
    const nav = document.getElementById('nav-edu')
    if (section && nav) {
      const sectionTop = section.offsetTop; // Get the top position of the section
      const sectionHeight = section.offsetHeight; // Get the height of the section
      const navHeight = nav.offsetHeight;
      const navTop = nav.offsetTop;


      // if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
      //   nav.style.position = "fixed";
      //   nav.style.width = "100%";
      //   nav.style.top = "0";
      //   nav.style.right = "0";
      //   nav.style.left = "0";

      // }
      // if (scrollPosition < sectionTop || scrollPosition > sectionTop + sectionHeight) {

      //   nav.style.position = "static";
      //   nav.style.width = "100%";
      //   nav.style.top = `auto`;
      //   nav.style.right = "auto";
      //   nav.style.left = "auto";
      // }
    }

  }

}
