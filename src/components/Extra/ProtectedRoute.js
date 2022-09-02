import React from 'react'
import { Navigate } from 'react-router-dom'
// import {useAuth0} from '@auth0/auth0-react';

const ProtectedRoute = ({children, user}) => {
    if(!user){
        return <Navigate to='/' />
    }
    return children;
};

// const ProtectedRoute = ({children}) => {
//     const {isAuthenticated, user} from useAuth0();
//     const isUser = isAuthenticated && user;
//     if(!isUser){
//         return <Navigate to='/' />
//     }
//     return children;
// };

export default ProtectedRoute;
