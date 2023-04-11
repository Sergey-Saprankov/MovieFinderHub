import { useContext } from 'react'

import { Local_storage_theme_key, Theme, ThemeContext, ThemeContextProps } from './ThemeContext'

export type UseThemeType = {
  theme: Theme
  toggleTheme: () => void
}

export const useTheme = (): UseThemeType => {
  const { theme = Theme.Light, setTheme } = useContext<ThemeContextProps>(ThemeContext)
  const toggleTheme = () => {
    const newTheme = theme === Theme.Light ? Theme.Dark : Theme.Light

    setTheme?.(newTheme)
    localStorage.setItem(Local_storage_theme_key, newTheme)
  }

  return { theme, toggleTheme }
}
