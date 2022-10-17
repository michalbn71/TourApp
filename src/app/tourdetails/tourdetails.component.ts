import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlacesService } from '../services/places/places.service';

@Component({
  selector: 'app-tourdetails',
  templateUrl: './tourdetails.component.html',
  styleUrls: ['./tourdetails.component.css']
})


export class TourdetailsComponent implements OnInit {
  pageTitle: string = 'Here tour details below:';
  tourDetails: any;

  constructor(private route: ActivatedRoute, private placesService: PlacesService) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.getTourDetails(id);
  }

  getTourDetails(id: number) {
    this.placesService.getTourById(id).subscribe({
      next: tour => this.tourDetails = tour
     });
  }
}
