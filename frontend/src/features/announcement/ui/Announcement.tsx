import { useAppDispatch, useAppSelector } from "@/shared/model/hooks"
import { Button } from "@/shared/ui"
import { Close } from "@/shared/ui/icones"
import { AnnouncementState, closeAnnouncement } from "../model/slice"

export const Announcement = () => {
  const dispatch = useAppDispatch()
  const open = useAppSelector(AnnouncementState)

  return (
    <>
      {open && (
        <div className="bg-black dark:bg-white">
          <div className="container flex justify-center items-center text-white text-center dark:text-black relative h-7 sm:px-8 sm:h-10 sm:text-sm md:px-12 lg:px-12 ">
            <p>Сайт в разработке. Ожидайте пока бездарь соберет эту херню</p>
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-2 size-5 text-xl sm:right-2 sm:size-6 sm:text-xl md:right-4 lg:right-5"
              onClick={() => dispatch(closeAnnouncement())}
            >
              <Close />
            </Button>
          </div>
        </div>
      )}
    </>
  )
}
