import { AppData } from "../types/interfaces";

export const appData: AppData = {
  companyName: "React Business Starter",
  navigation: [
    { name: "Home", href: "/" },
    { name: "Product", href: "/product" },
    { name: "Pricing", href: "/pricing" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Blog", href: "/blog" },
  ],
  pages: {
    home: {
      sections: [
        {
          type: "HeroSection",
          title: "Welcome to React Business Starter",
          subtitle: "Your journey starts here",
          ctaText: "Get Started",
          image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
        },
        {
          type: "TrustedBySection",
          logos: [
            { src: "https://via.placeholder.com/150", alt: "Company 1" },
            { src: "https://via.placeholder.com/150", alt: "Company 2" },
            { src: "https://via.placeholder.com/150", alt: "Company 3" },
          ],
        },
        {
          type: "FeatureSection",
          title: "Our Key Features",
          description: "Discover what makes React Business Starter unique",
          image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
          ctaText: "Learn More",
          imagePosition: "right",
        },
        {
          type: "FeatureSection",
          title: "Our Key Features",
          description: "Discover what makes React Business Starter unique",
          image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
          ctaText: "Learn More",
          imagePosition: "left",
        },
        {
          type: "FeatureSection",
          title: "Our Key Features",
          description: "Discover what makes React Business Starter unique",
          image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
          ctaText: "Learn More",
          imagePosition: "right",
        },

        {
          type: "CallToAction",
          title: "Ready to get started?",
          ctaText: "Sign Up Now",
        },
        {
          type: "UserReviews",
          reviews: [
            {
              reviewer: "John Doe",
              review: "Great product! Highly recommended.",
            },
            {
              reviewer: "Jane Smith",
              review: "React Business Starter has transformed our business.",
            },
          ],
        },
      ],
    },
    pricing: {
      sections: [
        {
          type: "HeroSection",
          title: "Simple, Transparent Pricing",
          subtitle: "Choose the plan that's right for you",
          ctaText: "Get Started",
          image: "https://via.placeholder.com/1080x720",
        },
        {
          type: "PricingTiers",
          tiers: [
            {
              name: "Basic",
              price: "$9.99/mo",
              features: ["Feature 1", "Feature 2", "Feature 3"],
            },
            {
              name: "Pro",
              price: "$19.99/mo",
              features: ["Everything in Basic", "Feature 4", "Feature 5"],
            },
            {
              name: "Enterprise",
              price: "Contact Us",
              features: [
                "Custom Solutions",
                "Priority Support",
                "Dedicated Account Manager",
              ],
            },
          ],
        },
        {
          type: "CallToAction",
          title: "Ready to get started?",
          ctaText: "Sign Up Now",
        },
        {
          type: "FAQ",
          title: "Frequently Asked Questions",
          subtitle: "Get the answers to our most commonly asked questions.",
          faqs: [
            {
              question: "What payment methods do you accept?",
              answer:
                "We accept major credit cards (Visa, Mastercard, American Express) as well as PayPal.",
            },
            {
              question: "Do you have a trial version?",
              answer:
                "Yes, we do! And you can try it just by signing up on our website.",
            },
            {
              question: "How can I contact customer support?",
              answer:
                "You can reach our customer support team by phone, email, or live chat. Our support hours are Monday through Friday, 9am to 5pm EST.",
            },
            {
              question: "Are you hiring?",
              answer:
                "We always welcome skilled people to our team. Check out our Careers page for current openings.",
            },
          ],
        },
      ],
    },
    contact: {
      address: "123 Main St",
      phone: "555-555-5555",
      email: "contact@React Business Starter.com",
      sections: [
        {
          type: "ContactInfo",
          address: "123 Main St",
          phone: "555-555-5555",
          email: "contact@React Business Starter.com",
        },
      ],
    },
    blog: {
      sections: [
        {
          type: "BlogPreview",
          posts: [
            {
              title: "The Future of Technology",
              excerpt:
                "Explore the latest advancements in technology and their impact on our lives.",
              date: "2024-07-25",
              author: "Jane Doe",
              image:
                "https://via.placeholder.com/1080x720?text=The+Future+of+Technology",
            },
            {
              title: "Understanding Artificial Intelligence",
              excerpt:
                "A deep dive into the principles and applications of artificial intelligence.",
              date: "2024-07-20",
              author: "John Smith",
              image:
                "https://via.placeholder.com/1080x720?text=Understanding+Artificial+Intelligence",
            },
            {
              title: "The Rise of Remote Work",
              excerpt:
                "How remote work is changing the landscape of the modern workplace.",
              date: "2024-07-18",
              author: "Emily Johnson",
              image:
                "https://via.placeholder.com/1080x720?text=The+Rise+of+Remote+Work",
            },
            {
              title: "Advancements in Machine Learning",
              excerpt:
                "Key advancements in machine learning and their implications for various industries.",
              date: "2024-07-15",
              author: "Michael Brown",
              image:
                "https://via.placeholder.com/1080x720?text=Advancements+in+Machine+Learning",
            },
            {
              title: "Cybersecurity Trends to Watch",
              excerpt:
                "The latest trends in cybersecurity and how to protect your business.",
              date: "2024-07-10",
              author: "Sarah Wilson",
              image:
                "https://via.placeholder.com/1080x720?text=Cybersecurity+Trends+to+Watch",
            },
            {
              title: "Exploring Quantum Computing",
              excerpt: "A beginner's guide to understanding quantum computing.",
              date: "2024-07-05",
              author: "David Lee",
              image:
                "https://via.placeholder.com/1080x720?text=Exploring+Quantum+Computing",
            },
            {
              title: "The Impact of 5G Technology",
              excerpt:
                "How 5G technology is transforming industries and daily life.",
              date: "2024-07-01",
              author: "Laura Green",
              image:
                "https://via.placeholder.com/1080x720?text=The+Impact+of+5G+Technology",
            },
            {
              title: "AI in Healthcare",
              excerpt:
                "The role of artificial intelligence in advancing healthcare solutions.",
              date: "2024-06-28",
              author: "Nancy Adams",
              image:
                "https://via.placeholder.com/1080x720?text=AI+in+Healthcare",
            },
            {
              title: "Virtual Reality Innovations",
              excerpt:
                "Exploring the latest innovations in virtual reality technology.",
              date: "2024-06-25",
              author: "Michael Clark",
              image:
                "https://via.placeholder.com/1080x720?text=Virtual+Reality+Innovations",
            },
            {
              title: "The Evolution of E-commerce",
              excerpt:
                "How e-commerce has evolved over the years and its future.",
              date: "2024-06-20",
              author: "Olivia Taylor",
              image:
                "https://via.placeholder.com/1080x720?text=The+Evolution+of+E-commerce",
            },
            {
              title: "Digital Transformation Trends",
              excerpt:
                "The key trends driving digital transformation across industries.",
              date: "2024-06-15",
              author: "Sophia Martin",
              image:
                "https://via.placeholder.com/1080x720?text=Digital+Transformation+Trends",
            },
            {
              title: "Blockchain Technology Explained",
              excerpt:
                "Understanding blockchain technology and its applications.",
              date: "2024-06-10",
              author: "James Wilson",
              image:
                "https://via.placeholder.com/1080x720?text=Blockchain+Technology+Explained",
            },
          ],
        },
      ],
    },
    product: {
      sections: [
        {
          type: "HeroSection",
          title: "Discover Our Product",
          subtitle: "Revolutionizing the way you work",
          ctaText: "See Features",
          image: "https://images.unsplash.com/photo-1485217988980-11786ced9454",
        },
        {
          type: "FeatureSection",
          title: "Key Feature 1",
          description: "Description of our amazing key feature",
          image: "https://images.unsplash.com/photo-1506765515384-028b60a970df",
          ctaText: "Learn More",
          imagePosition: "left",
        },
        {
          type: "FeatureSection",
          title: "Key Feature 2",
          description: "Another groundbreaking feature explained",
          image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
          ctaText: "See Details",
          imagePosition: "right",
        },
        {
          type: "CallToAction",
          title: "Ready to transform your workflow?",
          ctaText: "Get Started Now",
        },
      ],
    },
    about: {
      hero: {
        type: "HeroSection",
        title: "About Us",
        subtitle: "Learn more about our company",
        ctaText: "Get in touch",
        image: "https://images.unsplash.com/photo-1501426026826-31c667bdf23d",
      },
      mission: {
        title: "Our Mission",
        description: "We aim to provide the best services to our customers.",
      },
      team: [
        {
          name: "John Doe",
          role: "CEO",
          image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
        },
        {
          name: "Jane Smith",
          role: "CTO",
          image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde",
        },
        {
          name: "Emily Johnson",
          role: "CFO",
          image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
        },
      ],
      callToAction: {
        type: "CallToAction",
        title: "Join our team",
        ctaText: "Careers",
      },
    },
  },
  footer: {
    companyInfo: "2024 © React Business Starter. All rights reserved.",
    companyLinks: [
      { name: "Home", href: "/" },
      { name: "Product", href: "/product" },
      { name: "About us", href: "/about" },
      { name: "Pricing", href: "/pricing" },
      { name: "Blog", href: "/blog" },
      { name: "Contact", href: "/contact" },
    ],
    socialLinks: [
      { name: "Facebook", href: "https://www.facebook.com" },
      { name: "Twitter", href: "https://www.twitter.com" },
      { name: "LinkedIn", href: "https://www.linkedin.com" },
      { name: "Instagram", href: "https://www.instagram.com" },
    ],
    integrationsLinks: [
      { name: "Slack", href: "https://slack.com" },
      { name: "Asana", href: "https://asana.com" },
      { name: "Jira", href: "https://jira.com" },
      { name: "Trello", href: "https://trello.com" },
    ],
    legalLinks: [
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms Of Service", href: "/terms" },
    ],
  },
  theme: {
    "background-color": "#f0f0f0",
    "body-background-color": "#ffffff",
    "text-color": "#333333",
    "cta-background-color": "#007bff",
    "cta-text-color": "#ffffff",
    "cta-button-background-color": "#ffffff",
    "cta-button-text-color": "#007bff",
    "cta-button-hover-background-color": "#f8f9fa",
    "contact-form-background-color": "#ffffff",
    "submit-button-background-color": "#007bff",
    "submit-button-text-color": "#ffffff",
    "submit-button-hover-background-color": "#0056b3",
    "feature-heading-color": "#333333",
    "feature-text-color": "#666666",
    "footer-background-color": "#f8f8f8",
    "footer-text-color": "#333333",
    "footer-link-color": "#555555",
    "footer-icon-color": "#333333",
    "header-background-color": "#333333",
    "header-text-color": "#ffffff",
    "header-link-color": "#ffffff",
    "header-link-hover-color": "#dddddd",
    "hero-background-color": "#007bff",
    "hero-text-color": "#ffffff",
  },
};
