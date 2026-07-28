import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-nav',
  imports: [CommonModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css',
})
export class NavComponent {
  items = [
    { name: 'About', active: false },
    { name: 'Education', active: false },
    { name: 'Skills', active: false },
    { name: 'Experience', active: false },
    { name: 'Projects', active: false },
  ];

  activeSection = 'About';
  notificationVisible = false;

  activate(item: { name: string; active: boolean }) {
    this.items.forEach((navItem) => (navItem.active = false));
    item.active = true;
    this.activeSection = item.name;
  }

  @HostListener('window:scroll', [])
  onScroll() {
    const scrollPosition =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop;

    for (const item of this.items) {
      const sectionElement = document.getElementById(item.name);

      if (!sectionElement) {
        continue;
      }

      const sectionTop =
        sectionElement.getBoundingClientRect().top + window.scrollY;
      const sectionHeight = sectionElement.offsetHeight;

      if (
        scrollPosition >= sectionTop - 120 &&
        scrollPosition < sectionTop + sectionHeight - 120
      ) {
        this.activeSection = item.name;
        this.items.forEach(
          (navItem) => (navItem.active = navItem.name === item.name)
        );
        break;
      }
    }
  }

  copyMail() {
    navigator.clipboard.writeText('mohamed2233631@gmail.com');
    this.notificationVisible = true;

    setTimeout(() => {
      this.notificationVisible = false;
    }, 3000);
  }
}
