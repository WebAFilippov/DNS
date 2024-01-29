import { Header } from "@/widgets/header/ui/header"
import { Layout } from "@/shared/ui"
import { ThemeProviver } from "@/entities/theme"
import { AuthModal } from "@/widgets/auth-modal"

export const AppLayout = () => {
  return (
    <ThemeProviver defaultTheme="system" localStorageKey="theme">
      <Layout header={<Header />} />
      <AuthModal />
    </ThemeProviver>
  )
}
