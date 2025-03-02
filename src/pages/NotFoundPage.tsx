import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import FleetLogo from '../components/FleetLogo';

const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-fleet-light flex flex-col items-center justify-center px-4 text-center">
      <FleetLogo className="h-20 w-20 mb-6" />
      <h1 className="text-4xl font-bold text-fleet-dark mb-4">404 - Page Not Found</h1>
      <p className="text-xl text-gray-600 mb-8">
        The page you are looking for doesn't exist or has been moved.
      </p>
      <Link to="/" className="btn-primary flex items-center">
        <ArrowLeft className="mr-2 h-5 w-5" />
        Back to Homepage
      </Link>
    </div>
  );
};

export default NotFoundPage;