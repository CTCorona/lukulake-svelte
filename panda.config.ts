import { defineConfig } from '@pandacss/dev';
import { buttonRecipe } from './src/lib/components/ui/recipes/buttonRecipe';
import { headingRecipe } from './src/lib/components/ui/recipes/headingRecipe';
import { typographyRecipe } from './src/lib/components/ui/recipes/typographyRecipe';

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
					blue: {
						darkest: {
							value: '#003866'
						},
						medium: {
							value: '#9fbace'
						},
						light: {
							value: '#e6edf2'
						},
						extraLight: {
							value: '#eaf2f880'
						}
					},
					orange: {
						darkest: {
							value: '#ED752A'
						},
						light: {
							value: '#ffc29c'
						}
					}
				}
			},
			semanticTokens: {
				colors: {
					primary: {
						DEFAULT: {
							value: '{colors.blue.darkest}'
						},
						light: {
							value: '{colors.blue.light}'
						},
						contrast: {
							value: '{colors.blue.medium}'
						}
					},
					secondary: {
						DEFAULT: {
							value: '{colors.orange.darkest}'
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
