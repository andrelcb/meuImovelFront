import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GuardRouterService } from './services/guard-router.service';


const routes: Routes = [
    { path: '', redirectTo: '/conta', pathMatch: 'full' },
    { path: 'conta', loadChildren: './pages/conta/conta.module#ContaModule' },
    { path: 'dashboard', loadChildren: './pages/dashboard/dashboard.module#DashboardModule', canActivate: [GuardRouterService] },
    { path: 'real-state', loadChildren: './pages/real-state/real-state.module#RealStateModule', canActivate: [GuardRouterService] },
    { path: 'categorie', loadChildren: './pages/categorie/categorie.module#CategorieModule', canActivate: [GuardRouterService] }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
