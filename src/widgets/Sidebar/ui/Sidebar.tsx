import { FC, useCallback, useState } from 'react'

import s from './Sidebar.module.scss'

import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext'
import { useTheme } from 'app/providers/ThemeProvider/lib/useTheme'
import avatar from 'shared/assets/avatar.png'
// @ts-ignore
import { ReactComponent as ArrowLeft } from 'shared/assets/icon/arrowleft.svg'
// @ts-ignore
import { ReactComponent as ArrowRight } from 'shared/assets/icon/arrowright.svg'
// import { getUser } from 'entities/viewer/model/selectors/getUser/getUser'
// import { Logout } from 'features/Auth/Logout/ui/Logout'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { Image } from 'shared/ui/Image/Image'
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher/ThemeSwitcher'

interface SidebarProps {
  className?: string
}

export const Sidebar: FC<SidebarProps> = ({ className = '' }) => {
  const { theme } = useTheme()
  // const { login } = useSelector(getUser)
  const [collapsed, setCollapsed] = useState(false)

  const onLogoutHandler = useCallback(() => {}, [])

  const onCollapsedHandler = () => {
    setCollapsed(prev => !prev)
  }

  return (
    <aside
      data-testid={'sidebar'}
      className={classNames(s.Sidebar, { [s.closing]: collapsed }, [className])}
    >
      <div className={s.userBlock}>
        <Image
          src={avatar}
          alt={'user avatar'}
          width={'70px'}
          height={'70px'}
          className={s.avatar}
        />
        {/*<span className={classNames(s.text, { [s.display]: collapsed }, [])}>{login}</span>*/}
      </div>
      <div className={s.footer}>
        <ThemeSwitcher>
          {
            <span className={classNames(s.text, { [s.display]: collapsed }, [])}>
              {theme === Theme.Dark ? 'Dark mode' : 'Light mode'}
            </span>
          }
        </ThemeSwitcher>
        {/*<Logout collapsed={collapsed} onClick={onLogoutHandler} />*/}

        <Button
          style={{ background: 'var(--bg-primary)' }}
          theme={ButtonTheme.Clear}
          data-testid={'toggle-btn'}
          onClick={onCollapsedHandler}
          className={classNames(s.arrowContainer, {}, [s.btnArrow])}
        >
          {!collapsed ? (
            <ArrowLeft
              alt={'icon arrow left'}
              width={12}
              height={12}
              style={{ fill: 'var(--color-primary)' }}
            />
          ) : (
            <ArrowRight
              alt={'icon arrow right'}
              width={12}
              height={12}
              style={{ fill: 'var(--color-primary)' }}
            />
          )}
        </Button>
      </div>
    </aside>
  )
}
