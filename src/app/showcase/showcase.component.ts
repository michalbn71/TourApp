import { AfterViewInit, Component, OnInit } from '@angular/core';
import * as $  from 'jquery';

@Component({
  selector: 'app-showcase',
  templateUrl: './showcase.component.html',
  styleUrls: ['./showcase.component.css']
})
export class ShowcaseComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngAfterViewInit(): void {

    // $('body').empty();
    // alert('afterview');
  }


  ngOnInit(): void {
    let config = {
      id: '#last-div'
    }
    this.setupObserver(config);
  }

  setupObserver(config: any) {
    const target = document.querySelector(config.id) as HTMLElement;

    let options = {
      root: null,
      rootMargin: '0px',
      threshold: 1.0
    }

    let observer = new IntersectionObserver(this.callbackFunction, options);
    observer.observe(target);
  }

  callbackFunction(entries: any, observer: any){
    if(entries[0].isIntersecting &&
      entries[0].intersectionRatio >= observer.thresholds[0] ){
      alert('last div is whole shown');
    }
  }
}
