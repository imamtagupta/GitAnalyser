import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AngularFireAuthGuard, redirectUnauthorizedTo, redirectLoggedInTo } from '@angular/fire/compat/auth-guard';
import { HomeComponent } from './pages/home/home.component';
import { SigninComponent } from './pages/signin/signin.component';
import { SignupComponent } from './pages/signup/signup.component';
import { PagenotfoundComponent } from './pages/pagenotfound/pagenotfound.component';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['signin']);
const redirectLoggedInToHome = () => redirectLoggedInTo(['']);

export const routes: Routes = [
    { 
      path: '',
      component: HomeComponent 
    },
    { 
      path: 'signin', 
      component: SigninComponent,
      canActivate: [AngularFireAuthGuard], 
      data: { authGuardPipe: redirectLoggedInToHome }
    },
    { 
      path: 'signup', 
      component: SignupComponent,     
      canActivate: [AngularFireAuthGuard], 
      data: { authGuardPipe: redirectUnauthorizedToLogin }
    },
    { 
      path: '**', 
      component: PagenotfoundComponent,        
      canActivate: [AngularFireAuthGuard], 
    },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
