import { RouterModule, Routes } from "@angular/router";
import { FormListaComponent } from "./pages/form-lista/form-lista.component";
import { ListaListasComponent } from "./pages/lista-listas/lista-listas.component";
import { NgModule } from "@angular/core";

const routes: Routes = [
  { path: 'listas', component: ListaListasComponent},
  { path: 'cadastro', component: FormListaComponent},
  { path: '**', redirectTo: '/listas'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule],
})
export class AppRoutingModule { }
