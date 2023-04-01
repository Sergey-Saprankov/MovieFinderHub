import s from './LoginPage.module.scss'

import { LoginForm } from 'features/Auth/AuthWithUserName/ui/LoginForm'

const LoginPage = () => {
  return (
    <div className={s.LoginPage}>
      <LoginForm />
    </div>
  )
}

export default LoginPage
