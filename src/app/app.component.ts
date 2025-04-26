import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ItemsComponent } from "./pages/application/example-items/items.component";
import { ProfilComponent } from "./profil/profil.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ItemsComponent, ProfilComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'test-angular';
}
