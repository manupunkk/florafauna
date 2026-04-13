import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Species } from '../../models/species';
import { SpeciesService } from '../../services/species.service';

@Component({
  selector: 'app-species-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="species-container">
      <div class="page-header">
        <h1>Explora nuestra Flora y Fauna Ecológica</h1>
        <p>Conoce las especies más emblemáticas de Chile que requieren nuestra protección.</p>
        
        <div class="filters">
          <button (click)="sortByName()" [class.active]="currentSort === 'name'">Ordenar A-Z</button>
          <button (click)="sortByCategory()" [class.active]="currentSort === 'category'">Ordenar por Categoría</button>
        </div>
      </div>

      <div class="grid">
        <div *ngFor="let item of speciesList" class="card">
          <div class="card-img" [style.backgroundImage]="'url(' + item.imageUrl + ')'">
            <span class="badge" [ngClass]="{'badge-flora': item.category === 'Flora', 'badge-fauna': item.category === 'Fauna'}">
              {{ item.category }}
            </span>
          </div>
          <div class="card-content">
            <h3>{{ item.name }}</h3>
            <p class="scientific-name">{{ item.scientificName }}</p>
            <p class="short-desc">{{ item.shortDescription }}</p>
            <a [routerLink]="['/species', item.id]" class="btn-detail">Ver detalle</a>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: `
    .species-container {
      max-width: 1200px;
      margin: 0 auto;
    }
    .page-header {
      text-align: center;
      margin-bottom: 3rem;
    }
    .page-header h1 {
      font-size: 2.5rem;
      color: var(--primary-color);
      margin-bottom: 0.5rem;
    }
    .filters {
      margin-top: 2rem;
      display: flex;
      gap: 1rem;
      justify-content: center;
    }
    .filters button {
      padding: 0.8rem 1.5rem;
      border: 2px solid var(--primary-color);
      background: transparent;
      color: var(--text-color);
      border-radius: 30px;
      cursor: pointer;
      font-weight: 600;
      transition: all 0.3s ease;
    }
    .filters button:hover, .filters button.active {
      background: var(--primary-color);
      color: white;
    }
    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: 2rem;
    }
    .card {
      background: var(--surface-color);
      border-radius: 12px;
      overflow: hidden;
      box-shadow: 0 4px 6px rgba(0,0,0,0.1);
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      display: flex;
      flex-direction: column;
    }
    .card:hover {
      transform: translateY(-5px);
      box-shadow: 0 10px 20px rgba(0,0,0,0.15);
    }
    .card-img {
      height: 200px;
      background-size: cover;
      background-position: center;
      position: relative;
    }
    .badge {
      position: absolute;
      top: 1rem;
      right: 1rem;
      padding: 0.4rem 0.8rem;
      border-radius: 20px;
      font-size: 0.8rem;
      font-weight: bold;
      color: white;
    }
    .badge-flora { background: var(--secondary-color); }
    .badge-fauna { background: #d97706; }
    .card-content {
      padding: 1.5rem;
      display: flex;
      flex-direction: column;
      flex-grow: 1;
    }
    .card-content h3 {
      font-size: 1.5rem;
      margin: 0 0 0.5rem 0;
    }
    .scientific-name {
      font-style: italic;
      color: var(--text-secondary);
      margin-bottom: 1rem;
    }
    .short-desc {
      margin-bottom: 1.5rem;
      flex-grow: 1;
    }
    .btn-detail {
      align-self: flex-start;
      margin-top: auto;
      text-decoration: none;
      color: white;
      background: var(--primary-color);
      padding: 0.8rem 1.5rem;
      border-radius: 8px;
      font-weight: 600;
      transition: background 0.3s;
    }
    .btn-detail:hover {
      background: #1e6d44;
    }
  `
})
export class SpeciesListComponent implements OnInit {
  speciesList: Species[] = [];
  currentSort: string = '';

  constructor(private speciesService: SpeciesService) {}

  ngOnInit(): void {
    this.speciesService.getSpecies().subscribe(data => {
      this.speciesList = [...data];
    });
  }

  sortByName(): void {
    this.currentSort = 'name';
    this.speciesList.sort((a, b) => a.name.localeCompare(b.name));
  }

  sortByCategory(): void {
    this.currentSort = 'category';
    this.speciesList.sort((a, b) => a.category.localeCompare(b.category));
  }
}
