import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  public text: string = '';
  public heroes: any[] = [];

  constructor(private activatedRoute: ActivatedRoute,
              private heroesService: HeroesService) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe( params => {
      this.text = params['text'];
      this.heroesService.searchHeroes(params['text']).subscribe( heroes =>{
        this.heroes = heroes;
      })
    })
  }

}
