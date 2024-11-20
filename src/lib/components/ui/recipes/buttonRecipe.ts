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
				bg: 'primary',
				_hover: {
					bg: 'primary'
				}
			},
			secondary: {
				bg: 'secondary',
				_hover: {
					bg: 'secondary'
				}
			}
		}
	}
});
