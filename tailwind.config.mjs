/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			animation: {
                "spin-slow": "spin 10s linear infinite",
            },
		},
	},
	plugins: [],
}
