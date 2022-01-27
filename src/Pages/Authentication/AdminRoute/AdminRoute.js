import { StarIcon } from '@heroicons/react/outline';
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const AdminRoute = ({ children }) =>
{
    const { user, admin, isLoading } = useAuth();
    let location = useLocation();
    if (isLoading) {
        return <div className='flex items-center justify-center'>
            <StarIcon className='animate-spin h-10 w-10 text-white' />
        </div>
    };
    if (user.email && admin) {
        return children;
    };
    return (
        <Navigate to="/" state={{ from: location }} />
    )
};

export default AdminRoute;
