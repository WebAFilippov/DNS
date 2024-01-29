import { Link } from "react-router-dom"

export const HeaderLogo = () => {
  return (
    <>
      <Link
        to={"/"}
        className="h-10 px-2 flex justify-normal items-center hover:bg-accent hover:text-accent-foreground focus:outline-none ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1 rounded-sm text-2xl font-medium"
      >
        LOGOTYPE
      </Link>
    </>
  )
}
