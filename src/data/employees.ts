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
  imageUrl: string;
}

export const employees: Record<string, Employee> = {
  'rene': {
    id: 'rene',
    name: 'René Orozco',
    position: 'Solar Technician',
    location: 'Dallas, Tx / Chicago, IL',
    email: 'rene.orozco@fleetsolar.com',
    phone: '(555) 234-5678',
    bio: 'René is a technician specialized in the installation and maintenance of solar systems, with extensive experience in the field.',
    imageUrl: '/employee-photos/Rene.jpeg'
  },
  'rodolfo': {
    id: 'rodolfo',
    name: 'Rodolfo Calvillo',
    position: 'Solar Installation Specialist',
    location: 'Dallas, Tx / Chicago, IL',
    email: 'rodolfo.calvillo@fleetsolar.com',
    phone: '(555) 345-6789',
    bio: 'Rodolfo has strong experience in residential and commercial solar installations, ensuring maximum efficiency in every project.',
    imageUrl: '/employee-photos/Rodolfo.jpeg'
  },
  'kevin': {
    id: 'kevin',
    name: 'Kevin Bueno',
    position: 'Technical Supervisor',
    location: 'Dallas, Tx / Chicago, IL',
    email: 'kevin.bueno@fleetsolar.com',
    phone: '(555) 456-7890',
    bio: 'Kevin supervises technical installations and ensures that all projects meet the highest quality standards.',
    imageUrl: '/employee-photos/Kevin.jpeg'
  }
};
