import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {collection, doc, setDoc} from 'firebase/firestore/lite';
import { FirebaseDB } from '../../firebase/config';

@Injectable({
  providedIn: 'root'
})
export class TeamsService {

  constructor(private http: HttpClient) { }

  async createTeam(team: any){
    const newDoc = doc(collection(FirebaseDB, '/equipo/heroes'));
    await setDoc(newDoc, team) 
  }
}
