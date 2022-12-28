import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { HeroComponent } from './hero/hero.component';
import { SearchComponent } from './search/search.component';
import { ComponentsModule } from '../components/components.module';
import { TeamComponent } from './team/team.component';
import { FormsModule } from '@angular/forms'



@NgModule({
  declarations: [
    HomeComponent,
    HeroComponent,
    SearchComponent,
    TeamComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    FormsModule
  ]
})
export class PagesModule { }
