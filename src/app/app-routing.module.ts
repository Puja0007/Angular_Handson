import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClassStyleComponent } from './class-style/class-style.component';

const routes: Routes = [
 {path:'style', component: ClassStyleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
