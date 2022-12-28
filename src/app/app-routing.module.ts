import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { HeroComponent } from './pages/hero/hero.component';
import { SearchComponent } from './pages/search/search.component';
import { TeamComponent } from './pages/team/team.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'hero/:id', component: HeroComponent },
  { path: 'search/:text', component: SearchComponent },
  { path: 'team', component: TeamComponent },
  { path: '**', pathMatch: 'full', redirectTo: '/home' }
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
