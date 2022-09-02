import React, {useEffect} from 'react'
import {Outlet, useNavigate} from 'react-router-dom';
import DashboardNavbar from './DashboardNavbar'

const SharedDashboardLayout = () => {

  const navigate = useNavigate();

  useEffect(() => {
    if(!localStorage.getItem('user')){
      navigate('/login')
    }
  });

  return (
    <>
      <DashboardNavbar />

      <div className="container-lg">
        <Outlet />
      </div>
    </>
  )
}

export default SharedDashboardLayout