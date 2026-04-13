export interface Species {
  id: string;
  name: string;
  scientificName: string;
  category: 'Flora' | 'Fauna';
  conservationStatus: string;
  shortDescription: string;
  fullDescription: string;
  imageUrl: string;
}
