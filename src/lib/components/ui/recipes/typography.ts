import { defineRecipe } from '@pandacss/dev';

export const typographyRecipe = defineRecipe({
	className: 'typography',
	description: 'The styles for the typography component',
	base: {
		fontWeight: 'normal',
		marginInline: 'auto',
		lineHeight: 'tight'
	},
	variants: {
		align: {
			center: {
				textAlign: 'center'
			},
			left: {
				textAlign: 'left'
			},
			right: {
				textAlign: 'right'
			}
		},
		fluid: {
			true: {
				w: 'full'
			},
			false: {
				w: 'full',
				md: {
					w: '1/2'
				}
			}
		},
		withGutterBottom: {
			true: {
				mb: 12
			},
			false: {
				mb: 0
			}
		}
	}
});
