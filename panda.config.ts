import { defineConfig } from '@pandacss/dev';
import { buttonRecipe } from './src/lib/components/ui/recipes/button';
import { typographyRecipe } from './src/lib/components/ui/recipes/typography';
import { headingRecipe } from './src/lib/components/ui/recipes/heading';

export default defineConfig({
	// Whether to use css reset
	preflight: true,

	// Where to look for your css declarations
	include: ['./src/**/*.{js,ts,svelte}'],

	// Files to exclude
	exclude: [],

	// Useful for theme customization
	theme: {
		extend: {
			tokens: {
				colors: {
					primary: {
						main: {
							value: '#003866'
						},
						light: {
							value: 'rgb(230,237,242)'
						},
						light2: {
							value: '#9fbace'
						},
						_hover: {
							value: 'rgba(0,46,84,1)'
						}
					},
					secondary: {
						main: {
							value: '#ED752A'
						},
						light: {
							value: '#ffc29c'
						},
						_hover: {
							value: 'rgb(196,96,33)'
						}
					}
				}
			},
			recipes: {
				button: buttonRecipe,
				typography: typographyRecipe,
				heading: headingRecipe
			}
		}
	},

	// The output directory for your css system
	outdir: 'styled-system'
});
