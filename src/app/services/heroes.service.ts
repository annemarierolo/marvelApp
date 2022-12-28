import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap, map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  private baseUrl: string = 'https://gateway.marvel.com/v1/public';
  private marvelPage = 0;
  public loading: boolean = false;

  constructor(private http: HttpClient) { }

  get params(){
    return {
      ts: '1',
      apikey: '6358fbe88a94f821467ffd79fb14860e',
      hash: 'e8626361870cc6b2028799a2a8988c8a',
      offset: this.marvelPage
    }
  }

  resetCharactersPage(){
    this.marvelPage = 0;
  }
  getCharacters(): Observable<any[]> {

    if ( this.loading ){
      return of([]);
    }

    this.loading = true;

    return this.http.get<any>(`${this.baseUrl}/characters`,{
      params: this.params
    }).pipe(
      map( (resp: any) => resp.data.results),
      tap( () => {
        this.marvelPage += 20;
        this.loading = false;
      })
    );
  }

  searchHeroes( text: string ):Observable<any[]>{

    const params = {...this.params};
    return this.http.get<any>(`${this.baseUrl}/characters?name=${text}`, {
      params
    }).pipe(
      map( (resp: any) => resp.data.results)
    );
  }

  getHeroDetail(id: string){
    return this.http.get<any>(`${this.baseUrl}/characters/${id}`, {
      params: this.params
    }).pipe(
      catchError( err => of(null) )
    )
  }

  getSeriesByHero(id: string){
    return this.http.get<any>(`${this.baseUrl}/characters/${id}/series`, {
      params: this.params
    }).pipe(
      catchError( err => of(null) )
    )
  }

  getComicsByHero(id: string){
    return this.http.get<any>(`${this.baseUrl}/characters/${id}/comics`, {
      params: this.params
    }).pipe(
      catchError( err => of(null) )
    )
  }
}
