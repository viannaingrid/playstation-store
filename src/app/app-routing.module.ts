import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ColecoesComponent } from './pages/colecoes/colecoes.component';
import { OfertasComponent } from './pages/ofertas/ofertas.component';

const routes: Routes = [
	{
		path:'',
		component: HomeComponent,
		pathMatch: 'full'
	},
	{
		path:'colecoes',
		component: ColecoesComponent,
	},
	{
		path:'ofertas',
		component: OfertasComponent
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
