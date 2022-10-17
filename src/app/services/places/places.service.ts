import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, tap, map } from "rxjs";


@Injectable({
  providedIn: 'root'
})

export class PlacesService {

  private placesUrl = 'api/places/places.json';
  constructor(private http: HttpClient) {}

  getVisitedPlaces() : Observable<any[]> {
    return this.http.get<any[]>(this.placesUrl).pipe(
      tap(data => console.log('All: ', JSON.stringify(data)))
    );
  }

  getTourById(id: number): Observable<any[]> {
    return this.http.get<any[]>(this.placesUrl).pipe(
      map(result => result.find(x => x.Id === id)
    ));
  }


}
