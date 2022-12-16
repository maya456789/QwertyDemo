import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './adminPages/default/default.component';
import { CoreuiSidebarComponent } from './coreui-sidebar/coreui-sidebar.component';
import { IraTestComponent } from './ira-test/ira-test.component';
import { LoginComponent } from './login/login.component';
import { RegisterPageComponent } from './register/register-page/register-page.component';
import { SignupComponent } from './signup/signup.component';
import { SpaSidebarComponent } from './spa-sidebar/spa-sidebar.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'iraTest',
    pathMatch: 'full'
  },
  {path:'iraTest',component:IraTestComponent}
 /* {path:'register',component:RegisterPageComponent},
  {path:'',component:DefaultComponent,
    children:[
      {path:'reg',component:RegisterPageComponent}
    ]},
    {path:'login',component:LoginComponent},
    {path:'signup',component:SignupComponent},
    {path:'spa',component:SpaSidebarComponent,
     children:[
      {path:'reg',component:RegisterPageComponent}
     ]},

     {path:'dashboard',component:CoreuiSidebarComponent,
    children:[
      {path:'regPage',component:RegisterPageComponent}
    ]}*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
