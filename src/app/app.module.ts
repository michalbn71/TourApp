import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { FilterPipe } from './shared/filter.pipe';
import { TourlistComponent } from './tourlistcomponent/tourlist.component';
import { RatingComponent } from './shared/components/rating.component';
import { HttpClientModule } from '@angular/common/http';
import { TourdetailsComponent } from './tourdetails/tourdetails.component';
import { RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AddNewTourComponent } from './add-new-tour/add-new-tour.component';
import { ShowcaseComponent } from './showcase/showcase.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TourlistComponent,
    RatingComponent,
    FilterPipe,
    TourdetailsComponent,
    PageNotFoundComponent,
    AddNewTourComponent,
    ShowcaseComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: 'tours', component: TourlistComponent },
      { path: 'tour/:id', component: TourdetailsComponent },
      { path: 'welcome', component: WelcomeComponent },
      { path: 'addTour', component: AddNewTourComponent },
      { path: 'showcase', component: ShowcaseComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', component: PageNotFoundComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }
