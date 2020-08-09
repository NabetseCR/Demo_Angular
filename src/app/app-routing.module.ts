import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//1 Import the component
import { TodosComponent } from './components/todos/todos.component';
import { AboutComponent } from './components/pages/about/about.component';
// 2 Add the path '' = root
const routes: Routes = [
  { path: '', component: TodosComponent},
  { path: 'about', component: AboutComponent}
];
// 3 add to the app componenthtml
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
