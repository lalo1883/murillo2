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
    location: 'Monterrey, MX',
    email: 'rene.orozco@fleetsolar.com',
    phone: '(555) 234-5678',
    bio: 'René es un técnico especializado en la instalación y mantenimiento de sistemas solares, con amplia experiencia en el sector.',
    imageUrl: '/src/data/employee-photos/Rene.jpeg'
  },
  'rodolfo': {
    id: 'rodolfo',
    name: 'Rodolfo Calvillo',
    position: 'Solar Installation Specialist',
    location: 'Monterrey, MX',
    email: 'rodolfo.calvillo@fleetsolar.com',
    phone: '(555) 345-6789',
    bio: 'Rodolfo tiene una sólida experiencia en instalaciones solares residenciales y comerciales, garantizando la máxima eficiencia en cada proyecto.',
    imageUrl: '/src/data/employee-photos/Rodolfo.jpeg'
  },
  'kevin': {
    id: 'kevin',
    name: 'Kevin Bueno',
    position: 'Technical Supervisor',
    location: 'Monterrey, MX',
    email: 'kevin.bueno@fleetsolar.com',
    phone: '(555) 456-7890',
    bio: 'Kevin supervisa las instalaciones técnicas y asegura que todos los proyectos cumplan con los más altos estándares de calidad.',
    imageUrl: '/src/data/employee-photos/Kevin.jpeg'
  }
};