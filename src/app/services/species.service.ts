import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Species } from '../models/species';

@Injectable({
  providedIn: 'root'
})
export class SpeciesService {
  private speciesList: Species[] = [
    {
      id: '1',
      name: 'Huemul',
      scientificName: 'Hippocamelus bisulcus',
      category: 'Fauna',
      conservationStatus: 'En Peligro',
      shortDescription: 'Cérvido endémico de la región cordillerana de Chile y Argentina.',
      fullDescription: 'El huemul es un ciervo de cuerpo robusto y patas cortas, adaptado a moverse en terrenos escarpados. Su pelaje es grueso y denso, de color café oscuro. Es una especie heráldica de Chile, presente en su escudo nacional. Actualmente sus poblaciones están muy fragmentadas debido a la pérdida de hábitat.',
      imageUrl: '/assets/imagen/Huemul.jpg'
    },
    {
      id: '2',
      name: 'Cóndor Andino',
      scientificName: 'Vultur gryphus',
      category: 'Fauna',
      conservationStatus: 'Vulnerable',
      shortDescription: 'El ave no marina de mayor envergadura del planeta.',
      fullDescription: 'Es una de las aves voladoras más grandes del mundo. Posee plumaje negro con un collar blanco en el cuello. Cumple un rol fundamental en el ecosistema como ave carroñera. Se encuentra a lo largo de toda la cordillera de los Andes.',
      imageUrl: '/assets/imagen/CondorAndino.jpg'
    },
    {
      id: '3',
      name: 'Zorro de Darwin',
      scientificName: 'Lycalopex fulvipes',
      category: 'Fauna',
      conservationStatus: 'En Peligro Crítico',
      shortDescription: 'Una especie de cánido endémico de Chile descubierto por Charles Darwin.',
      fullDescription: 'Es más pequeño que el zorro culpeo y de coloración más oscura. Vive principalmente en los bosques templados del sur de Chile, con poblaciones aisladas en la Isla de Chiloé y la Cordillera de Nahuelbuta. Su principal amenaza es la fragmentación de su hábitat y ataques de perros.',
      imageUrl: '/assets/imagen/ZorroDarwin.jpg'
    },
    {
      id: '4',
      name: 'Copihue',
      scientificName: 'Lapageria rosea',
      category: 'Flora',
      conservationStatus: 'Vulnerable',
      shortDescription: 'Flor nacional de Chile, de forma acampanada y color rojo intenso.',
      fullDescription: 'Es una enredadera perennifolia que crece en los bosques templados húmedos del centro y sur de Chile. Produce flores de gran tamaño, carnosas, generalmente rojas, aunque existen variantes rosadas y blancas. Su recolección indiscriminada ha afectado sus ecosistemas.',
      imageUrl: '/assets/imagen/Copihue.jpg'
    },
    {
      id: '5',
      name: 'Alerce',
      scientificName: 'Fitzroya cupressoides',
      category: 'Flora',
      conservationStatus: 'En Peligro',
      shortDescription: 'Árbol milenario enorme, similar a las secuoyas norteamericanas.',
      fullDescription: 'Es uno de los árboles más longevos del mundo, habitando en los tupidos bosques del sur de Chile. Tiene un crecimiento extremadamente lento. Fue fuertemente explotado por la gran calidad de su madera, que es muy resistente a la pudrición.',
      imageUrl: '/assets/imagen/Alerce.jpg'
    }
  ];

  constructor() { }

  getSpecies(): Observable<Species[]> {
    return of(this.speciesList);
  }

  getSpeciesById(id: string): Observable<Species | undefined> {
    const species = this.speciesList.find(s => s.id === id);
    return of(species);
  }
}
