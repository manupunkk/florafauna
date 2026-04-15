import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Species } from '../../models/species';
import { SpeciesService } from '../../services/species.service';

@Component({
  selector: 'app-species-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './species-list.component.html',
  styleUrl: './species-list.component.css'
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
