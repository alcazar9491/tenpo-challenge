import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
export default defineConfig(() => {
  return {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        components: "/src/components",
        pages: "/src/pages",
        assets: "/src/assets",
        utils: "/src/utils",
        hooks: "/src/hooks",
        store: "/src/store",
        services: "/src/services",
        context: "/src/context",
        router: "/src/router",
        adapters: "/src/adapters",
      },
    },
  };
});
