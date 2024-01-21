import { Outlet, ScrollRestoration } from "react-router-dom"
import { ReactNode } from "react"

type Props = {
  announcement?: ReactNode
  header?: ReactNode
  footer?: ReactNode
}

export const Layout = ({ announcement, header, footer }: Props) => {
  return (
    <div className="flex flex-col min-h-[200vh]">
      {announcement && <>{announcement}</>}
      {header && <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">{header}</header>}
      <div className="flex-1">
        <Outlet />
      </div>
      {footer && <div className="footer">{footer}</div>}
      <ScrollRestoration />
    </div>
  )
}
