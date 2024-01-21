import { z } from "zod"

const envVariables = z.object({
  VITE_API_ENDPOINT: z.string().url(),
})

envVariables.parse(import.meta.env)

declare global {
  interface ImportMetaEnv extends z.infer<typeof envVariables> {}
}

declare global {
  interface ImportMeta {
    readonly env: ImportMetaEnv
  }
}

export const config = {
  DEV: import.meta.env.DEV,
  PROD: import.meta.env.PROD,
  MODE: import.meta.env.MODE,
  BASE_URL: import.meta.env.BASE_URL,
  SSR: import.meta.env.SSR,
  API_ENDPOINT: import.meta.env.VITE_API_ENDPOINT,
} as const
