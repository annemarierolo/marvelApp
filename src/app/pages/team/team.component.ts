import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TeamsService } from 'src/app/services/teams.service';
import { HeroesService } from '../../services/heroes.service';
import { ITeam } from 'src/app/interfaces/ITeam';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})

export class TeamComponent implements OnInit {

  @ViewChild('content') content: any;

  public isActive: boolean = true;
  public isSearch: boolean = true;
  public modalButton: string = 'Agregar';
  public warningMsg: string = '';
  public teams: any[] = []
  public team: ITeam = {
    id: '',
    name: '',
    description: '',
    heroes: [] 
  }

  constructor(private heroesService: HeroesService, private teamsService: TeamsService) { }

    public ngOnInit() {
      this.getTeams();
    }

  open(reset?: boolean) {
    if (reset)
      this.team = {
        id: '',
        name: '',
        description: '',
        heroes: [] 
      }
    this.isActive = false;
    const modal = document.getElementById('myModal');
    if (modal) {
      modal.style.display = "block";
    }
  }

  close() {
    this.isActive = true;
    const modal = document.getElementById('myModal');
    if (modal) {
      modal.style.display = "none";
    }
  }

  addHero(hero: string){
    if(hero.length === 0) return;
    if(this.team.heroes.length == 6) {
      this.changeWarning('Se puede agregar un máximo de 6 heroes');
      return;
    }
    this.searchHero(hero);
  }

  removeHero(heroDeleted: any){
    this.team.heroes = this.team.heroes.filter(hero => hero.id != heroDeleted.id);
  }

  searchHero(hero: string){
    this.heroesService.searchHeroes(hero)
    .subscribe( (heroes) => {
      if(heroes.length == 0) {
       this.changeWarning('El heroe no existe');
        return;
      }
      this.team.heroes.push(heroes[0]);
      this.changeWarning();
    })
  }

  changeWarning(text: string = ''){
    this.warningMsg = text;
  }

  modifyTeam(team: any) {
    this.modalButton = 'Editar';
    this.team = team;
    this.open();
  }

  requestTeam() {
    if(this.modalButton != 'Agregar')
      this.editTeam(this.team)
    else 
      this.addTeam()

    this.close();
  }

  addTeam(){
    this.teamsService.createTeam(this.team).then(() => this.getTeams()); 
  }

  editTeam(team: any) {
    this.teamsService.editTeam(team);
  }

  deleteTeam(team: any) {
    this.teamsService.deleteTeam(team).then(() => this.getTeams()); 
  }

  getTeams(){
    this.teamsService.getTeams().then(teams  => {this.teams = teams; console.log(teams);
    });    
  }

}
