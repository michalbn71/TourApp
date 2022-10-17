import { Component, OnChanges, OnInit, SimpleChange, SimpleChanges } from '@angular/core';
import { Pipe } from '@angular/core';
import * as $ from 'jquery';
import { PlacesService } from '../services/places/places.service';

@Component({
  selector: 'app-tourlist',
  templateUrl: './tourlist.component.html',
  styleUrls: ['./tourlist.component.css']
})

export class TourlistComponent implements OnInit, OnChanges {
  componentTitle: string =  "List of visited places";
  placesToDisplay: any[] = [];
  placesFilter: string = "";
  errorMessage: any;

  constructor(private placesService: PlacesService){}

   ngOnInit(): void {

   this.placesService.getVisitedPlaces().subscribe({
      next: places => this.placesToDisplay = places,
      error: err => this.errorMessage = err
    });

    console.log('on init tourlist component')
  }

  ngOnChanges(): void {
    console.log('on changes tourlist component')
  }

  showBudget : boolean = false;
  toggleBudget() {
    this.showBudget = !this.showBudget;
  }

  reversePlacesOrder(): void {
    this.placesToDisplay.reverse();
  }

  onNotifyRatingClick(message: string) {
    $('.js_eventInfo').empty();
    $('.js_eventInfo').append(`<div>${message}</div>`);
  }
}
