import * as React from "react"

import { cn } from "@/shared/lib/utils/cn"
import { Popover, PopoverTrigger, PopoverContent } from ".."
import { HelpCircle } from "lucide-react"

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const InputLogReg = React.forwardRef<HTMLInputElement, InputProps>(({ className, type, ...props }, ref) => {
  return (
    <div
      className={
        "flex h-11 w-full rounded-md border border-input bg-background items-center text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
      }
    >
      <input
        type={type}
        className={cn(
          "w-full h-full",
          className,
        )}
        ref={ref}
        {...props}
      />
      <Popover>
        <PopoverTrigger asChild>
          <HelpCircle className="size-6 cursor-pointer"/>
        </PopoverTrigger>
        <PopoverContent>
          <div>
            <p>Телефон в формате: 7 000 000 00 00</p>
            <p>Формат e-mail: name@example.ru</p>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  )
})
InputLogReg.displayName = "Input"

export { InputLogReg }
