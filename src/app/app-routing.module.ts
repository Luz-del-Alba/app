import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./components/home";
import {DashboardComponent} from "./components/dashboard";
import {EvaluationComponent} from "./components/evaluation";
import {UserComponent} from "./components/user";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'evaluation',
        component: EvaluationComponent
      },
      {
        path: 'users',
        component: UserComponent
      }
    ]
  },

  // otherwise redirect to home
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
