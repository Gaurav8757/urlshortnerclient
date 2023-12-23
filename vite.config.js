import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
},
{
  base: "https://iridescent-quokka-1417b9.netlify.app/",
}
)
