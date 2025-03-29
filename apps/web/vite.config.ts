import { defineConfig } from "vite";
import viteReact from "@vitejs/plugin-react";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import { resolve } from "node:path";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
	plugins: [
		TanStackRouterVite({ target: "react" }),
		viteReact(),
		tailwindcss(),
	],
	server: {
		hmr: true,
		port: 3000,
	},
	resolve: {
		alias: {
			"@": resolve(__dirname, "./src"),
			"@org/ui": resolve(__dirname, "../../packages/ui/src"),
		},
	},
});
