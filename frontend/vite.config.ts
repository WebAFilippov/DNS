import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      // src: "/src/",
      // pages: "/src/pages/",
      // rdx: "/src/rdx",
      // shared: "/src/shared",
      // entities: "/src/entities",
      // widgets: "/src/widgets",
      // components: "/src/components",
    },
  },
  server: {
    host: true,
  },
})

