import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecipeFormComponent } from './components/recipe-form/recipe-form.component';
import { IngredientFormComponent } from './components/ingredient-form/ingredient-form.component';
import { RecipeDetailComponent } from './components/recipe-detail/recipe-detail.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TagFormComponent } from './components/tag-form/tag-form.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    RecipeFormComponent,
    IngredientFormComponent,
    RecipeDetailComponent,
    DashboardComponent,
    TagFormComponent,
    ToolbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
