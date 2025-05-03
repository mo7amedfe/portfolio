import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  items = [
    { "imgSrc":"assets/images/img.png","Link":"https://mo7amedfe.github.io/myEcommerce/","developed_at": "2023", "project_title": "FreshCart", "description": "I developed the complete frontend of a dynamic e-commerce website, providing a seamless and user-friendly shopping experience. The platform includes essential features such as a homepage showcasing products, category-based browsing, a fully functional shopping cart, and a secure online payment system. Additionally, it features a user authentication system with login and registration functionalities to ensure a personalized experience. The website is designed for responsiveness and optimized for performance to deliver a smooth experience across all devices.", "project_technologies": ["Angular", "javaScript", "NodeJs", "CSS","bootstrap"]},
    { "imgSrc":"assets/images/download.png","Link":"https://mo7amedfe.github.io/Realstate","developed_at": "2024 - current", "project_title": "Realstate (BETA)", "description": " This is a real estate marketplace built with the MERN stack and native CSS, allowing users to buy, sell, or rent properties. It includes a home page for browsing listings, a sell page for users to publish ads, and an admin interface to manage users and posts. Users can register and log in to access their profile page, which displays their name, picture, role, and published ads. I am the team leader of the project, collaborating with a backend developer while also contributing to backend development. The project is still in development, with planned improvements in performance and new features like chat between buyers and sellers and comments on posts.", "project_technologies": ["React", "NodeJS", "CSS Native", "MongoDB","ExpressJS"]}
  ]
  isHovered: boolean = false
  hover() {

    this.isHovered = true
  }
  leave() {
    this.isHovered = false

   }
}
