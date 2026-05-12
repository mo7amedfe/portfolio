import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, HostListener } from '@angular/core';
import {
  animate,
  style,
  transition,
  trigger,
} from '@angular/animations';

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
        (from, to) =>
          from !== to && to.endsWith('#down'),
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
        (from, to) =>
          from !== to && to.endsWith('#up'),
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
    { name: 'ABOUT', active: false },
    { name: 'Education', active: false },
    { name: 'Skills', active: false },
    { name: 'Experience', active: false },
    { name: 'Projects', active: false },
  ];
  activeSection: string = 'ABOUT';

  /** Bound to [@sectionTitle] — suffix #down / #up matches scroll direction (or nav order on click). */
  titleMotionState = 'ABOUT#down';

  private lastScrollY = 0;

  notificationVisible = false;

  ngAfterViewInit(): void {
    if (typeof window !== 'undefined') {
      this.lastScrollY =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
    }
  }
  notificationTimeout: any;

  activate(item: any) {
    this.items.forEach((i) => (i.active = false));
    item.active = true;
    if (item.name !== this.activeSection) {
      const fromIdx = this.items.findIndex((i) => i.name === this.activeSection);
      const toIdx = this.items.findIndex((i) => i.name === item.name);
      const dir =
        toIdx > fromIdx ? 'down' : toIdx < fromIdx ? 'up' : 'down';
      this.titleMotionState = `${item.name}#${dir}`;
    }
    this.activeSection = item.name;
  }

  @HostListener('window:scroll', [])
  onScroll() {
    const scrollPosition =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop;
    const scrollDelta = scrollPosition - this.lastScrollY;
    const scrollDirection: 'down' | 'up' =
      scrollDelta >= 0 ? 'down' : 'up';
    const navSm = document.getElementById('navs-sm');

    for (const item of this.items) {
      const sectionElement = document.getElementById(item.name);
      if (sectionElement) {
        const sectionTop =
          sectionElement.getBoundingClientRect().top + window.scrollY;
        const sectionHeight = sectionElement.offsetHeight;

        if (
          scrollPosition >= sectionTop - 50 &&
          scrollPosition < sectionTop + sectionHeight - 50
        ) {
          if (item.name !== this.activeSection) {
            this.titleMotionState = `${item.name}#${scrollDirection}`;
          }
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

    this.lastScrollY = scrollPosition;
  }

  copyMail() {
    navigator.clipboard.writeText('mohamed2233631@gmail.com')
      
      this.notificationVisible = true;
 
    setTimeout(() => {
      this.notificationVisible = false;
      
    }, 3000);
  }
}
