import { Outlet } from 'react-router-dom'

import s from './PrivateRoute.module.scss'

import { Sidebar } from 'widgets/Sidebar'

export const PrivateRoute = () => {
  return (
    <div className={s.PrivateRoute}>
      <Sidebar />
      <Outlet />
    </div>
  )
}
