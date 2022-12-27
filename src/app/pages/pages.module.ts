import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { HeroComponent } from './hero/hero.component';
import { SearchComponent } from './search/search.component';
import { ComponentsModule } from '../components/components.module';
import { RatingModule } from 'ng-starrating';



@NgModule({
  declarations: [
    HomeComponent,
    
  ],
  imports: [
    CommonModule,
    ComponentsModule,
  ]
})
export class PagesModule { }
