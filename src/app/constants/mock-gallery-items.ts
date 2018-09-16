import {OutfitsCategorised} from '../models/outfits-categorised';

export const CATALOG: OutfitsCategorised[] = [
  {
    title: 'men',
    items: [
      {
        id: 11,
        name: 't-shirt',
        price: 5.00,
        sizes: ['S', 'M', 'L'],
        colors: ['red', 'green', 'black']
      },
      {
        id: 12,
        name: 'pants forclaz',
        price: 30.00,
        sizes: ['40', '42', '44'],
      },
      {
        id: 14,
        name: 'bacpack 2',
        price: 90.00,
        volume: '20 litri'
      }
    ]
  },
  {
    title: 'women',
    items: [
      {
        id: 22,
        name: 'pants forclaz',
        price: 30.00,
        sizes: ['40', '42', '44'],
      },
      {
        id: 23,
        name: 'bacpack',
        price: 60.00,
        volume: '10 litri'
      }
    ]
  },
  {
    title: 'children',
    items: [
      {
        id: 33,
        name: 'bacpack',
        price: 60.00,
        volume: '10 litri'
      },
      {
        id: 34,
        name: 'bacpack 2',
        price: 90.00,
        volume: '20 litri'
      }
    ]
  },
];
