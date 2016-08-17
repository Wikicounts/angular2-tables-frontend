import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {ArticleSelectorComponent} from "./article-selector/article-selector.component";
import {DatesSelectorComponent} from "./date-selector/dates-selector.component";

@Component({
  selector: 'pc-filter',
  templateUrl: 'filter.component.html',
  styleUrls: ['filter.component.css'],
  directives: [ArticleSelectorComponent, DatesSelectorComponent]
})
export class FilterComponent implements OnInit {

  private title = "Filter data";

  constructor(private router:Router) { }

  ngOnInit() {
  }

  navigateToCounts() {
    this.router.navigate(['counts']);
  }

}
