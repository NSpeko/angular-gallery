import {OutfitsCategorised} from '../models/outfits-categorised';

export const CATALOG: OutfitsCategorised[] = [
  {
    title: 'men',
    items: [
      {
        id: 11,
        name: 't-shirt',
        img: '../../assets/t-shirt-1.png',
        price: 5.00,
        sizes: ['M', 'L', 'XL'],
        colors: ['red', 'green', 'black']
      },
      {
        id: 12,
        name: 'pants forclaz',
        img: '../../assets/pants-1.png',
        price: 30.00,
        sizes: ['M', 'L', 'XL'],
      },
      {
        id: 14,
        name: 'bacpack',
        img: '../../assets/bag-1.png',
        price: 30.00,
        volume: '10 litri'
      }
    ]
  },
  {
    title: 'women',
    items: [
      {
        id: 22,
        name: 'giacket',
        img: '../../assets/jacket-1.png',
        price: 30.00,
        sizes: ['M', 'L', 'XL'],
      },
      {
        id: 23,
        name: 'trekking shoes',
        img: '../../assets/boot-1.png',
        price: 60.00,
        sizes: ['6', '7', '8'],
      }
    ]
  },
  {
    title: 'children',
    items: [
      {
        id: 33,
        name: 'bacpack',
        img: '../../assets/bag-1.png',
        price: 60.00,
        volume: '10 litri'
      },
      {
        id: 34,
        name: 't-shirt',
        img: '../../assets/t-shirt-1.png',
        price: 90.00,
        sizes: ['M', 'L', 'XL'],
      }
    ]
  },
];
