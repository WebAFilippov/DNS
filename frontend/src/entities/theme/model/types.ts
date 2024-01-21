export type Theme = "system" | "dark" | "light"

export type ThemeContextProps = {
  theme: Theme
  setTheme: (theme: Theme) => void
}
