import { defineRecipe } from '@pandacss/dev';

export const headingRecipe = defineRecipe({
	className: 'heading',
	description: 'Heading Recipe',
	base: {
		fontWeight: 'bold',
		textAlign: 'center',
		fontSize: {
			base: '3xl',
			lg: '6xl'
		}
	},
	variants: {
		gutterBottom: {
			true: {
				mb: 10
			},
			false: {
				mb: 3
			}
		}
	},
	defaultVariants: {
		gutterBottom: false
	}
});
