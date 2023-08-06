import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemplateDrivenComponent } from './forms/template-driven/template-driven.component';
import { ReactiveComponent } from './forms/reactive/reactive.component';

const routes: Routes = [
  {path:'template-driven',component:TemplateDrivenComponent},
  {path:'reactive',component:ReactiveComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
