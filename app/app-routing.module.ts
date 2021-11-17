import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { Home2Component } from './pages/home2/home2.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { FooterComponent } from './pages/footer/footer.component';

const routes: Routes = [
  {path: "home", component: HomePageComponent},
  {path: "home2", component: Home2Component},
  {path: "login", component: LoginComponent},
  {path: "register", component: RegisterComponent},
  {path: "contact", component: ContactComponent},
  {path: "actores", component: AboutComponent},
  {path: "footer", component: FooterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
