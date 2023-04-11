import { FC, ReactNode } from 'react'

import s from './ThemeSwitcher.module.scss'

import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext'
import { useTheme } from 'app/providers/ThemeProvider/lib/useTheme'
// @ts-ignore
import { ReactComponent as Dark } from 'shared/assets/icon/darkTheme.svg'
// @ts-ignore
import { ReactComponent as Light } from 'shared/assets/icon/lightTheme.svg'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'

interface ThemeSwitcherProps {
  className?: string
  children: ReactNode
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = ({ className = '', children }) => {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className={classNames(s.ThemeSwitcher, {}, [className])}>
      <Button className={s.btn} onClick={toggleTheme} theme={ButtonTheme.Clear}>
        {theme === Theme.Light ? (
          <Light style={{ fill: 'var(--color-primary)' }} />
        ) : (
          <Dark style={{ fill: 'var(--color-primary)' }} />
        )}
        {children}
      </Button>
    </div>
  )
}

// export const ThemeSwitcher: FC<ThemeSwitcherProps> = ({ className, children }) => {
//     const { theme, toggleTheme } = useTheme()
//     const fill = theme === Theme.Dark ? '#fff' : '#000'
//
//     return (
//         <div className={classNames(s.ThemeSwitcher, {}, [className])}>
//             <Button className={s.btn} onClick={toggleTheme} theme={ButtonTheme.Clear}>
//                 {theme === Theme.Light ? (
//                     <Image src={light} alt={'light'} fill={true} />
//                 ) : (
//                     // <Light style={{ fill: 'var(--color-primary)' }} />
//                     <Image src={dark} alt={'dark'} />
//                     // <Dark style={{ fill: 'var(--color-primary)' }} />
//                 )}
//                 {children}
//             </Button>
//         </div>
//     )
// }
