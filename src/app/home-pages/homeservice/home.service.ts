import { Injectable } from '@angular/core';
import { productModel } from '../homeModel/home-model';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  constructor() {}
  public product: productModel[] = [
    // Facial Cleansers
    {
      image: '/assets/images/facialCleansers.jpg',
      name: 'Facial Cleansers',
      adminName: 'Shahid Ali',
    },
    // Moisturizers
    {
      image: '/assets/images/moisturizeres.jpg',
      name: 'Moisturizers',
      adminName: '',
    },
    // Lip Tint
    {
      image: '/assets/images/liptint.jpg',
      name: 'Lip Tint',
      adminName: '',
    },
    // Photo of a Shiba Inu
    {
      image: '/assets/images/cream.jpg',
      name: 'Photo of a Shiba Inu',
      adminName: '',
    },
    // Toner $ Mists
    {
      image: '/assets/images/tonermosts.jpg',
      name: 'Toner $ Mists',
      adminName: '',
    },
    // Shampoo
    {
      image: '/assets/images/shampoo.jpg',
      name: 'Shampoo',
      adminName: '',
    },
    // Face Mask $ Packs
    {
      image: '/assets/images/facemask.jpg',
      name: 'Face Mask $ Packs',
      adminName: '',
    },
  ];
}
