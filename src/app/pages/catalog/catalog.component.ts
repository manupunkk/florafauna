import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product';
import { CatalogService } from '../../services/catalog.service';

@Component({
  selector: 'app-catalog',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="catalog-container">
      <div class="page-header">
        <h1>Catálogo de Subproductos</h1>
        <p>Lleva tu pasión por la naturaleza a todas partes. Todos los fondos recaudados apoyan la conservación.</p>
      </div>

      <div class="product-grid">
        <div *ngFor="let product of products" class="product-card">
          <div class="img-wrapper">
            <img [src]="product.imageUrl" [alt]="product.name">
          </div>
          <div class="product-info">
            <h3>{{ product.name }}</h3>
            <p class="desc">{{ product.description }}</p>
            <div class="price-action">
              <span class="price">\${{ product.price | number }}</span>
              <button class="btn-buy">Añadir al carrito</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: `
    .catalog-container {
      max-width: 1200px;
      margin: 0 auto;
    }
    .page-header {
      text-align: center;
      margin-bottom: 4rem;
    }
    .page-header h1 {
      font-size: 2.5rem;
      color: var(--primary-color);
      margin-bottom: 0.5rem;
    }
    .product-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
      gap: 2.5rem;
    }
    .product-card {
      background: var(--surface-color);
      border-radius: 12px;
      overflow: hidden;
      box-shadow: 0 4px 15px rgba(0,0,0,0.08);
      display: flex;
      flex-direction: column;
      transition: all 0.3s ease;
    }
    .product-card:hover {
      transform: translateY(-8px);
      box-shadow: 0 12px 25px rgba(0,0,0,0.15);
    }
    .img-wrapper {
      height: 250px;
      overflow: hidden;
    }
    .img-wrapper img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.5s ease;
    }
    .product-card:hover .img-wrapper img {
      transform: scale(1.05);
    }
    .product-info {
      padding: 1.5rem;
      display: flex;
      flex-direction: column;
      flex-grow: 1;
    }
    .product-info h3 {
      font-size: 1.2rem;
      margin: 0 0 1rem 0;
      color: var(--text-color);
    }
    .desc {
      color: var(--text-secondary);
      font-size: 0.95rem;
      margin-bottom: 2rem;
      flex-grow: 1;
    }
    .price-action {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: auto;
    }
    .price {
      font-size: 1.4rem;
      font-weight: 800;
      color: var(--primary-color);
    }
    .btn-buy {
      padding: 0.6rem 1.2rem;
      background: var(--text-color);
      color: var(--bg-color);
      border: none;
      border-radius: 6px;
      font-weight: bold;
      cursor: pointer;
      transition: background 0.3s;
    }
    .btn-buy:hover {
      background: var(--primary-color);
      color: white;
    }
  `
})
export class CatalogComponent implements OnInit {
  products: Product[] = [];

  constructor(private catalogService: CatalogService) {}

  ngOnInit(): void {
    this.catalogService.getProducts().subscribe(data => {
      this.products = data;
    });
  }
}
