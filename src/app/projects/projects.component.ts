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
      project_title: 'AegisIQ',
      project_subtitle: 'Smart Home Safety Platform',
      project_type: 'Graduation Project',
      developed_at: 'Feb 2025 - Jun 2026',
      description:
        'An AI-powered smart home platform that monitors IoT sensor data, detects abnormal events, supports face-recognition security, and delivers real-time alerts through a mobile application.',
      highlights: [
        'Led system architecture and data modeling while building Dashboard, Alerts, and Analytics modules.',
        'Built FCM and Socket.IO communication plus a Sensor & Camera Simulator for IoT testing.',
        'Awarded 2nd place in the CS department and selected for a hackathon.'
      ],
      project_technologies: [
        'React Native',
        'Node.js',
        'Socket.IO',
        'FCM',
        'IoT'
      ]
    },
    {
      source_code: 'https://github.com/mohamedsalah-2003/EducationPlatform',
      live_link: 'https://education-platform-omega.vercel.app',
      imgSrc: 'assets/images/Screenshot 2025-07-03 164804.png',
      developed_at: 'Mar 2025 - Jun 2025',
      project_title: 'E-Learning Platform',
      project_subtitle: 'Full end-to-end learning experience',
      project_type: 'Demo / Freelance',
      description:
        'A complete MEAN-stack learning platform with course management, video lessons, quizzes, student workflows, instructor feedback, and a full administration dashboard.',
      highlights: [
        'Handled design, development, database structure, and deployment.',
        'Built modular Angular interfaces for students, instructors, and administrators.',
        'Focused on scalable architecture and maintainable application structure.'
      ],
      project_technologies: [
        'Angular',
        'TypeScript',
        'Tailwind CSS',
        'Node.js',
        'Express.js',
        'MongoDB'
      ]
    },
    {
      source_code: 'https://github.com/mohamedsalah-2003/Realstate',
      live_link: 'https://mohamedsalah-2003.github.io/Realstate',
      imgSrc: 'assets/images/download.png',
      developed_at: 'Nov 2023 - Dec 2023',
      project_title: 'Real Estate Marketplace',
      project_subtitle: 'Property marketplace and administration',
      project_type: 'Academic',
      description:
        'A MERN application for publishing and browsing property listings with search filters, user profiles, and an administration dashboard.',
      highlights: [
        'Led the development team, coordinated tasks, and tracked project progress.',
        'Designed the database schema and overall architecture for maintainability.',
        'Delivered clean, documented code that supports future enhancement.'
      ],
      project_technologies: [
        'React',
        'Node.js',
        'Express.js',
        'MongoDB',
        'CSS'
      ]
    }
  ];
}
