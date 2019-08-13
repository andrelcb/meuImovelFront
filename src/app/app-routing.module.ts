import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';


const routes: Routes = [
    {path: '', redirectTo: '/conta', pathMatch: 'full'},
    {path: 'conta', loadChildren: './pages/conta/conta.module#ContaModule'},
    {path: 'dashboard', loadChildren: './pages/dashboard/dashboard.module#DashboardModule'},
    {path: 'real-state', loadChildren: './pages/real-state/real-state.module#RealStateModule'},
    {path: 'categorie', loadChildren: './pages/categorie/categorie.module#CategorieModule'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
