import { Component, OnInit, HostListener, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy{

  public heroes: any[] =[];
  public heroesSlider: any[] =[];

  @HostListener('window:scroll', ['$event'])
  onScroll(){
    const position = (document.documentElement.scrollTop || document.body.scrollTop) + 1300;
    const max = (document.documentElement.scrollHeight || document.body.scrollHeight);

    if(position > max){
      if(this.heroesService.loading) { return; }
      this.heroesService.getCharacters().subscribe(heroes => {
        this.heroes.push(...heroes);
      })
    }
    
  }

  constructor(private heroesService: HeroesService, private router: Router) { }

  ngOnInit(): void {
    this.heroesService.getCharacters().subscribe( heroes => {
      this.heroes = heroes;
      this.heroesSlider = heroes;
    });
  }

  ngOnDestroy(){
    this.heroesService.resetCharactersPage();
  }

  onTeamClick(){
    this.router.navigate(['/team'])
  }

}
