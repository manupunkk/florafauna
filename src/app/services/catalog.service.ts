import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class CatalogService {
  private products: Product[] = [
    {
      id: 'p1',
      name: 'Jockey Bordado Huemul',
      description: 'Hermoso jockey de malla con un bordado minimalista del Huemul chileno. Ideal para caminatas.',
      price: 15990,
      imageUrl: '/assets/imagen/GorroHuemul.jpg'
    },
    {
      id: 'p2',
      name: 'Polera Vuelo del Cóndor',
      description: 'Polera de diseño sustentable con una ilustración estilizada del Cóndor Andino surcando los cielos.',
      price: 18500,
      imageUrl: '/assets/imagen/PoleraCondor.jpg'
    },
    {
      id: 'p3',
      name: 'Taza Zorro de Darwin',
      description: 'Taza de cerámica premium pintada a mano. Ayuda a crear conciencia sobre este enigmático cánido.',
      price: 8900,
      imageUrl: '/assets/imagen/TazaZorro.jpg'
    },
    {
      id: 'p4',
      name: 'Polerón Chiporro Outdoor',
      description: 'Polerón de chiporro ultra cálido diseñado para las mañanas frías de la Patagonia. Muy cómodo y resistente.',
      price: 24900,
      imageUrl: '/assets/imagen/PoleronChiporro.jpg'
    }
  ];

  constructor() { }

  getProducts(): Observable<Product[]> {
    return of(this.products);
  }
}
