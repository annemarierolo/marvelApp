import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';
import { Location } from '@angular/common';
import { combineLatest } from 'rxjs';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  public hero!: any;
  public comics: any;
  public series: any;

  constructor(private activatedRoute: ActivatedRoute,
              private heroesService: HeroesService,
              private location: Location,
              private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];

    combineLatest([
      this.heroesService.getHeroDetail(id),
      this.heroesService.getComicsByHero(id),
      this.heroesService.getSeriesByHero(id)
    ]).subscribe( ([heroRes, comicRes, seriesRes]) => {
      if(!heroRes || heroRes.data.results.length == 0){
        this.router.navigateByUrl('/home');
          return;
      }
      this.hero = heroRes.data.results[0];
      this.comics = comicRes.data.results
      this.series = seriesRes.data.results
    });
  }

  onBack(){
    this.location.back();
  }

}
