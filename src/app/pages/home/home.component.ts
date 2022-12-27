import { Component, OnInit, HostListener, OnDestroy } from '@angular/core';
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
      this.heroesService.getBillboard().subscribe(heroes => {
        this.heroes.push(...heroes);
      })
    }
    
  }

  constructor(private heroesService: HeroesService) { }

  ngOnInit(): void {
    this.heroesService.getBillboard().subscribe( heroes => {
      this.heroes = heroes;
      this.heroesSlider = heroes;
    });
  }

  ngOnDestroy(){
    this.heroesService.resetBillboardPage();
  }

}
