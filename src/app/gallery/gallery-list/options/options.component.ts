import {Component, OnInit} from '@angular/core';
import {ActionsService} from '../../../services/actions.service';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.css']
})
export class OptionsComponent implements OnInit {
  orderOptions: string[] = [
    'name',
    'price'
  ];
  option: string;
  groups;

  constructor(
    private actionsService: ActionsService
  ) {
  }

  ngOnInit() {
  }

}
