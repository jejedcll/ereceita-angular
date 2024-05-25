import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from './material/material.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecipeFormComponent } from './components/recipe-form/recipe-form.component';
import { IngredientFormComponent } from './components/ingredient-form/ingredient-form.component';
import { RecipeDetailComponent } from './components/recipe-detail/recipe-detail.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TagFormComponent } from './components/tag-form/tag-form.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DailyReicipeComponent } from './components/daily-reicipe/daily-reicipe.component';
import { ReceipeCardComponent } from './components/receipe-card/receipe-card.component';

@NgModule({
  declarations: [
    AppComponent,
    RecipeFormComponent,
    IngredientFormComponent,
    RecipeDetailComponent,
    DashboardComponent,
    TagFormComponent,
    ToolbarComponent,
    DailyReicipeComponent,
    ReceipeCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
