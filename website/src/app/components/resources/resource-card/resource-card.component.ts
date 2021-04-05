import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-resource-card',
  templateUrl: './resource-card.component.html',
  styleUrls: ['./resource-card.component.scss']
})
export class ResourceCardComponent implements OnInit {
    @Input() public topic:string;
    @Input() public markdownFile:string;
    @Input() public endpoint:string;

	constructor(
	) { }

    ngOnInit(): void {
        // this.http.get(`${this.markdownFile}.md`, {
		// 	headers: new HttpHeaders().set('Accept', 'text/plain'),
		// 	responseType: 'text',
		// }).subscribe(
		// 	console.log,
		// 	error => {
		// 		console.error(error);
		// 		this.OK = false;
		// 	}
		// )
    }
}
