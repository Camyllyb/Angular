import { Component } from '@angular/core';
import { Routes } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  template: `
    <main class="p-4">
      <h1>Hello, Indexa</h1>
      <p>Angular CLI 17.0.3 base pronta para desenvolvimento.</p>
    </main>
  `,
})
export class HomeComponent {}

// Roteamento mínimo para subir a aplicação gerada pelo Angular CLI.
export const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: '**', redirectTo: '' },
];
