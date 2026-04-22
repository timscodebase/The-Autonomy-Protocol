import { sveltekit } from "@sveltejs/kit/vite";
import { enhancedImages } from "@sveltejs/enhanced-img";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [enhancedImages(), sveltekit()],
  server: {
    hmr: {
      timeout: 240000,
    },
    watch: {
      ignored: ["**/node_modules/**", "**/.svelte-kit/**"],
    },
  },
  ssr: {
    // Explicitly group these so the runner handles them as a single unit
    noExternal: ["@lucide/svelte", "@autonomy/nav", "@autonomy/theme", "svelte-french-toast"],
  },
  optimizeDeps: {
    // Keep Lucide excluded to prevent the giant pre-bundle timeout
    exclude: ["@lucide/svelte"],
    // But include your internal UI to speed up initial resolution
    include: ["@autonomy/nav", "@autonomy/theme"],
  },
});
