import { Header } from "@/widgets/header/ui/header"
import { Layout } from "@/shared/ui"
import { Announcement } from "@/features/announcement"
import { ThemeProviver } from "@/entities/theme"

export const AppLayout = () => {
  return (
    <ThemeProviver defaultTheme="system" localStorageKey="theme">
      <Layout announcement={<Announcement />} header={<Header />} />
    </ThemeProviver>
  )
}
