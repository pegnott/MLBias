import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-resource-card',
  templateUrl: './resource-card.component.html',
  styleUrls: ['./resource-card.component.scss']
})
export class ResourceCardComponent implements OnInit {
    @Input() public topic:string;
    @Input() public readme:string;
    @Input() public endpoint:string;
    
    constructor() { }

    ngOnInit(): void {
        console.log(this.topic);
        console.log(this.readme);
        console.log(this.endpoint);

    }

}
