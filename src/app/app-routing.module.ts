import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { StudentBioComponent } from './student-bio/student-bio.component';

const routes: Routes = [
  {path : 'Home' , component : HomeComponent},
  {path: 'register' , component : RegisterComponent},
  {path : '' , component : HomeComponent},
  {path : 'StudentBio' , component : StudentBioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
