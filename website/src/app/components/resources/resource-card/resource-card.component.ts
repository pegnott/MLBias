import { Component, HostBinding, Input } from '@angular/core';
import { GithubService } from 'src/app/services/github.service';

@Component({
    selector:       'app-resource-card',
    templateUrl:    './resource-card.component.html',
    styleUrls:      ['./resource-card.component.scss'],
})
export class ResourceCardComponent  {
    @HostBinding('class.list') @Input() list: boolean = false;
    @HostBinding('class.d-none') hideCard: boolean = true;

    @Input() public title:string;
	@Input() public tags:string[];
    @Input() public markdownFile:string;
	@Input() public classes:string[] = [];
    @Input() public showActions:boolean = true;
    
    constructor(
        public github: GithubService
    ) {}
    onReady = () => {
        this.hideCard = false;
        console.log("READY")
    }
}
