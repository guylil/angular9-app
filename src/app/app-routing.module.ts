import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WelcomeComponent} from './welcome/welcome.component';
import {AppComponent} from './app.component';
import {MainComponent} from './main/main.component';


const routes: Routes = [
  { path: 'welcome', component: WelcomeComponent },
  { path: 'main', component: MainComponent },
  { path: '', component: AppComponent },
  // { path: '', redirectTo: 'welcome', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
