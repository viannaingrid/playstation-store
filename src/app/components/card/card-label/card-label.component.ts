import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-label',
  templateUrl: './card-label.component.html',
  styleUrls: ['./card-label.component.scss']
})
export class CardLabelComponent {

	@Input()
	gameLabel:string = ""

	constructor(){

	}

	ngOnInit(): void{

	}
}
