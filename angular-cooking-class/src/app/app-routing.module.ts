import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [{ path: 'home', component: HomeComponent },
{ path: 'login', component: LoginComponent },
{ path: 'favorites', component: FavoritesComponent },
{ path: 'recipe-detail', component: RecipeDetailComponent },
{ path: 'recipe-detail/:id', component: RecipeDetailComponent },
{ path: 'registration', component: RegistrationComponent },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
