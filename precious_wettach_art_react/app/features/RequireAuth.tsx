import React from 'react'
import { useUserInfoQuery } from './account/accountApi'
import { Navigate, Outlet, useLocation } from 'react-router-dom';

const RequireAuth = () => {
    const {data: user, isLoading} = useUserInfoQuery();
    const location = useLocation();

    if (isLoading) return <div className='mt-[120px]'>Loading...</div>

    if (!user) {
        return <Navigate to='/login' state={{from: location}} />
    }

  return (
    <Outlet />
  )
}

export default RequireAuth