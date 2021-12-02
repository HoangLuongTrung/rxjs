import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./rxjs-home/rxjs-home.module').then(m => m.RxjsHomeModule)
  },
  {
    path: 'rxjs-subject',
    loadChildren: () =>
      import('./rxjs-subject/rxjs-subject.module').then(m => m.RxjsSubjectModule)
  },
  {
    path: '**', redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
