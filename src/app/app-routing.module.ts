import { NgModule, ViewChild } from '@angular/core';
import { RouterModule, Routes, RouterOutlet, Router, ActivationStart } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminModule } from './admin/admin.module';
import { SidebarComponent } from './sidebar/sidebar.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  }, {
    path: 'dashboard',
    component: DashboardComponent
  }, {
    path: 'admin',
    loadChildren: './admin/admin.module#AdminModule'
  }, {
    path: '',
    component: DashboardComponent
  }, {
    path: '',
    component: SidebarComponent,
    outlet: 'sidebar'
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

/**
 * These configurations are written to test the deactivation of router outlet
 * But this is not working here as expected.
 */
export class AppRoutingModule {
  @ViewChild(RouterOutlet) outlet: RouterOutlet

  constructor(private router: Router) {}

  ngOnInit(): void {
    console.log('subscribe and events')
    this.router.events.subscribe(e => {
      if(e instanceof ActivationStart && e.snapshot.outlet === 'sidebar') {
        this.outlet.deactivate();
      }
    })
  }
}