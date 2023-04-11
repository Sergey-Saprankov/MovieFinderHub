import { Route, Routes } from 'react-router-dom'

import { PrivateRoute } from './PriviteRoute'

import { LoginPage } from 'pages/LoginPage'
import { MainPage } from 'pages/MainPage'

export const AppRouter = () => {
  return (
    <Routes>
      <Route path={'login'} element={<LoginPage />} />
      <Route element={<PrivateRoute />}>
        <Route path={'/'} element={<MainPage />} />
      </Route>
    </Routes>
  )
}
