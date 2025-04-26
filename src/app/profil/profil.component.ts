import { Component,OnInit } from '@angular/core';
import { UtilisateurService } from '../utilisateur.service';

@Component({
  selector: 'app-profil',
  imports: [],
  templateUrl: './profil.component.html',
  styleUrl: './profil.component.css'
})
export class ProfilComponent implements OnInit {
  nom: string = '';
  prenom: string = '';
  email: string = '';
  telephone: string = '';

  constructor(private utilisateurService: UtilisateurService){}
    ngOnInit(): void{
      this.nom = this.utilisateurService.getNom();
      this.prenom = this.utilisateurService.getPrenom();
      this.email = this.utilisateurService.getEmail();
      this.telephone = this.utilisateurService.getTelephone();
    
  }

}
