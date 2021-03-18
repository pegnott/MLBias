import { Component, Input, OnInit } from '@angular/core';
@Component({
	selector: 'app-xd-icon',
	templateUrl: './xd-icon.component.svg',
	styleUrls: ['./xd-icon.component.scss']
})
export class XdIconComponent {
	@Input() color:string = "white";
}