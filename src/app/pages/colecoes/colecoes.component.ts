import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-colecoes',
  templateUrl: './colecoes.component.html',
  styleUrls: ['./colecoes.component.scss']
})
export class ColecoesComponent {

	@Input()
	photoCover:string = ""

	@Input()
	photoLabel:string = "Escolha a categoria do seu jogo"

	constructor(){

	}

	ngOnInit(): void {

	}
}

