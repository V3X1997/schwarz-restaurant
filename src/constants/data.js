import images from './images';

const wines = [
  {
    title: 'Chapel Hill Shiraz',
    price: '$56',
    tags: 'AU | Bottle',
  },
  {
    title: 'Catena Malbee',
    price: '$59',
    tags: 'AU | Bottle',
  },
  {
    title: 'La Vieillw Rose',
    price: '$44',
    tags: 'FR | 750 ml',
  },
  {
    title: 'Rhino Pale Ale',
    price: '$31',
    tags: 'CA | 750 ml',
  },
  {
    title: 'Irish Guinness',
    price: '$26',
    tags: 'IE | 750 ml',
  },
];

const food1 = [
  {
    title: 'Fries',
    price: '$5',
    tags: '100g',
  },
  {
    title: 'Green Salad',
    price: '$3.99',
    tags: 'Portion',
  },
  {
    title: 'Onion rings',
    price: '$7.55',
    tags: '5pcs',
  },
  {
    title: 'Pancakes',
    price: '$8.20',
    tags: '2 pcs',
  },
  {
    title: 'Ice cream',
    price: '$6.45',
    tags: '2 scoops',
  },
]

const food2 = [
  {
    title: 'Beef',
    price: '$20',
    tags: '250g',
  },
  {
    title: "Chicken",
    price: '$16',
    tags: '250g',
  },
  {
    title: 'Omlete',
    price: '$10',
    tags: '200g',
  },
  {
    title: 'Duck',
    price: '$31',
    tags: '250g',
  },
  {
    title: 'Lamb',
    price: '$26',
    tags: '250g',
  },
]

const cocktails = [
  {
    title: 'Aperol Sprtiz',
    price: '$20',
    tags: 'Aperol | Villa Marchesi prosecco | soda | 30 ml',
  },
  {
    title: "Dark 'N' Stormy",
    price: '$16',
    tags: 'Dark rum | Ginger beer | Slice of lime',
  },
  {
    title: 'Daiquiri',
    price: '$10',
    tags: 'Rum | Citrus juice | Sugar',
  },
  {
    title: 'Old Fashioned',
    price: '$31',
    tags: 'Bourbon | Brown sugar | Angostura Bitters',
  },
  {
    title: 'Negroni',
    price: '$26',
    tags: 'Gin | Sweet Vermouth | Campari | Orange garnish',
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Bib Gourmond',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award01,
    title: 'Rising Star',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award05,
    title: 'AA Hospitality',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award03,
    title: 'Outstanding Chef',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
];

export default { wines, cocktails, food1, food2, awards };
