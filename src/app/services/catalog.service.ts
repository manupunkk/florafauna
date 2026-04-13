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
      name: 'Gorro Bordado Huemul',
      description: 'Hermoso gorro de algodón con un bordado minimalista del Huemul chileno. Ideal para caminatas.',
      price: 15990,
      imageUrl: 'https://images.unsplash.com/photo-1521369909029-281b6bc93abf?auto=format&fit=crop&q=80&w=600'
    },
    {
      id: 'p2',
      name: 'Polera Vuelo del Cóndor',
      description: 'Polera de diseño sustentable con una ilustración estilizada del Cóndor Andino surcando los cielos.',
      price: 18500,
      imageUrl: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80&w=600'
    },
    {
      id: 'p3',
      name: 'Taza Zorro de Darwin',
      description: 'Taza de cerámica premium pintada a mano. Ayuda a crear conciencia sobre este enigmático cánido.',
      price: 8900,
      imageUrl: 'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?auto=format&fit=crop&q=80&w=600'
    },
    {
      id: 'p4',
      name: 'Bolso Ecológico Copihue',
      description: 'Tote bag de tela reciclada con el estampado de la flor nacional, el Copihue.',
      price: 12000,
      imageUrl: 'https://images.unsplash.com/photo-1597484661643-2f5fef640dd1?auto=format&fit=crop&q=80&w=600'
    }
  ];

  constructor() { }

  getProducts(): Observable<Product[]> {
    return of(this.products);
  }
}
