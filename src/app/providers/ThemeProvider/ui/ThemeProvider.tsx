import React, { FC, memo, ReactNode, useMemo, useState } from 'react'

import { Provider } from 'react-redux'

import { Local_storage_theme_key, Theme, ThemeContext } from '../lib/ThemeContext'

interface ThemeProviderProps {
  children: ReactNode
}

const defaultTheme = (localStorage.getItem(Local_storage_theme_key) as Theme) || Theme.Light

export const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(defaultTheme)
  const defaultProps = useMemo(
    () => ({
      theme,
      setTheme,
    }),
    [theme]
  )

  return <ThemeContext.Provider value={defaultProps}>{children}</ThemeContext.Provider>
}
