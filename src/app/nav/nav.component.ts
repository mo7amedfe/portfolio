import { CommonModule } from '@angular/common';
import {
  animate,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { AfterViewInit, Component, HostListener } from '@angular/core';

const titleEase = 'cubic-bezier(0.22, 1, 0.36, 1)';
const titleEaseAlt = 'cubic-bezier(0.16, 1, 0.3, 1)';

@Component({
  selector: 'app-nav',
  imports: [CommonModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css',
  animations: [
    trigger('sectionTitle', [
      transition(
        (from, to) => from !== to && to.endsWith('#down'),
        [
          style({
            opacity: 0,
            transform: 'translateY(24px) scale(0.92)',
            filter: 'blur(12px)',
          }),
          animate(
            `480ms ${titleEase}`,
            style({
              opacity: 1,
              transform: 'translateY(0) scale(1)',
              filter: 'blur(0)',
            }),
          ),
        ],
      ),
      transition(
        (from, to) => from !== to && to.endsWith('#up'),
        [
          style({
            opacity: 0,
            transform: 'translateY(-22px) scale(0.94)',
            filter: 'blur(12px)',
          }),
          animate(
            `480ms ${titleEaseAlt}`,
            style({
              opacity: 1,
              transform: 'translateY(0) scale(1)',
              filter: 'blur(0)',
            }),
          ),
        ],
      ),
    ]),
  ],
})
export class NavComponent implements AfterViewInit {
  items = [
    { name: 'About', active: false },
    { name: 'Education', active: false },
    { name: 'Skills', active: false },
    { name: 'Experience', active: false },
    { name: 'Projects', active: false },
  ];

  activeSection = 'About';
  titleMotionState = 'About#down';
  notificationVisible = false;

  private lastScrollY = 0;
  private notificationTimeout?: ReturnType<typeof setTimeout>;

  ngAfterViewInit(): void {
    this.lastScrollY =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop;
  }

  activate(item: { name: string; active: boolean }) {
    this.items.forEach((navItem) => (navItem.active = false));
    item.active = true;

    if (item.name !== this.activeSection) {
      const fromIndex = this.items.findIndex(
        (navItem) => navItem.name === this.activeSection,
      );
      const toIndex = this.items.findIndex(
        (navItem) => navItem.name === item.name,
      );
      const direction = toIndex < fromIndex ? 'up' : 'down';
      this.titleMotionState = `${item.name}#${direction}`;
    }

    this.activeSection = item.name;
  }

  @HostListener('window:scroll', [])
  onScroll() {
    const scrollPosition =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop;
    const scrollDirection = scrollPosition >= this.lastScrollY ? 'down' : 'up';

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
        if (item.name !== this.activeSection) {
          this.titleMotionState = `${item.name}#${scrollDirection}`;
        }

        this.activeSection = item.name;
        this.items.forEach(
          (navItem) => (navItem.active = navItem.name === item.name),
        );
        break;
      }
    }

    this.lastScrollY = scrollPosition;
  }

  copyMail() {
    navigator.clipboard.writeText('mohamed2233631@gmail.com');
    this.notificationVisible = true;

    if (this.notificationTimeout) {
      clearTimeout(this.notificationTimeout);
    }

    this.notificationTimeout = setTimeout(() => {
      this.notificationVisible = false;
    }, 3000);
  }
}
