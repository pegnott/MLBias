import { Component, OnInit } from '@angular/core';
// import {
// 	trigger,
// 	state,
// 	style,
// 	animate,
// 	transition,
//   } from '@angular/animations';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss'],
	// animations: [
	// 	trigger('toggleClick',[
	// 		state('true', style({
	// 			backgroundColor: "green"
	// 		})),
	// 		state('false', style({
	// 			backgroundColor: "red"
	// 		})),
	// 		transition('true => false', animate('1000ms linear')),
	// 		transition('false => true', animate('1000ms linear'))
	// 	])
	// ]

})
export class HomeComponent implements OnInit {
	isGreen: string = 'true';
 	constructor() { }
	ngOnInit(): void {	}
	toggleIsCorrect() {
		this.isGreen = this.isGreen === 'true' ? 'false' : 'true'; // change in data-bound value
	}
}
