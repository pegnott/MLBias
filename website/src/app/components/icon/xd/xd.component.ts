import { Component, Input, OnInit } from '@angular/core';
@Component({
	selector: 'app-icon-xd',
	templateUrl: './xd.component.svg',
	styleUrls: ['./xd.component.scss']
})
export class XdIconComponent {
	@Input() color:string = "white";
}