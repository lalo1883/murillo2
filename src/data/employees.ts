// This file contains employee data that would be accessible via QR codes
// In a real application, this would likely come from a secure database

export interface Employee {
  id: string;
  name: string;
  position: string;
  location: string;
  email: string;
  phone: string;
  bio: string;
  certifications: string[];
  imageUrl: string;
}

export const employees: Record<string, Employee> = {
  'emp001': {
    id: 'emp001',
    name: 'John Smith',
    position: 'Senior Solar Installer',
    location: 'Chicago, IL',
    email: 'john.smith@fleetsolar.com',
    phone: '(555) 123-4567',
    bio: 'John has over 10 years of experience in solar panel installation and is certified in advanced solar technologies. He specializes in residential installations and has completed over 500 projects.',
    certifications: ['NABCEP Certified PV Installation Professional', 'OSHA 30-Hour Safety Certified'],
    imageUrl: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
  },
  'emp002': {
    id: 'emp002',
    name: 'Maria Rodriguez',
    position: 'Solar Energy Consultant',
    location: 'Dallas, TX',
    email: 'maria.rodriguez@fleetsolar.com',
    phone: '(555) 234-5678',
    bio: 'Maria helps customers find the perfect solar solution for their homes and businesses. With a background in renewable energy engineering, she provides expert advice on system design and energy efficiency.',
    certifications: ['BPI Building Analyst', 'Energy Star Certified Consultant'],
    imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
  },
  'emp003': {
    id: 'emp003',
    name: 'David Chen',
    position: 'Technical Director',
    location: 'Chicago, IL',
    email: 'david.chen@fleetsolar.com',
    phone: '(555) 345-6789',
    bio: 'David oversees all technical aspects of our solar installations. With a Master\'s degree in Electrical Engineering and 15 years in the renewable energy sector, he ensures all projects meet the highest standards of quality and efficiency.',
    certifications: ['Professional Engineer (PE)', 'LEED AP', 'NABCEP Technical Sales Professional'],
    imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
  },
};