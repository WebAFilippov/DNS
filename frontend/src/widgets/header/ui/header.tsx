import { ThemeMode } from "@/features/theme-mode"
import { HeaderLogo } from "@/shared/ui"

export const Header = () => {
  return (
    <>
      <div className="flex items-center container sm:px-4 h-14 sm:h-11">
        <div className="">
          <HeaderLogo />
        </div>
        <div className="flex flex-1 justify-end">
          <ThemeMode />
        </div>
      </div>
    </>
  )
}
