import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {collection, doc, setDoc, updateDoc, getDocs, deleteDoc} from 'firebase/firestore/lite';
import { FirebaseDB } from '../../firebase/config';

@Injectable({
  providedIn: 'root'
})
export class TeamsService {

  constructor() { }

  async createTeam(team: any){
    const teamsDoc = doc(collection(FirebaseDB, 'teams'));
    await setDoc(teamsDoc, team) 
  }

  async editTeam(team: any){
    const teamsDoc = doc(FirebaseDB, 'teams', team.id);
    await updateDoc(teamsDoc, team) 
  }

  async deleteTeam(team: any){
    const teamsDoc = doc(FirebaseDB, 'teams', team.id);
    await deleteDoc(teamsDoc) 
  }

  async getTeams() {
    const teamsDoc = collection(FirebaseDB, 'teams');
    const teamSnapshot = await getDocs(teamsDoc);
    const teamList = teamSnapshot.docs.map(doc => (
      {
        id: doc.id, 
        name: doc.data()['name'],
        description: doc.data()['description'],
        heroes: doc.data()['heroes'],
      }) );
    
    return teamList;
  }
  
}
