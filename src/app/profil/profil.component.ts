import { Component,OnInit } from '@angular/core';
import { UtilisateurService } from '../utilisateur.service';
// Importer la service qu'on vient de creer qui est : 
// adresse. normalement ça doit se generer automatiquement mais comme on a creer le component avant service adresse donc on le creer manuellement 
import { AdresseService } from '../adresse.service';
// et le role du component est d'afficher les données qui sont deja declarées ou stockées dans le service au navigateur
//Le component il prepare les données pour l'affichage
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
  genre: string = '';

  // exporter l'adresse
  adresse:string='';

  constructor(
    private utilisateurService: UtilisateurService,
    // appeler l service 
    private adresseService: AdresseService){}
    ngOnInit(): void{
      this.nom = this.utilisateurService.getNom();
      this.prenom = this.utilisateurService.getPrenom();
      this.email = this.utilisateurService.getEmail();
      this.telephone = this.utilisateurService.getTelephone();
      this.genre = this.utilisateurService.getGenre();

      // Afficher service adresse
      this.adresse = this.adresseService.getAdresse();
    
  }

}
