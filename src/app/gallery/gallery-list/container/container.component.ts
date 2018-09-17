import {Component, OnInit} from '@angular/core';
import {OutfitsCategorised} from '../../../models/outfits-categorised';
import {ItemsService} from '../../../services/items.service';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {
  items: OutfitsCategorised[];
  slideConfig = {'autoplay': false, 'infinite': false, 'arrows': true, 'slidesToShow': 3, 'slidesToScroll': 3};
  slides = [
    {img: 'http://placehold.it/350x150/000000'},
    {img: 'http://placehold.it/350x150/111111'},
    {img: 'http://placehold.it/350x150/333333'},
    {img: 'http://placehold.it/350x150/666666'}
  ];

  constructor(
    private itemsService: ItemsService
  ) {
  }

  ngOnInit() {
    this.getCategorisedItems();
  }

  getCategorisedItems(): void {
    this.itemsService.getCatalog()
      .subscribe(items => this.items = items);
  }

  addSlide() {
    this.slides.push({img: 'http://placehold.it/350x150/777777'});
  }

  removeSlide() {
    this.slides.length = this.slides.length - 1;
  }

  afterChange(e) {
    console.log('afterChange');
  }

}
