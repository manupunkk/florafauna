import { Routes } from '@angular/router';
import { SpeciesListComponent } from './pages/species-list/species-list.component';
import { SpeciesDetailComponent } from './pages/species-detail/species-detail.component';
import { CatalogComponent } from './pages/catalog/catalog.component';
import { InfoRequestComponent } from './pages/info-request/info-request.component';
import { InicioComponent } from './pages/inicio/inicio.component';

export const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'inicio', component: InicioComponent },
  { path: 'species', component: SpeciesListComponent },
  { path: 'species/:id', component: SpeciesDetailComponent },
  { path: 'catalog', component: CatalogComponent },
  { path: 'request', component: InfoRequestComponent },
  { path: '**', redirectTo: 'inicio' }
];
