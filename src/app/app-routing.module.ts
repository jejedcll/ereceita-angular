import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RecipeFormComponent } from './components/recipe-form/recipe-form.component';
import { RecipeDetailComponent } from './components/recipe-detail/recipe-detail.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/accueil',
    pathMatch: 'full',
  },
  {
    path: 'accueil',
    component: DashboardComponent,
  },
  {
    path: 'recherche',
    component: DashboardComponent,
  },
  {
    path: 'ajouter-recette',
    component: RecipeFormComponent,
  },
  {
    path: 'recette/:id',
    component: RecipeDetailComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      paramsInheritanceStrategy: 'always',
      onSameUrlNavigation: 'reload',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
