import React, {useEffect} from 'react'
import {Outlet, useNavigate} from 'react-router-dom';
import Navbar from './Navbar'

const ShareLayout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if(localStorage.getItem('user')){
      navigate('/dashboard')
    }
  });

  return (
    <>
      <Navbar />

      <div>
        <Outlet />
      </div>
    </>
  )
}

export default ShareLayout