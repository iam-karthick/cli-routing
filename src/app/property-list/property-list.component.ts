import { Component, OnInit } from '@angular/core';
import { property } from "../data/property";

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {
  property: Array<any> = property;
  constructor() { }

  ngOnInit() {
  }

}
