import './styles/index.scss'

import { AppRouter } from './providers/router'
import { useTheme } from './providers/ThemeProvider'

import { classNames } from 'shared/lib/classNames/classNames'

export const App = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className={classNames('app', {}, [theme])}>
      <AppRouter />
    </div>
  )
}
