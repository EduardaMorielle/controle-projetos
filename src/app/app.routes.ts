import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Projetos } from './pages/projetos/projetos';
import { Membros } from './pages/membros/membros';
import { Relatorios } from './pages/relatorios/relatorios';
import { Sobre } from './pages/sobre/sobre';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'projetos', component: Projetos },
  { path: 'membros', component: Membros },
  { path: 'relatorios', component: Relatorios },
  { path: 'sobre', component: Sobre },
  { path: '**', redirectTo: '' }
];