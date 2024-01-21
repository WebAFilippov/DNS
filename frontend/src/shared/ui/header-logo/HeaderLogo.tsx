import { Link } from "react-router-dom"

import { Logo } from "@/shared/ui/icones/Logo"

export const HeaderLogo = () => {
  return (
    <>
      <Link
        to={"/"}
        className="flex gap-2 justify-center items-center transition-colors hover:bg-accent hover:text-accent-foreground h-14 px-2 focus:outline-none focus-visible:ring-1 focus-visible:ring-ring sm:h-11 sm:gap-1"
      >
        <Logo className="size-8" />
        <div className="flex flex-col text-xl sm:hidden">
          <p className="leading-4">DNS</p>
          <p className="leading-4 italic ml-2">Clone</p>
        </div>
      </Link>
    </>
  )
}
