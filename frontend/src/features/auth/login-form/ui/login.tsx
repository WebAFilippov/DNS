import { InputLogReg, Label } from "@/shared/ui"

export const Login = () => {
  return (
    <div className="w-full flex flex-col gap-6 justify-center items-center">
      <h2 className="font-semibold text-lg tracking-tight">Вход или регистрация</h2>
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="LogReg">Телефон или e-mail</Label>
        <InputLogReg id="Logreg" />
      </div>
    </div>
  )
}
