import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BehaviorSubjectComponent } from './components/behavior-subject/behavior-subject.component';
import { SubjectComponent } from './components/subject/subject.component';

const routes: Routes = [
  {path:'behavior',component:BehaviorSubjectComponent},
  {path:'subject',component:SubjectComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
