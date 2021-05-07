import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { NameComponent } from './name/name.component';
import { ButtonComponent } from './button/button.component';
import { Router, RouterModule, Routes } from '@angular/router';
import { Authservice } from './auth.service';
import { Authguard } from './auth-guard.service';
import { FormComponent } from './form/form.component';

const appRouts:Routes=[
  {path:'',component:AppComponent},
  {path:'name',component:NameComponent,canActivateChild:[Authguard],children:[  {path:':id',component:NameComponent}]},
  
   

  {path:'button',component:ButtonComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NameComponent,
    ButtonComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRouts)
  ],
  providers: [Authservice,Authguard],
  bootstrap: [AppComponent]
})
export class AppModule { }
