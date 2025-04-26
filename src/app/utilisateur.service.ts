import { Injectable } from '@angular/core';

// ici les services ils stockent les données de l'utilisateur 
// Les services il fournit les données 
@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {
  private nom = 'abdoulhafidhou ';
  private prenom = 'maoulida';
  private email =  'musk@gmail.comm';
  private telephone = '649769646';

  getNom(): string{
    return this.nom;
  }

  getPrenom(): string{
    return this.prenom;
  }
  getEmail(): string{
    return this.email;
  }
  getTelephone(): string{
    return this.telephone;
  }
  

  constructor() { }
}
