import { ReactNode, createContext, useEffect, useState } from "react"

import { Theme, ThemeContextProps } from "../model/types"

type ThemeProps = {
  children: ReactNode
  defaultTheme?: Theme
  localStorageKey?: string
}

const initialState: ThemeContextProps = {
  theme: "system",
  setTheme: () => null,
}

export const ThemeContext = createContext<ThemeContextProps>(initialState)

export const ThemeProviver = ({ children, defaultTheme = "system", localStorageKey = "theme" }: ThemeProps) => {
  const [theme, setTheme] = useState<Theme>(() => (localStorage.getItem(localStorageKey) as Theme) || defaultTheme)

  useEffect(() => {
    const root = window.document.documentElement
    root.classList.remove("light", "dark")

    if (theme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
      root.classList.add(systemTheme)
      return
    }

    root.classList.add(theme)
  }, [theme])

  const selectTheme = (theme: Theme) => {
    localStorage.setItem(localStorageKey, theme)
    setTheme(theme)
  }

  return <ThemeContext.Provider value={{ theme, setTheme: selectTheme }}>{children}</ThemeContext.Provider>
}
