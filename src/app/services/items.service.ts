import {Injectable} from '@angular/core';
import {CATALOG} from '../constants/mock-gallery-items';
import {OutfitsCategorised} from '../models/outfits-categorised';
import {Observable, of} from 'rxjs';
import {Outfit} from '../models/outfit';


@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  constructor() {
  }

  getCatalog(): Observable<OutfitsCategorised[]> {
    return of(CATALOG);
  }

  getProduct(group: string, id: number): Observable<Outfit> {
    console.log(CATALOG);
    return of(CATALOG.find(category => category.title === group).items.find(item => item.id === id));
  }
}
