import FoxIcon from '$lib/assets/icons/fox-icon.svelte';
import MooseIcon from '$lib/assets/icons/moose-icon.svelte';
import OwlIcon from '$lib/assets/icons/owl-icon.svelte';
import Cherry1 from '$lib/assets/images/shoes/cherry_1.jpg?enhanced&quality=80';
import Cherry2 from '$lib/assets/images/shoes/cherry_2.jpg?enhanced&quality=80';
import Cherry3 from '$lib/assets/images/shoes/cherry_3.jpg?enhanced&quality=80';
import Cherry4 from '$lib/assets/images/shoes/cherry_4.jpg?enhanced&quality=80';
import Cherry5 from '$lib/assets/images/shoes/cherry_5.jpg?enhanced&quality=80';
import Cloud1 from '$lib/assets/images/shoes/cloud_1.jpg?enhanced&quality=80';
import Cloud2 from '$lib/assets/images/shoes/cloud_2.jpg?enhanced&quality=80';
import Cloud3 from '$lib/assets/images/shoes/cloud_3.jpg?enhanced&quality=80';
import Cloud4 from '$lib/assets/images/shoes/cloud_4.jpg?enhanced&quality=80';
import Cloud5 from '$lib/assets/images/shoes/cloud_5.jpg?enhanced&quality=80';
import Honey1 from '$lib/assets/images/shoes/honey_1.jpg?enhanced&quality=80';
import Honey2 from '$lib/assets/images/shoes/honey_2.jpg?enhanced&quality=80';
import Honey3 from '$lib/assets/images/shoes/honey_3.jpg?enhanced&quality=80';
import Honey4 from '$lib/assets/images/shoes/honey_4.jpg?enhanced&quality=80';
import Honey5 from '$lib/assets/images/shoes/honey_5.jpg?enhanced&quality=80';
import Midnight1 from '$lib/assets/images/shoes/midnight_1.jpg?enhanced&quality=80';
import Midnight2 from '$lib/assets/images/shoes/midnight_2.jpg?enhanced&quality=80';
import Midnight3 from '$lib/assets/images/shoes/midnight_3.jpg?enhanced&quality=80';
import Midnight4 from '$lib/assets/images/shoes/midnight_4.jpg?enhanced&quality=80';
import Midnight5 from '$lib/assets/images/shoes/midnight_5.jpg?enhanced&quality=80';
import Mustard1 from '$lib/assets/images/shoes/mustard_1.jpg?enhanced&quality=80';
import Mustard2 from '$lib/assets/images/shoes/mustard_2.jpg?enhanced&quality=80';
import Mustard3 from '$lib/assets/images/shoes/mustard_3.jpg?enhanced&quality=80';
import Mustard4 from '$lib/assets/images/shoes/mustard_4.jpg?enhanced&quality=80';
import Mustard5 from '$lib/assets/images/shoes/mustard_5.jpg?enhanced&quality=80';
import Sand1 from '$lib/assets/images/shoes/sand_1.jpg?enhanced&quality=80';
import Sand2 from '$lib/assets/images/shoes/sand_2.jpg?enhanced&quality=80';
import Sand3 from '$lib/assets/images/shoes/sand_3.jpg?enhanced&quality=80';
import Sand4 from '$lib/assets/images/shoes/sand_4.jpg?enhanced&quality=80';
import Sand5 from '$lib/assets/images/shoes/sand_5.jpg?enhanced&quality=80';
import type { Component } from 'svelte';

export type ShoeSize = {
	icon: Component;
	name: string;
	size: 'small' | 'medium' | 'large';
	talla: string;
	meses: string;
	tamano_pie: {
		largo: string;
		ancho: string;
	};
};

export const shoeSizes: ShoeSize[] = [
	{
		icon: OwlIcon,
		name: 'Ardilla',
		size: 'small',
		talla: '18/19',
		meses: '9 a 12 meses',
		tamano_pie: {
			largo: '10,3cm - 11,3cm',
			ancho: '5,2cm'
		}
	},
	{
		icon: FoxIcon,
		name: 'Zorro',
		size: 'medium',
		talla: '20/21',
		meses: '12 a 18 meses',
		tamano_pie: {
			largo: '11,5cm - 12,5cm',
			ancho: '5,4cm'
		}
	},
	{
		icon: MooseIcon,
		name: 'Ciervo',
		size: 'large',
		talla: '22/23',
		meses: '18 a 24 meses',
		tamano_pie: {
			largo: '12,7cm - 13,7cm',
			ancho: '5,6cm'
		}
	}
];

export type ShoesGalleryData = {
	id: string;
	title: string;
	description: string;
	imgs: string[];
};

export const shoesGalleryData: ShoesGalleryData[] = [
	{
		id: 'mustard',
		title: 'Mustard',
		description: 'Piel y ante',
		imgs: [Mustard1, Mustard2, Mustard3, Mustard4, Mustard5]
	},
	{
		id: 'midnight',
		title: 'Midnight',
		description: 'Piel y ante',
		imgs: [Midnight1, Midnight2, Midnight3, Midnight4, Midnight5]
	},
	{
		id: 'sand',
		title: 'Sand',
		description: 'Piel y ante',
		imgs: [Sand1, Sand2, Sand3, Sand4, Sand5]
	},
	{
		id: 'cherry',
		title: 'Cherry',
		description: 'Loneta y ante',
		imgs: [Cherry1, Cherry2, Cherry3, Cherry4, Cherry5]
	},
	{
		id: 'honey',
		title: 'Honey',
		description: 'Loneta y ante',
		imgs: [Honey1, Honey2, Honey3, Honey4, Honey5]
	},
	{
		id: 'cloud',
		title: 'Cloud',
		description: 'Loneta y ante',
		imgs: [Cloud1, Cloud2, Cloud3, Cloud4, Cloud5]
	}
];
