import { Routes } from '@angular/router';
import { PersonasComponent } from './components/personas/personas.component';

export const routes: Routes = [
  { path: 'personas', component: PersonasComponent },
  { path: '', redirectTo: '/personas', pathMatch: 'full' }
];