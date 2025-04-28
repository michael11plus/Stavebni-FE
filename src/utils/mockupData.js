import {
	bouraciPrace,
	malirskePrace,
	stavebniPrace,
} from '../assets';

export const servicesData = [
	{
		id: 1,
		img: stavebniPrace,
		title: 'Stavební práce',
		to: '/stavebni-prace',
		caption:
			'Kompletní rekonstrukce rodinných domů včetně fasád, střech a interiérů. Zajistíme modernizaci s důrazem na energetickou úsporu.',
	},
	{
		id: 2,
		img: bouraciPrace,
		title: 'Bourací a vyklízecí práce',
		to: '/bouraci-prace',
		caption:
			'Obnovíme váš byt od základů - nové podlahy, elektroinstalace, kuchyně i koupelny. Přeměníme staré prostory v nový moderní domov.',
	},
	{
		id: 3,
		img: malirskePrace,
		title: 'Malířské práce',
		to: '/stavebni-prace',
		caption:
			'Modernizace společných prostor v bytových domech, včetně chodeb, výtahových šachet a sklepních prostor. Zlepšíme estetiku i funkčnost.',
	},
];
