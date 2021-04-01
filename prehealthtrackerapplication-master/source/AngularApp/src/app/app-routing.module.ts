import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginPageComponent} from './Components/login-page/login-page.component';
import {EnterInfoPageComponent} from './Components/enter-info-page/enter-info-page.component';
import {CreateAccountPageComponent} from './Components/create-account-page/create-account-page.component';
import {AboutPageComponent} from './Components/about-page/about-page.component';
import {HomePageComponent} from "./Components/home-page/home-page.component";

const routes: Routes = [
  {path: 'login-page', component: LoginPageComponent},
  {path: 'enter-info', component: EnterInfoPageComponent},
  {path: 'register-page', component: CreateAccountPageComponent},
  {path: 'about', component: AboutPageComponent},
  {path: 'home-page', component: HomePageComponent},
  {path: '', component:HomePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule{

}
export const routingComponents = [LoginPageComponent, EnterInfoPageComponent, CreateAccountPageComponent, AboutPageComponent];
