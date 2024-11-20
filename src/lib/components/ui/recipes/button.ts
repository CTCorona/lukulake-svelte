import { defineRecipe } from '@pandacss/dev';

export const buttonRecipe = defineRecipe({
	className: 'button',
	description: 'The styles for the button component',
	base: {
		cursor: 'pointer',
		paddingInline: 9,
		paddingBlock: 3,
		borderRadius: 'md',
		color: 'white',
		fontWeight: 'bold',
		transition: 'colors'
	},
	variants: {
		type: {
			primary: {
				bg: 'primary.main',
				_hover: {
					bg: 'primary._hover'
				}
			},
			secondary: {
				bg: 'secondary.main',
				_hover: {
					bg: 'secondary._hover'
				}
			}
		}
	}
});
