import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ListarComponent} from "./listar/listar.component";
import { CadastroComponent } from './cadastro/cadastro.component';


const routes: Routes = [
    {path: '', component: ListarComponent},
    {path: 'cadastro', component: CadastroComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RealStateRoutingModule {
}
