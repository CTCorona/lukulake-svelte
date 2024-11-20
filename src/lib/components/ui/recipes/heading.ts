import { defineRecipe } from '@pandacss/dev';

export const headingRecipe = defineRecipe({
	className: 'heading',
	description: 'Heading Recipe',
	base: {
		fontWeight: 'bold',
		textAlign: 'center',
		mb: '3',
		fontSize: {
			base: '3xl',
			lg: '6xl'
		}
	}
});
