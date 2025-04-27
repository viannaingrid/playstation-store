import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ColecoesComponent } from './pages/colecoes/colecoes.component';

const routes: Routes = [
	{
		path:'',
		component: HomeComponent,
		pathMatch: 'full'
	},
	{
		path:'colecoes',
		component: ColecoesComponent,
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
