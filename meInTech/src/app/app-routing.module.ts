import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { CoursesComponent } from './courses/courses.component';
import { CourseComponent } from './course/course.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {path: 'register', component: RegisterComponent},
  {path: 'courses', component: CoursesComponent},
  {path: 'courses/:id', component: CourseComponent},
  {path: 'courses/:id/lesson/:lesson_id', component: CourseComponent},
  // {path: '**', component: AppComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
