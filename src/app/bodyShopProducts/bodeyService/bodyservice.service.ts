import { Injectable } from '@angular/core';
import { bodyModel } from '../bodyShopModel/bodey-model';

@Injectable({
  providedIn: 'root',
})
export class BodyService {
  constructor() {}
  public bodyproduct: bodyModel[] = [
    {
      id: 1,
      description: 'The Body Shop Vitamin E Hydrating Toner (250ML)',
      sellingPrice: 2865,
      listingPrice: 5500,
      country: 'Pakistan',
      imagesUrl: './assets/images/v.jpg',
    },
    {
      id: 2,
      description:
        'The Body Shop Lip and Cheek Stain Red Pomegranate-003 (50ML)',
      sellingPrice: 2733,
      listingPrice: 3520,
      country: 'Pakistan',
      imagesUrl: './assets/images/shop lip.jpg',
    },
    {
      id: 3,
      description: 'The Body Shop Tea Tree Skin Clearing Facial Wash (250ML)',
      sellingPrice: 3050,
      listingPrice: 4300,
      country: 'Pakistan',
      imagesUrl: './assets/images/tree shak.jpg',
    },
    {
      id: 4,
      description: 'The Body Shop Seaweed Oil-Control Gel Cream (50ML)',
      sellingPrice: 3995,
      listingPrice: 4400,
      country: 'Pakistan',
      imagesUrl: './assets/images/seaweed Oil.jpg',
    },
    {
      id: 5,
      description: 'The Body Shop Vitamin C Glow-protect Lotion SPF 30 (50ML)',
      sellingPrice: 4800,
      listingPrice: 6500,
      country: 'Pakistan',
      imagesUrl: './assets/images/vitamin c.jpg',
    },
    {
      id: 6,
      description: 'The Body Shop Seaweed Pore-Cleansing Exfoliator (100ML)',
      sellingPrice: 3585,
      listingPrice: 0,
      country: 'Pakistan',
      imagesUrl: './assets/images/Exfoliator.jpg',
    },
    {
      id: 7,
      description: 'The Body Shop Vitamin E Gentle Facial Wash (125ML)',
      sellingPrice: 2765,
      listingPrice: 4100,
      country: 'Pakistan',
      imagesUrl: './assets/images/vitamin E.jpg',
    },
    {
      id: 8,
      description: 'Rose Dewy Glow - Face Mist',
      sellingPrice: 1950,
      listingPrice: 2230,
      country: 'Pakistan',
      imagesUrl: './assets/images/rosedewy.jpg',
    },
    {
      id: 9,
      description: 'Born Lippy Pot Lip Balm - Passionberry - 10Ml',
      sellingPrice: 899,
      listingPrice: 2230,
      country: 'Pakistan',
      imagesUrl: './assets/images/Passionberry.jpg',
    },
  ];
}
