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
      project_subtitle: 'AI-Powered Smart Home Safety Platform',
      project_type: 'Graduation Project',
      developed_at: 'Feb 2025 - Jun 2026',
      description:
        'An AI-powered smart home safety platform combining IoT, computer vision, real-time communication, and mobile technologies to detect fire, gas and water leaks, intrusion, abnormal power consumption, and unauthorized access, then deliver instant alerts and actionable insights.',
      highlights: [
        'Led a six-engineer team, contributing to system architecture, key technical decisions, and MongoDB database design and data modeling.',
        'Developed the Dashboard, Alerts, and Analytics modules end to end; built mobile authentication and FCM/Socket.IO real-time communication.',
        'Designed the Sensor & Camera Simulator for realistic IoT and face-recognition testing; earned 2nd place faculty-wide and a hackathon nomination.'
      ],
      project_technologies: [
        'React Native',
        'Node.js',
        'Express.js',
        'MongoDB',
        'Socket.IO',
        'FCM',
        'Computer Vision',
        'IoT'
      ],
      post_link:
        'https://www.linkedin.com/posts/mohameddahmed1_hackathon-activity-7481765322652475392-XlT_',
      source_codes: [
        {
          label: 'Mobile app source',
          url: 'https://github.com/mohamedsalah-2003/AegisIQ-SmartHomeEndUserApp'
        },
        {
          label: 'Backend source',
          url: 'https://github.com/MustafaDols/Smart-Home-API'
        },
        {
          label: 'Simulator source',
          url: 'https://github.com/mohamedsalah-2003/AegisIQ-CameraAndSensorSemulatorApp'
        },
        {
          label: 'AI service source',
          url: 'https://github.com/Abdelrahmanyehia98/smart-home-anomaly-detection-ai'
        }
      ]
    },
    {
      source_codes: [
        {
          label: 'Frontend source',
          url: 'https://github.com/mohamedsalah-2003/EducationPlatform'
        },
        {
          label: 'Backend & ERD',
          url: 'https://github.com/mohamedsalah-2003/EducationPlatformBackEnd'
        }
      ],
      live_link: 'https://education-platform-omega.vercel.app',
      imgSrc: 'assets/images/Screenshot 2025-07-03 164804.png',
      developed_at: 'Mar 2025 - Jun 2025',
      project_title: 'GenC Education Platform',
      project_subtitle: 'Secure learning and payment platform',
      project_type: 'Full-Stack Project',
      description:
        'A production-oriented learning management system connecting students, instructors, and administrators through course discovery, schedules, video lessons, assignments, testing, grading, feedback, and secure Stripe enrollment.',
      highlights: [
        'Built responsive role-specific experiences with Angular 19, RxJS, Bootstrap, reactive forms, and signed Cloudinary video uploads.',
        'Implemented revocable JWT authentication, role- and resource-based authorization, login throttling, rate limits, structured logging, health checks, and automated tests.',
        'Engineered exactly-once enrollment with verified Stripe webhooks, idempotency keys, distributed MongoDB locks, TTL expiry, unique constraints, and atomic transactions.'
      ],
      project_technologies: [
        'Angular 19',
        'RxJS',
        'Bootstrap',
        'JavaScript',
        'Node.js',
        'Express.js',
        'MongoDB',
        'Mongoose',
        'Stripe',
        'Cloudinary'
      ]
    },
    {
      source_codes: [
        {
          label: 'Source code',
          url: 'https://github.com/mohamedsalah-2003/Realstate'
        }
      ],
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
