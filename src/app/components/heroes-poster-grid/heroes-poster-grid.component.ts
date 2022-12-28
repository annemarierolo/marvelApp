import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes-poster-grid',
  templateUrl: './heroes-poster-grid.component.html',
  styleUrls: ['./heroes-poster-grid.component.css']
})
export class HeroesPosterGridComponent implements OnInit {

  @Input() heroes: any[] = [];

  constructor(private router: Router) { 
  }

  ngOnInit(): void {}

  onHeroClick(hero: any){
    this.router.navigate(['/hero', hero.id]);    
  }

}
