import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { LutteurComponent } from './Lutteur/lutteur/lutteur.component';
import { CombatComponent } from './combat/combat.component';
import { ActualiteComponent } from './actualite/actualite.component';
import { StatistiqueComponent } from './statistique/statistique.component';
import { ClassementComponent } from './classement/classement.component';
import { LutteurAddComponent } from './Lutteur/lutteur-add/lutteur-add.component';

export const HomeRouting: Routes = [
  {
    path: '',
    component: HomeComponent,
    children : [
      {
        path: 'lutteur/add',
        component: LutteurAddComponent
      },

      {
        path: 'lutteur',
        component: LutteurComponent
      },
      {
        path: 'combat',
        component: CombatComponent
      },
      {
        path: 'actualite',
        component:ActualiteComponent
      },
      {
        path: 'statistique',
        component: StatistiqueComponent
      },
      {
        path: 'classement',
        component: ClassementComponent
      },

      {
        path: '**',
        redirectTo: 'lutteur'
      }

    ]
  }
];
