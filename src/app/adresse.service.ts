import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdresseService {
  getAdresse() : string{
    return' 123 rue errachidia haynajah etage 2'
  }

  constructor() { }
}
