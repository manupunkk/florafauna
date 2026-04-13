import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Species } from '../../models/species';
import { SpeciesService } from '../../services/species.service';

@Component({
  selector: 'app-species-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="detail-container" *ngIf="species">
      <a routerLink="/species" class="back-link">← Volver al listado</a>
      
      <div class="detail-card">
        <div class="img-section">
          <img [src]="species.imageUrl" [alt]="species.name" />
        </div>
        <div class="info-section">
          <span class="badge" [ngClass]="{'badge-flora': species.category === 'Flora', 'badge-fauna': species.category === 'Fauna'}">
            {{ species.category }}
          </span>
          <h1>{{ species.name }}</h1>
          <p class="scientific">{{ species.scientificName }}</p>
          
          <div class="status-box">
            <h3>Estado de Conservación:</h3>
            <p class="status-text">{{ species.conservationStatus }}</p>
          </div>
          
          <div class="desc-box">
            <h3>Descripción General</h3>
            <p>{{ species.fullDescription }}</p>
          </div>
        </div>
      </div>
    </div>
    
    <div class="not-found" *ngIf="!species && loaded">
      <h2>Especie no encontrada.</h2>
      <a routerLink="/species" class="back-link">Volver al listado</a>
    </div>
  `,
  styles: `
    .detail-container {
      max-width: 1000px;
      margin: 0 auto;
    }
    .back-link {
      display: inline-block;
      margin-bottom: 2rem;
      text-decoration: none;
      color: var(--primary-color);
      font-weight: 600;
    }
    .back-link:hover { text-decoration: underline; }
    
    .detail-card {
      display: flex;
      background: var(--surface-color);
      border-radius: 16px;
      overflow: hidden;
      box-shadow: 0 8px 30px rgba(0,0,0,0.12);
    }
    .img-section {
      flex: 1;
      min-width: 300px;
    }
    .img-section img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    .info-section {
      flex: 1;
      padding: 3rem;
      display: flex;
      flex-direction: column;
    }
    .badge {
      align-self: flex-start;
      padding: 0.5rem 1rem;
      border-radius: 20px;
      font-size: 0.9rem;
      font-weight: bold;
      color: white;
      margin-bottom: 1rem;
    }
    .badge-flora { background: var(--secondary-color); }
    .badge-fauna { background: #d97706; }
    
    h1 {
      font-size: 2.5rem;
      margin: 0 0 0.5rem 0;
    }
    .scientific {
      font-size: 1.2rem;
      font-style: italic;
      color: var(--text-secondary);
      margin-bottom: 2rem;
    }
    .status-box {
      background: rgba(217, 119, 6, 0.1);
      padding: 1rem 1.5rem;
      border-left: 4px solid #d97706;
      border-radius: 0 8px 8px 0;
      margin-bottom: 2rem;
    }
    .status-box h3 { margin: 0 0 0.5rem 0; font-size: 1rem; color: #d97706; }
    .status-box p { margin: 0; font-weight: bold; font-size: 1.2rem; }
    
    .desc-box h3 {
      font-size: 1.4rem;
      margin-bottom: 1rem;
      color: var(--primary-color);
    }
    .desc-box p {
      line-height: 1.8;
      color: var(--text-color);
    }
    
    @media (max-width: 768px) {
      .detail-card {
        flex-direction: column;
      }
      .img-section {
        height: 300px;
      }
      .info-section {
        padding: 2rem;
      }
    }
  `
})
export class SpeciesDetailComponent implements OnInit {
  species?: Species;
  loaded = false;

  constructor(
    private route: ActivatedRoute,
    private speciesService: SpeciesService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.speciesService.getSpeciesById(id).subscribe(data => {
        this.species = data;
        this.loaded = true;
      });
    } else {
      this.loaded = true;
    }
  }
}
