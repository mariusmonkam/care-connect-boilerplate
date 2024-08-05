// src/data/appData.ts

import { AppData } from "../types/interfaces";
const heroImage = require("../assets/care_connect_hero_image.jpeg");
const keyFeaturesImage = require("../assets/care_connect_key_features_image.jpeg");

// Sample app data with updated sections and new types

const appData: AppData = {
  companyName: "Care-Connect",
  navigation: [
    { name: "Home", href: "/home" },
    { name: "Patient Follow-Up", href: "/patient-follow-up" },
    { name: "Doctor Collaboration", href: "/doctor-collaboration" },
    { name: "Patient Portal", href: "/patient-portal" },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
  ],
  pages: {
    home: {
      sections: [
        {
          type: "HeroSection",
          title: "Welcome to Care-Connect",
          subtitle: "Connecting Patients and Providers",
          ctaText: "Get Started",
          image: heroImage,
        },
        {
          type: "FeatureSection",
          title: "Comprehensive Care Solutions",
          description:
            "Our platform offers a range of features to manage your health seamlessly.",
          image: keyFeaturesImage,
          ctaText: "Learn More",
          imagePosition: "right",
        },
        {
          type: "CallToAction",
          title: "Ready to Make a Difference?",
          ctaText: "Join Us",
        },
        {
          type: "PatientDashboard",
          patientName: "John Doe",
          upcomingAppointments: [
            {
              date: "2024-08-15",
              doctorName: "Dr. Smith",
              purpose: "Annual Check-up",
            },
            { date: "2024-08-20", doctorName: "Dr. Lee", purpose: "Follow-up" },
          ],
          recentTestResults: [
            { date: "2024-08-01", testName: "Blood Test", result: "Normal" },
            { date: "2024-07-25", testName: "X-Ray", result: "Clear" },
          ],
        },
        {
          type: "AppointmentScheduler",
          availableSlots: [
            { date: "2024-08-10", time: "09:00", doctorName: "Dr. Brown" },
            { date: "2024-08-12", time: "14:00", doctorName: "Dr. Green" },
          ],
        },
      ],
    },
    patientFollowUp: {
      sections: [
        {
          type: "HeroSection",
          title: "Patient Follow-Up",
          subtitle: "Stay on top of your health",
          ctaText: "Schedule Follow-Up",
          image: "/images/follow-up-hero.jpg",
        },
        {
          type: "PatientDashboard",
          patientName: "Jane Doe",
          upcomingAppointments: [
            {
              date: "2024-08-18",
              doctorName: "Dr. White",
              purpose: "Consultation",
            },
          ],
          recentTestResults: [
            { date: "2024-07-30", testName: "MRI", result: "Pending" },
          ],
        },
        {
          type: "MedicalRecordViewer",
          patientId: "12345",
          records: [
            {
              date: "2024-06-15",
              type: "Consultation",
              details: "Initial consultation with Dr. Black",
            },
            {
              date: "2024-07-01",
              type: "Lab Results",
              details: "Blood sugar levels checked",
            },
          ],
        },
      ],
    },
    doctorCollaboration: {
      sections: [
        {
          type: "HeroSection",
          title: "Doctor Collaboration",
          subtitle: "Work together for better patient outcomes",
          ctaText: "Start Collaborating",
          image: "/images/collaboration-hero.jpg",
        },
        {
          type: "DoctorCollaborationBoard",
          cases: [
            {
              id: "case1",
              patientName: "Alice Johnson",
              condition: "Diabetes",
              status: "Open",
            },
            {
              id: "case2",
              patientName: "Bob Brown",
              condition: "Hypertension",
              status: "In-Progress",
            },
          ],
        },
        {
          type: "FeatureSection",
          title: "Features for Doctors",
          description:
            "Collaborate on patient cases, share insights, and improve care.",
          image: "/images/doctor-features.jpg",
          ctaText: "Explore Features",
          imagePosition: "left",
        },
      ],
    },
    patientPortal: {
      sections: [
        {
          type: "HeroSection",
          title: "Patient Portal",
          subtitle: "Your health, your control",
          ctaText: "Access Portal",
          image: "/images/portal-hero.jpg",
        },
        {
          type: "PatientDashboard",
          patientName: "Emily Carter",
          upcomingAppointments: [
            {
              date: "2024-08-22",
              doctorName: "Dr. Wilson",
              purpose: "Routine Check-up",
            },
          ],
          recentTestResults: [
            { date: "2024-07-28", testName: "ECG", result: "Normal" },
          ],
        },
        {
          type: "AppointmentScheduler",
          availableSlots: [
            { date: "2024-08-15", time: "10:00", doctorName: "Dr. Adams" },
          ],
        },
        {
          type: "MedicalRecordViewer",
          patientId: "67890",
          records: [
            {
              date: "2024-07-10",
              type: "Consultation",
              details: "Consulted with Dr. Roberts",
            },
          ],
        },
      ],
    },
    about: {
      hero: {
        type: "HeroSection",
        title: "About Us",
        subtitle: "Learn more about our mission and team",
        ctaText: "Contact Us",
        image: "/images/about-hero.jpg",
      },
      mission: {
        title: "Our Mission",
        description:
          "To provide seamless healthcare solutions that connect patients and providers efficiently.",
      },
      team: [
        {
          name: "Dr. Samantha Green",
          role: "Chief Medical Officer",
          image: "/images/team-samantha.jpg",
        },
        { name: "Alex Johnson", role: "CTO", image: "/images/team-alex.jpg" },
      ],
      callToAction: {
        type: "CallToAction",
        title: "Join Our Team",
        ctaText: "Apply Now",
      },
    },
    contact: {
      address: "123 Health St, MedCity, TX 75001",
      phone: "+1 (555) 123-4567",
      email: "info@care-connect.com",
      sections: [
        {
          type: "ContactInfo",
          address: "123 Health St, MedCity, TX 75001",
          phone: "+1 (555) 123-4567",
          email: "info@care-connect.com",
        },
        {
          type: "CallToAction",
          title: "Get in Touch",
          ctaText: "Send Us a Message",
        },
      ],
    },
  },
  footer: {
    companyInfo: "Care-Connect | Providing Seamless Healthcare Solutions",
    companyLinks: [
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms of Service", href: "/terms" },
    ],
    socialLinks: [
      { name: "Facebook", href: "https://facebook.com/careconnect" },
      { name: "Twitter", href: "https://twitter.com/careconnect" },
    ],
    legalLinks: [{ name: "Legal Notices", href: "/legal" }],
  },
  theme: {
    "background-color": "#f5f5f5",
    "body-background-color": "#ffffff",
    "text-color": "#333333",
    "cta-background-color": "#007bff",
    "cta-text-color": "#ffffff",
    "cta-button-background-color": "#007bff",
    "cta-button-text-color": "#ffffff",
    "cta-button-hover-background-color": "#0056b3",
    "contact-form-background-color": "#ffffff",
    "submit-button-background-color": "#28a745",
    "submit-button-text-color": "#ffffff",
    "submit-button-hover-background-color": "#218838",
    "feature-heading-color": "#333333",
    "feature-text-color": "#666666",
    "footer-background-color": "#222222",
    "footer-text-color": "#ffffff",
    "footer-link-color": "#007bff",
    "footer-icon-color": "#ffffff",
    "header-background-color": "#007bff",
    "header-text-color": "#ffffff",
    "header-link-color": "#ffffff",
    "header-link-hover-color": "#f5f5f5",
    "hero-background-color": "#007bff",
    "hero-text-color": "#ffffff",
  },
};

export default appData;
