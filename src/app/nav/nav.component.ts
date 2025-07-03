import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  imports: [CommonModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css',
})
export class NavComponent {
  items = [
    { name: 'ABOUT', active: false },
    { name: 'Education', active: false },
    { name: 'Skills', active: false },
    { name: 'Experience', active: false },
    { name: 'Projects', active: false },
  ];
  activeSection: string = 'ABOUT';

  notificationVisible = false;
  notificationMessage = '';
  notificationTimeout: any;

  activate(item: any) {
    this.items.forEach((i) => (i.active = false));
    item.active = true;
    this.activeSection = item.name;
  }

  @HostListener('window:scroll', [])
  onScroll() {
    const scrollPosition =window.pageYOffset ||document.documentElement.scrollTop ||document.body.scrollTop;
    const navSm = document.getElementById('navs-sm');

    for (let item of this.items) {
      const sectionElement = document.getElementById(item.name);
      if (sectionElement) {
        const sectionTop =sectionElement.getBoundingClientRect().top + window.scrollY;
        const sectionHeight = sectionElement.offsetHeight;

        if (scrollPosition >= sectionTop - 50 && scrollPosition < sectionTop + sectionHeight - 50) {
          this.activeSection = item.name;

          if (navSm) {
            navSm.classList.add('show');
            navSm.classList.remove('hide');
          }

          this.items.forEach((i) => (i.active = i.name === item.name));
          break;
        }
      }
      if (item.name === 'ABOUT') {
        if (navSm) {
          navSm.classList.add('hide');
          navSm.classList.remove('show');
        }
      }
    }
  }

  copyMail() {
    navigator.clipboard.writeText('mohamed2233631@gmail.com').then(() => {
      this.notificationMessage = 'Copied: mohamed2233631@gmail.com';
      this.notificationVisible = true;
      if (this.notificationTimeout) {
        clearTimeout(this.notificationTimeout);
      }
      this.notificationTimeout = setTimeout(() => {
        this.notificationVisible = false;
      }, 3000);
    });
  }
}
