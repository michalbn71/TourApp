import { Component, EventEmitter, Input, OnChanges, Output } from "@angular/core";

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})

export class RatingComponent implements OnChanges {

  @Input() model: any;
  cropWidth: number = 75;
  @Output() notifyRatingClick: EventEmitter<string> = new EventEmitter<string>();

  ngOnChanges() : void {
    this.cropWidth = this.model.Rating * 75/5;
    console.log('on changes rating component')
  }

  onRatingClick(): void {
    this.notifyRatingClick.emit(`Rating ${this.model.Rating} of City ${this.model.City} was clicked !`);
  }

}
