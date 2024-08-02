import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
			typography: (theme: any) => ({
				DEFAULT: {
					css: {
						code: {
							backgroundColor: theme('colors.slate.100'),
							borderRadius: theme('borderRadius.DEFAULT'),
							paddingTop: theme('spacing.[0.5]'),
							paddingBottom: theme('spacing.[0.5]'),
							paddingLeft: theme('spacing.[1.5]'),
							paddingRight: theme('spacing.[1.5]'),
							fontWeight: 'normal',
						},
						'code::before': {
							content: 'none',
						},
						'code::after': {
							content: 'none',
						},
					},
				},
			}),

		},
	},
	plugins: [require('@tailwindcss/typography')],
};
export default config;
