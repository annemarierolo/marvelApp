import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { SliderComponent } from './slider/slider.component';
import { HeroesPosterGridComponent } from './heroes-poster-grid/heroes-poster-grid.component';
import { RatingModule } from 'ng-starrating';
import { ScrollSliderComponent } from './scroll-slider/scroll-slider.component';

@NgModule({
  declarations: [
    NavbarComponent,
    SliderComponent,
    HeroesPosterGridComponent,
    ScrollSliderComponent    
  ],
  imports: [
    CommonModule,
    RouterModule,
    RatingModule  
  ],
  exports: [
    NavbarComponent,
    SliderComponent,
    HeroesPosterGridComponent,
    ScrollSliderComponent    

  ]
})
export class ComponentsModule { }
