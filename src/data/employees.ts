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
  'rene-rodriguez': {
    id: 'rene-rodriguez',
    name: 'René Orozco',
    position: 'Solar Technician',
    location: 'Dallas, Tx / Chicago, IL',
    email: 'rene.orozco@fleetsolar.com',
    phone: '(555) 234-5678',
    bio: 'René is a technician specialized in the installation and maintenance of solar systems, with extensive experience in the field.',
    imageUrl: '/employee-photos/Rene.jpeg'
  },
  'rodolfo-calvillo': {
    id: 'rodolfo-calvillo',
    name: 'Rodolfo Calvillo',
    position: 'Solar Installation Specialist',
    location: 'Dallas, Tx / Chicago, IL',
    email: 'rodolfo.calvillo@fleetsolar.com',
    phone: '(555) 345-6789',
    bio: 'Rodolfo has strong experience in residential and commercial solar installations, ensuring maximum efficiency in every project.',
    imageUrl: '/employee-photos/Rodolfo.jpeg'
  },
  'kevin-bueno': {
    id: 'kevin-bueno',
    name: 'Kevin Bueno',
    position: 'Technical Supervisor',
    location: 'Dallas, Tx / Chicago, IL',
    email: 'kevin.bueno@fleetsolar.com',
    phone: '(555) 456-7890',
    bio: 'Kevin supervises technical installations and ensures that all projects meet the highest quality standards.',
    imageUrl: '/employee-photos/Kevin.jpeg'
  },
  'estefania-sharon': {
    id: 'estefania-sharon',
    name: 'Estefanía Sharon Pedroza Juárez',
    position: 'Solar Installation Specialist',
    location: 'Dallas, Tx / Chicago, IL',
    email: 'estefania.sharon@fleetsolar.com',
    phone: '(555) 567-8901',
    bio: 'Estefanía is a specialist in solar installation, with a focus on ensuring the highest quality in every project.',
    imageUrl: '/employee-photos/Estefania.jpeg'
  },

  'rene-orozco': {
    id: 'rene-orozco',
    name: 'René Orozco',
    position: 'Solar Technician',
    location: 'Dallas, Tx / Chicago, IL',
    email: 'rene.orozco@fleetsolar.com',
    phone: '(555) 234-5678',
    bio: 'René is a technician specialized in the installation and maintenance of solar systems, with extensive experience in the field.',
    imageUrl: '/employee-photos/ReneOrozco.jpeg'
  },

  'kelly-carrillo': {
    id: 'kelly-carrillo',
    name: 'Kelly Carrillo',
    position: 'Solar Installation Specialist',
    location: 'Dallas, Tx / Chicago, IL',
    email: 'kelly.carrillo@fleetsolar.com',
    phone: '(555) 234-5678',
    bio: 'Kelly is a specialist in solar installation, with a focus on ensuring the highest quality in every project.',
    imageUrl: '/employee-photos/KellyCarrillo.jpeg'
  },
  //Diego garza
  'diego-garza': {
    id: 'diego-garza',
    name: 'Diego Garza',
    position: 'Solar Installation Specialist',
    location: 'Dallas, Tx / Chicago, IL',
    email: 'diego.garza@fleetsolar.com',
    phone: '(555) 234-5678',
    bio: 'Diego is a specialist in solar installation, with a focus on ensuring the highest quality in every project.',
    imageUrl: '/employee-photos/DiegoGarza.jpg'
  }
};
