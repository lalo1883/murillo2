import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Mail, Phone, MapPin, Award } from 'lucide-react';
import { employees, Employee } from '../data/employees';
import FleetLogo from '../components/FleetLogo';

const EmployeeProfilePage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [employee, setEmployee] = useState<Employee | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    // Simulate fetching employee data
    // In a real application, this would be an API call
    setTimeout(() => {
      if (id && employees[id]) {
        setEmployee(employees[id]);
        setLoading(false);
      } else {
        setError(true);
        setLoading(false);
      }
    }, 500);
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-fleet-light flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-fleet-blue mx-auto"></div>
          <p className="mt-4 text-fleet-dark">Loading employee profile...</p>
        </div>
      </div>
    );
  }

  if (error || !employee) {
    return (
      <div className="min-h-screen bg-fleet-light flex flex-col items-center justify-center px-4 text-center">
        <FleetLogo className="h-20 w-20 mb-6" />
        <h1 className="text-4xl font-bold text-fleet-dark mb-4">Employee Not Found</h1>
        <p className="text-xl text-gray-600 mb-8">
          The employee profile you are looking for doesn't exist or has been moved.
        </p>
        <Link to="/" className="btn-primary flex items-center">
          <ArrowLeft className="mr-2 h-5 w-5" />
          Back to Homepage
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-fleet-light py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Header with logo */}
          <div className="bg-fleet-dark text-white p-6 flex justify-between items-center">
            <div className="flex items-center">
              <FleetLogo className="h-10 w-10" />
              <span className="ml-2 text-xl font-bold">Fleet Solar</span>
            </div>
            <Link to="/" className="text-white hover:text-fleet-blue transition-colors flex items-center">
              <ArrowLeft className="mr-2 h-5 w-5" />
              Back to Homepage
            </Link>
          </div>
          
          {/* Employee profile */}
          <div className="p-6">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/3 flex justify-center mb-6 md:mb-0">
                <img
                  src={employee.imageUrl}
                  alt={employee.name}
                  className="h-48 w-48 rounded-full object-cover border-4 border-fleet-blue"
                />
              </div>
              
              <div className="md:w-2/3 md:pl-8">
                <h1 className="text-3xl font-bold text-fleet-dark mb-2">{employee.name}</h1>
                <p className="text-xl text-fleet-blue mb-4">{employee.position}</p>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-center">
                    <MapPin className="h-5 w-5 text-fleet-blue mr-2" />
                    <span>{employee.location}</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-fleet-blue mr-2" />
                    <a href={`mailto:${employee.email}`} className="text-fleet-blue hover:underline">
                      {employee.email}
                    </a>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-fleet-blue mr-2" />
                    <a href={`tel:${employee.phone}`} className="text-fleet-blue hover:underline">
                      {employee.phone}
                    </a>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h2 className="text-xl font-semibold text-fleet-dark mb-2">About</h2>
                  <p className="text-gray-600">{employee.bio}</p>
                </div>
                
                <div>
                  <h2 className="text-xl font-semibold text-fleet-dark mb-2 flex items-center">
                    <Award className="h-5 w-5 text-fleet-blue mr-2" />
                    Certifications
                  </h2>
                  <ul className="list-disc list-inside text-gray-600 pl-2">
                    {employee.certifications.map((cert, index) => (
                      <li key={index}>{cert}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          {/* Footer */}
          <div className="bg-fleet-light p-6 text-center">
            <p className="text-gray-600">
              This is a secure employee profile page. Please contact Fleet Solar at (555) 123-4567 for any inquiries.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeProfilePage;