import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

	@Input()
	gameCover:string = ""

	@Input()
	gameLabel:string = ""

	@Input()
	gameType:string = ""

	@Input()
	gamePrice:string = ""

	constructor(){

	}

	ngOnInit():void {

	}
}
