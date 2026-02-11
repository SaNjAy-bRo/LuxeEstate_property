import { mockProperties, mockTestimonials, mockSiteSettings } from './mockData';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

// Simulate network delay
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const getTestimonials = async () => {
    await delay(500);
    return mockTestimonials;
};

export const getProperties = async () => {
    await delay(500); // Simulate API latency
    return mockProperties;
};

export const getFeaturedProperties = async () => {
    await delay(500);
    return mockProperties.filter((p) => p.featured);
};

export const getPropertyById = async (id) => {
    await delay(500);
    return mockProperties.find((p) => p.id === parseInt(id));
};

export const submitContactForm = async (formData) => {
    await delay(800);
    console.log("Contact Form Submitted:", formData);
    return { success: true, message: "Message sent successfully!" };
};

export const getSiteSettings = async () => {
    return mockSiteSettings;
};
