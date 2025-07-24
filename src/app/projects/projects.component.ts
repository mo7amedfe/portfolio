import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class ProjectsComponent {
  items = [
    {
      source_code: 'https://github.com/mo7amedfe/myEcommerce',
      imgSrc: 'assets/images/img.png',
      Link: 'https://mo7amedfe.github.io/myEcommerce/',
      developed_at: '2023',
      project_title: 'FreshCart',
      description:
        'I developed the complete frontend of a dynamic e-commerce website, providing a seamless and user-friendly shopping experience. The platform includes essential features such as a homepage showcasing products, category-based browsing, a fully functional shopping cart, and a secure online payment system. Additionally, it features a user authentication system with login and registration functionalities to ensure a personalized experience. The website is designed for responsiveness and optimized for performance to deliver a smooth experience across all devices.',
      project_technologies: [
        'Angular',
        'javaScript',
        'NodeJs',
        'CSS',
        'bootstrap',
      ],
    },
    {
      source_code: 'https://github.com/mo7amedfe/Realstate',
      imgSrc: 'assets/images/download.png',
      Link: 'https://mo7amedfe.github.io/Realstate',
      developed_at: '2024 - current',
      project_title: 'Realstate (BETA)',
      description:
        'This is a real estate marketplace built with the MERN stack and native CSS, allowing users to buy, sell, or rent properties. It includes a home page for browsing listings, a sell page for users to publish ads, and an admin interface to manage users and posts. Users can register and log in to access their profile page, which displays their name, picture, role, and published ads. I am the team leader of the project, collaborating with a backend developer while also contributing to backend development. The project is still in development, with planned improvements in performance and new features like chat between buyers and sellers and comments on posts.',
      project_technologies: [
        'React',
        'NodeJS',
        'CSS Native',
        'MongoDB',
        'ExpressJS',
      ],
    },

    {
      imgSrc: 'assets/images/Screenshot 2025-07-03 164804.png',
      Link: 'https://education-platform-omega.vercel.app',
      source_code: 'https://github.com/mo7amedfe/EducationPlatform',
      developed_at: '2025',
      project_title: 'Courses Platform',
      description:
        `An educational web platform designed to provide structured learning experiences through online courses. In addition to leading development, I designed the entire application structure and database schema from scratch, ensuring scalability, clarity, and efficient data flow. As the main frontend developer, I built the full UI using Angular 19, including dynamic components such as course lists, lesson pages, a final test module, user dashboards, and admin panels. The platform features authentication, cart functionality, enrolled courses, assignment submissions, and instructor review systems. It is fully responsive, performance-optimized, and architected with a modular and scalable frontend structure.
        for login as admin mail:admin@gmail.com password:@Mm123456 for login as instructor mail:instructor@gmail.com password:@Mm123456 for login as student you can register or by this credintial mail:student@gmail.com pass:@Mm12345`,
      project_technologies: [
        'Angular',
        'TypeScript',
        'Tailwind CSS',
        'NodeJS',
        'MongoDB',
      ],
    },
  ];

  isHovered: boolean = false;
  hover() {
    this.isHovered = true;
  }
  leave() {
    this.isHovered = false;
  }
}
