// src/data/appData.ts

import { AppData } from "../types/interfaces";

export const appData: AppData = {
  companyName: "Care-Connect",
  navigation: [
    { name: "Home", href: "/" },
    { name: "Patient Follow-Up", href: "/patient-follow-up" },
    { name: "Doctor Collaboration", href: "/doctor-collaboration" },
    { name: "Patient Portal", href: "/patient-portal" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ],
  pages: {
    home: {
      sections: [
        {
          type: "HeroSection",
          title: "Welcome to Care-Connect",
          subtitle: "Revolutionizing Healthcare Communication",
          ctaText: "Get Started",
          image: "https://example.com/images/healthcare-hero.jpg",
        },
        {
          type: "FeatureSection",
          title: "Streamlined Patient Care",
          description:
            "Efficiently manage patient information and appointments.",
          image: "https://example.com/images/patient-care.jpg",
          ctaText: "Learn More",
          imagePosition: "right",
        },
        {
          type: "CallToAction",
          title: "Ready to transform your practice?",
          ctaText: "Sign Up Now",
        },
        {
          type: "PatientDashboard",
          patientName: "John Doe",
          upcomingAppointments: [
            {
              date: "2024-08-15",
              doctorName: "Dr. Smith",
              purpose: "Annual Checkup",
            },
          ],
          recentTestResults: [
            { date: "2024-07-30", testName: "Blood Test", result: "Normal" },
          ],
        },
      ],
    },
    patientFollowUp: {
      sections: [
        {
          type: "HeroSection",
          title: "Patient Follow-Up",
          subtitle: "Ensuring Continuous Care",
          ctaText: "View Patients",
          image: "https://example.com/images/follow-up.jpg",
        },
        {
          type: "PatientDashboard",
          patientName: "Jane Smith",
          upcomingAppointments: [
            {
              date: "2024-08-20",
              doctorName: "Dr. Johnson",
              purpose: "Post-op Check",
            },
          ],
          recentTestResults: [
            { date: "2024-08-01", testName: "X-Ray", result: "Clear" },
          ],
        },
        {
          type: "MedicalRecordViewer",
          patientId: "12345",
          records: [
            {
              date: "2024-07-01",
              type: "Prescription",
              details: "Amoxicillin 500mg",
            },
            { date: "2024-06-15", type: "Diagnosis", details: "Sinusitis" },
          ],
        },
      ],
    },
    doctorCollaboration: {
      sections: [
        {
          type: "HeroSection",
          title: "Doctor Collaboration Platform",
          subtitle: "Working Together for Better Outcomes",
          ctaText: "Join a Case",
          image: "https://example.com/images/doctor-collab.jpg",
        },
        {
          type: "DoctorCollaborationBoard",
          cases: [
            {
              id: "C001",
              patientName: "Alice Brown",
              condition: "Complex Cardiac Case",
              status: "Open",
            },
            {
              id: "C002",
              patientName: "Bob Wilson",
              condition: "Rare Genetic Disorder",
              status: "In Progress",
            },
          ],
        },
        {
          type: "FeatureSection",
          title: "Secure Collaboration",
          description:
            "Discuss cases securely with colleagues from around the world.",
          image: "https://example.com/images/secure-collab.jpg",
          ctaText: "Learn More",
          imagePosition: "left",
        },
      ],
    },
    patientPortal: {
      sections: [
        {
          type: "HeroSection",
          title: "Patient Portal",
          subtitle: "Your Health Information at Your Fingertips",
          ctaText: "Access Records",
          image: "https://example.com/images/patient-portal.jpg",
        },
        {
          type: "PatientDashboard",
          patientName: "Emma Davis",
          upcomingAppointments: [
            {
              date: "2024-09-01",
              doctorName: "Dr. Lee",
              purpose: "Vaccination",
            },
          ],
          recentTestResults: [
            {
              date: "2024-08-15",
              testName: "Cholesterol",
              result: "Slightly Elevated",
            },
          ],
        },
        {
          type: "AppointmentScheduler",
          availableSlots: [
            { date: "2024-09-10", time: "10:00 AM", doctorName: "Dr. Garcia" },
            { date: "2024-09-11", time: "2:00 PM", doctorName: "Dr. Patel" },
          ],
        },
        {
          type: "MedicalRecordViewer",
          patientId: "67890",
          records: [
            {
              date: "2024-08-01",
              type: "Lab Result",
              details: "Cholesterol Test",
            },
            {
              date: "2024-07-15",
              type: "Doctor's Note",
              details: "Follow-up on medication",
            },
          ],
        },
      ],
    },
    about: {
      hero: {
        type: "HeroSection",
        title: "About Care-Connect",
        subtitle: "Our Mission and Vision",
        ctaText: "Join Our Team",
        image: "https://example.com/images/about-hero.jpg",
      },
      mission: {
        title: "Our Mission",
        description:
          "To revolutionize healthcare communication and improve patient outcomes through innovative technology.",
      },
      team: [
        {
          name: "Dr. Sarah Johnson",
          role: "Chief Medical Officer",
          image: "https://example.com/images/sarah-johnson.jpg",
        },
        {
          name: "Michael Chen",
          role: "Chief Technology Officer",
          image: "https://example.com/images/michael-chen.jpg",
        },
        {
          name: "Emily Rodriguez",
          role: "Head of Patient Relations",
          image: "https://example.com/images/emily-rodriguez.jpg",
        },
      ],
      callToAction: {
        type: "CallToAction",
        title: "Join us in transforming healthcare",
        ctaText: "See Open Positions",
      },
    },
    contact: {
      address: "123 Health Street, Medical City, MC 12345",
      phone: "+1 (555) 123-4567",
      email: "info@care-connect.com",
      sections: [
        {
          type: "ContactInfo",
          address: "123 Health Street, Medical City, MC 12345",
          phone: "+1 (555) 123-4567",
          email: "info@care-connect.com",
        },
        {
          type: "CallToAction",
          title: "Have questions? We're here to help!",
          ctaText: "Contact Us Now",
        },
      ],
    },
  },
  footer: {
    companyInfo: "© 2024 Care-Connect. All rights reserved.",
    companyLinks: [
      { name: "Home", href: "/" },
      { name: "About Us", href: "/about" },
      { name: "Services", href: "/services" },
      { name: "Careers", href: "/careers" },
    ],
    socialLinks: [
      { name: "Facebook", href: "https://facebook.com/care-connect" },
      { name: "Twitter", href: "https://twitter.com/care-connect" },
      { name: "LinkedIn", href: "https://linkedin.com/company/care-connect" },
    ],
    legalLinks: [
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms of Service", href: "/terms" },
      { name: "HIPAA Compliance", href: "/hipaa" },
    ],
  },
  theme: {
    "background-color": "#f0f8ff",
    "body-background-color": "#ffffff",
    "text-color": "#333333",
    "cta-background-color": "#4169e1",
    "cta-text-color": "#ffffff",
    "cta-button-background-color": "#ffffff",
    "cta-button-text-color": "#4169e1",
    "cta-button-hover-background-color": "#e6e6fa",
    "contact-form-background-color": "#ffffff",
    "submit-button-background-color": "#4169e1",
    "submit-button-text-color": "#ffffff",
    "submit-button-hover-background-color": "#3255b2",
    "feature-heading-color": "#2c3e50",
    "feature-text-color": "#34495e",
    "footer-background-color": "#2c3e50",
    "footer-text-color": "#ecf0f1",
    "footer-link-color": "#bdc3c7",
    "footer-icon-color": "#ecf0f1",
    "header-background-color": "#4169e1",
    "header-text-color": "#ffffff",
    "header-link-color": "#ffffff",
    "header-link-hover-color": "#e6e6fa",
    "hero-background-color": "#4169e1",
    "hero-text-color": "#ffffff",
  },
};
