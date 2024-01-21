import { useTheme } from "@/entities/theme"
import { Button, DropdownMenu } from "@/shared/ui"
import {
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/shared/ui/dropdown-menu/DropdownMenu"
import { DarkMode, LightMode } from "@/shared/ui/icones"

export const ThemeMode = () => {
  const { theme, setTheme } = useTheme()

  return (
    <>
      <DropdownMenu modal={false}>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="icon" className="text-2xl">
            {theme === "light" ? <DarkMode /> : <LightMode />}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuGroup>
            <DropdownMenuItem className="cursor-pointer" onClick={() => setTheme("light")}>Светлая</DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer" onClick={() => setTheme("dark")}>Темная</DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer" onClick={() => setTheme("system")}>Системная</DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  )
}
