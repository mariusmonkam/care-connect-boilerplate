// src/data/appData.ts

import { AppData } from "../types/interfaces";

// Images imported using require
const heroImage = require("../assets/care_connect_hero_image.jpeg");
const keyFeaturesImage = require("../assets/care_connect_key_features_image.jpeg");
const collaborationImage = require("../assets/doctor_collaboration_image.jpg");

// Define the app data
const appData: AppData = {
  companyName: "Care-Connect",
  navigation: [
    { name: "Home", href: "/home" },
    { name: "Doctor Portal", href: "/doctor-portal" },
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
          title: "Connect with Experts for Your Health Needs",
          ctaText: "Schedule a Consultation",
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
          medications: [
            { name: "Aspirin", dosage: "75mg", frequency: "Daily" },
            { name: "Metformin", dosage: "500mg", frequency: "Twice a day" },
          ],
          recentVisits: [
            {
              date: "2024-06-10",
              doctorName: "Dr. Brown",
              visitSummary: "General check-up, all vitals normal.",
            },
            {
              date: "2024-05-22",
              doctorName: "Dr. White",
              visitSummary: "Follow-up on blood test results.",
            },
          ],
        },
        {
          type: "AppointmentScheduler",
          availableSlots: [
            {
              date: "2024-08-10",
              time: "09:00",
              doctorName: "Dr. Brown",
              specialization: "Cardiology",
            },
            {
              date: "2024-08-12",
              time: "14:00",
              doctorName: "Dr. Green",
              specialization: "Dermatology",
            },
          ],
          patientId: "12345",
          scheduledAppointments: [
            {
              date: "2024-08-15",
              time: "10:00",
              doctorName: "Dr. Smith",
              purpose: "Annual Check-up",
              status: "scheduled",
            },
            {
              date: "2024-08-20",
              time: "11:00",
              doctorName: "Dr. Lee",
              purpose: "Follow-up",
              status: "scheduled",
            },
          ],
        },
        {
          type: "CallToAction", // Added CallToAction here
          title: "Take Control of Your Health Today",
          ctaText: "Manage Your Health",
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
          image: "/images/patient-follow-up.jpg",
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
          medications: [
            { name: "Ibuprofen", dosage: "200mg", frequency: "As needed" },
          ],
          recentVisits: [
            {
              date: "2024-06-05",
              doctorName: "Dr. Black",
              visitSummary: "Initial consultation and medical history review.",
            },
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
              doctorName: "Dr. Black",
            },
            {
              date: "2024-07-01",
              type: "Lab Results",
              details: "Blood sugar levels checked",
              doctorName: "Dr. White",
            },
          ],
        },
      ],
    },
    patientPortal: {
      sections: [
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
          medications: [
            { name: "Lisinopril", dosage: "10mg", frequency: "Daily" },
          ],
          recentVisits: [
            {
              date: "2024-07-12",
              doctorName: "Dr. Adams",
              visitSummary: "Follow-up on medication effectiveness.",
            },
          ],
        },
        {
          type: "AppointmentScheduler",
          availableSlots: [
            {
              date: "2024-08-15",
              time: "10:00",
              doctorName: "Dr. Adams",
              specialization: "Cardiology",
            },
          ],
          patientId: "67890",
          scheduledAppointments: [
            {
              date: "2024-08-22",
              time: "10:00",
              doctorName: "Dr. Wilson",
              purpose: "Routine Check-up",
              status: "scheduled",
            },
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
              doctorName: "Dr. Roberts",
            },
          ],
        },
        {
          type: "CallToAction", // Added CallToAction here
          title: "Stay on Top of Your Health",
          ctaText: "Get Started Now",
        },
      ],
    },
    about: {
      hero: {
        type: "HeroSection",
        title: "About Us",
        subtitle: "Learn more about our mission and team",
        ctaText: "Contact Us",
        image: "/images/about-us.jpg",
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
    doctorPortal: {
      sections: [
        {
          type: "HeroSection",
          title: "Doctor Portal",
          subtitle: "Manage Your Patients and Schedule",
          ctaText: "Get Started",
          image: collaborationImage,
        },
        {
          type: "DoctorCollaborationBoard",
          cases: [
            {
              id: "001",
              patientName: "Alice Johnson",
              condition: "Diabetes",
              status: "Pending",
              notes: [
                "Patient requires follow-up consultation.",
                "Monitor blood sugar levels closely.",
              ],
              lastUpdated: "2024-07-15",
            },
            {
              id: "002",
              patientName: "Bob Brown",
              condition: "Hypertension",
              status: "Resolved",
              notes: [
                "Case resolved successfully with medication.",
                "No further action required at this time.",
              ],
              lastUpdated: "2024-06-20",
            },
            {
              id: "003",
              patientName: "Charlie Davis",
              condition: "Asthma",
              status: "In-Progress",
              notes: [
                "Patient needs to adjust medication dosage.",
                "Next review scheduled for August.",
              ],
              lastUpdated: "2024-08-01",
            },
          ],
        },
        {
          type: "CallToAction",
          title: "Enhance Your Collaboration with Peers",
          ctaText: "Join the Network",
        },
        {
          type: "AppointmentScheduler",
          availableSlots: [
            {
              date: "2024-08-10",
              time: "08:00",
              doctorName: "Alice Johnson",
              specialization: "Internal Medicine",
            },
            {
              date: "2024-08-12",
              time: "13:00",
              doctorName: "Bob Brown",
              specialization: "Pediatrics",
            },
          ],
          patientId: "54321",
          scheduledAppointments: [
            {
              date: "2024-08-10",
              time: "08:00",
              doctorName: "Alice Johnson",
              purpose: "Routine Check-up",
              status: "scheduled",
            },
            {
              date: "2024-08-12",
              time: "13:00",
              doctorName: "Bob Brown",
              purpose: "Follow-up",
              status: "scheduled",
            },
          ],
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
    "background-color": "#f0f0f0" /* General background color */,
    "body-background-color": "#ffffff" /* Body background color */,

    "text-color": "#333333" /* Primary text color */,
    "header-text-color": "#222222" /* Header text color for better contrast */,
    "cta-background-color": "#007bff" /* Call-to-action background color */,
    "cta-text-color": "#ffffff" /* Call-to-action text color */,
    "cta-button-background-color": "#ffffff" /* CTA button background color */,
    "cta-button-text-color": "#007bff" /* CTA button text color */,
    "cta-button-hover-background-color":
      "#f8f9fa" /* CTA button hover background */,
    "contact-form-background-color":
      "#ffffff" /* Background for contact forms */,
    "submit-button-background-color":
      "#007bff" /* Submit button background color */,
    "submit-button-text-color": "#ffffff" /* Submit button text color */,
    "submit-button-hover-background-color":
      "#0056b3" /* Submit button hover background */,
    "feature-heading-color": "#333333" /* Feature section headings color */,
    "feature-text-color": "#666666" /* Feature section text color */,
    "footer-background-color": "#f8f8f8" /* Footer background color */,
    "footer-text-color": "#333333" /* Footer text color */,
    "footer-link-color": "#555555" /* Footer link color */,
    "footer-icon-color": "#333333" /* Footer icon color */,
    "header-background-color": "#333333" /* Header background color */,
    "header-link-color": "#ffffff" /* Header link color */,
    "header-link-hover-color": "#dddddd" /* Header link hover color */,
    "hero-background-color": "#007bff" /* Hero section background color */,
    "hero-text-color": "#ffffff" /* Hero section text color */,
  },
};

export default appData;
