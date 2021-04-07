import { Component, HostBinding, Input } from '@angular/core';

@Component({
    selector:       'app-resource-card',
    templateUrl:    './resource-card.component.html',
    styleUrls:      ['./resource-card.component.scss'],
})
export class ResourceCardComponent  {
    @HostBinding('class.list') @Input() list: boolean = false;
    @HostBinding('class.d-noneE') hideCard: boolean = true;

    @Input() public title:string;
	@Input() public tags:string[];
    @Input() public markdownFile:string;
	@Input() public classes:string[] = [];
    @Input() public endpoint:string;

    onReady = () => {
        this.hideCard = false;
        console.log("READY")
    }
}
