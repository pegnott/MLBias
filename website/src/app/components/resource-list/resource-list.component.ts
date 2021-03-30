import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-resource-list',
	templateUrl: './resource-list.component.html',
	styleUrls: ['./resource-list.component.scss']
})
export class ResourceListComponent implements OnInit {
	@Input() public showAllResources: boolean = false;
	@Input() public surveyInput: any;
	constructor() { }
	ngOnInit(): void { 	}

}
