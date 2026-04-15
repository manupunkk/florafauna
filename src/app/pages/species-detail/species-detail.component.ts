import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Species } from '../../models/species';
import { SpeciesService } from '../../services/species.service';

@Component({
  selector: 'app-species-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './species-detail.component.html',
  styleUrl: './species-detail.component.css'
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
