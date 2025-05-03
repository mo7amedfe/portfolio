import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';

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
  activeSection: string = 'ABOUT';

  activate(item: any) {
    this.items.forEach(i => i.active = false); 
    item.active = true
    this.activeSection = item.name; 
  }



  // @HostListener('window:scroll', [])
  // onScroll() {
  //   const sections = ['ABOUT', 'Education', 'Skills', 'Experience', 'Projects', 'nav'];
  //   const navSm = document.getElementById('navs-sm');
  //   const scrollPosition = window.scrollY;

  //   sections.forEach(section => {
  //     const sectionElement = document.getElementById(section);

  //     if (sectionElement) {
  //       const rect = sectionElement.getBoundingClientRect();
  //       const sectionTop = rect.top + window.scrollY; // Use `rect.top` for accurate position
  //       const sectionHeight = sectionElement.offsetHeight;

  //       if (scrollPosition >= sectionTop - 50 && scrollPosition < sectionTop + sectionHeight - 50) {
  //         if (section === 'nav') {
  //           this.activeSection = 'ABOUT';
  //           if (navSm) {
  //             navSm.classList.remove('show');
  //             navSm.classList.add('hide');
  //           }
  //         } else {
  //           this.activeSection = section;
  //           if (navSm) {
  //             navSm.classList.add('show');
  //             navSm.classList.remove('hide');
  //           }
  //         }

  //         console.log('Active Section:', this.activeSection); // Debug log
  //       }
  //     }
  //   });
  // }
  @HostListener('window:scroll', [])

  onScroll() {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
    const navSm = document.getElementById('navs-sm');

    for (let item of this.items) {
      const sectionElement = document.getElementById(item.name);
      if (sectionElement) {
        const sectionTop = sectionElement.getBoundingClientRect().top + window.scrollY;
        const sectionHeight = sectionElement.offsetHeight;

        if (scrollPosition >= sectionTop - 50 && scrollPosition < sectionTop + sectionHeight - 50) {
          this.activeSection = item.name;

          if (navSm) {
            navSm.classList.add('show');
            navSm.classList.remove('hide');
          }

          this.items.forEach(i => i.active = i.name === item.name);
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
    navigator.clipboard.writeText("mohamed2233631@gmail.com").then(() => {
      alert("Copied: mohamed2233631@gmail.com");
    });

  }


}

// import { CommonModule } from '@angular/common';
// import { Component, AfterViewInit, HostListener } from '@angular/core';

// @Component({
//   selector: 'app-nav',
//   imports: [CommonModule],
//   templateUrl: './nav.component.html',
//   styleUrl: './nav.component.css'
// })
// export class NavComponent implements AfterViewInit {
//   items = [
//     { name: 'ABOUT', active: false },
//     { name: 'Education', active: false },
//     { name: 'Skills', active: false },
//     { name: 'Experience', active: false },
//     { name: 'Projects', active: false },
//   ];

//   activeSection = 'ABOUT';

//   activate(item: any) {
//     this.items.forEach(i => i.active = false);
//     item.active = true;
//     this.activeSection = item.name;
//   }

//   ngAfterViewInit() {
//     this.setupIntersectionObserver();
//     this.onScroll(); // Initial call to set the active section
//   }

//   setupIntersectionObserver() {
//     const sections = ['ABOUT', 'Education', 'Skills', 'Experience', 'Projects', 'nav'];
//     const observerOptions = {
//       root: null,
//       rootMargin: '-50px 0px', // Adjust this for better accuracy
//       threshold: [0, 0.5, 1], // Trigger at 0%, 50%, and 100% visibility
//     };

//     const observer = new IntersectionObserver((entries) => {
//       entries.forEach(entry => {
//         if (entry.isIntersecting) {
//           const section = entry.target.id;
//           console.log(`Section in view: ${section}, Intersection Ratio: ${entry.intersectionRatio}`);

//           // Update the active section if the intersection ratio is high enough
//           if (entry.intersectionRatio >= 0.5) {
//             this.activeSection = section === 'nav' ? 'ABOUT' : section;
//           }
//         }
//       });
//     }, observerOptions);

//     sections.forEach(section => {
//       const sectionElement = document.getElementById(section);
//       if (sectionElement) {
//         observer.observe(sectionElement);
//       } else {
//         console.error(`Section element not found: ${section}`);
//       }
//     });
//   }

//   @HostListener('window:scroll', [])
//   onScroll() {
//     const sections = ['ABOUT', 'Education', 'Skills', 'Experience', 'Projects', 'nav'];
//     const navSm = document.getElementById('navs-sm');
//     const scrollPosition = window.scrollY;

//     let closestSection = this.activeSection;
//     let closestDistance = Infinity;

//     sections.forEach(section => {
//       const sectionElement = document.getElementById(section);
//       if (sectionElement) {
//         const rect = sectionElement.getBoundingClientRect();
//         const sectionTop = rect.top + window.scrollY;
//         const sectionHeight = sectionElement.offsetHeight;

//         // Calculate the distance from the top of the viewport to the section
//         const distance = Math.abs(scrollPosition - sectionTop);

//         // Find the section closest to the top of the viewport
//         if (distance < closestDistance) {
//           closestDistance = distance;
//           closestSection = section === 'nav' ? 'ABOUT' : section;
//         }
//       }
//     });

//     // Update the active section
//     if (closestSection !== this.activeSection) {
//       this.activeSection = closestSection;
//       console.log(`Active Section (Scroll): ${this.activeSection}`);

//       // Update the navSm visibility
//       if (navSm) {
//         if (this.activeSection === 'ABOUT') {
//           navSm.classList.remove('show');
//           navSm.classList.add('hide');
//         } else {
//           navSm.classList.add('show');
//           navSm.classList.remove('hide');
//         }
//       }
//     }
//   }

//   copyMail() {
//     navigator.clipboard.writeText("mohamed2233631@gmail.com").then(() => {
//       alert("Copied: mohamed2233631@gmail.com");
//     });
//   }
// }