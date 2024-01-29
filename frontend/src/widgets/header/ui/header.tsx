import { ThemeMode } from "@/features/theme-mode"
import { useAppDispatch } from "@/shared/model/hooks"
import { Button, HeaderLogo } from "@/shared/ui"
import { toggleModal } from "@/widgets/auth-modal"

export const Header = () => {
  const dispatch = useAppDispatch()

  return (
    <>
      <div className="flex items-center justify-between container sm:px-4 h-14 sm:h-11">
        <div>
          <HeaderLogo />
        </div>
        <div className="flex justify-end items-center gap-2">
          <ThemeMode/>
          <Button variant="ghost" className="sm:h-9 sm:rounded-md sm:px-3" onClick={() => dispatch(toggleModal())}>Войти</Button>
        </div>
      </div>
    </>
  )
}
