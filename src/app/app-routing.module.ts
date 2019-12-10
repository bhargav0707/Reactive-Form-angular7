import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { Reactiveform1Component } from './reactiveform1/reactiveform1.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';


const routes: Routes = [

  {path:"",redirectTo:'/reactiveform',pathMatch:'full'},
  {path:'reactiveform',component:ReactiveformComponent},
  {path:'reactiveform1',component:Reactiveform1Component},
  {path:'**',component:NotFoundPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
