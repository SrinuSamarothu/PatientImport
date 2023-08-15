import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewImportsComponent } from './NewImports/new-imports/new-imports.component';
import { PageTwoComponent } from './NewImports/page-two/page-two.component';
import { NavBarComponent } from './ReusableComponents/nav-bar/nav-bar.component';
import { Pendingimports1Component } from './PendingImports/pendingimports1/pendingimports1.component';
import { CompletedImportsComponent } from './completed-imports/completed-imports.component';

const routes: Routes = [
  // {
  //   path : '', component : NavBarComponent
  // },
  {
    path : 'NewImports', component : NewImportsComponent
  },
  {
    path : 'NewImports2', component : PageTwoComponent
  },
  {
    path:'PendingImport1', component: Pendingimports1Component
  },
  {
    path:'CompletedImports', component: CompletedImportsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
