import { Dialog, DialogContent } from "@/shared/ui"
import { useAppDispatch, useAppSelector } from "@/shared/model/hooks"
import { isOpened, selectActions, toggleModal } from ".."
import { Login, Registration } from "@/features/auth"

export const AuthModal = () => {
  const dispatch = useAppDispatch()
  const isOpen = useAppSelector(isOpened)
  const selectAction = useAppSelector(selectActions)

  return (
    <Dialog open={isOpen} onOpenChange={() => dispatch(toggleModal())}>
      <DialogContent className="sm:max-w-[425px]">
        {selectAction === "login" && <Login />}
        {selectAction === "register" && <Registration />}
      </DialogContent>
    </Dialog>
  )
}
