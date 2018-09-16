import {Component, OnInit} from '@angular/core';
import {Outfit} from '../../models/outfit';
import {ActivatedRoute} from '@angular/router';
import {ItemsService} from '../../services/items.service';

@Component({
  selector: 'app-outfit-details',
  templateUrl: './outfit-details.component.html',
  styleUrls: ['./outfit-details.component.css']
})
export class OutfitDetailsComponent implements OnInit {
  outfit: Outfit;

  constructor(
    private route: ActivatedRoute,
    private itemsService: ItemsService
  ) {
  }

  ngOnInit() {
  }

  getItem(): void {
    const group: string = this.route.snapshot.paramMap.get('group');
    const id: number = +this.route.snapshot.paramMap.get('id');
    this.itemsService.getProduct(group, id)
      .subscribe(outfit => this.outfit = outfit);
  }
}
