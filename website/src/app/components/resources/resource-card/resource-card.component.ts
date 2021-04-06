import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-resource-card',
  templateUrl: './resource-card.component.html',
  styleUrls: ['./resource-card.component.scss']
})
export class ResourceCardComponent implements OnInit {
    @Input() public title:string;
	@Input() public tags:string[];
    @Input() public markdownFile:string;
	@Input() public classes:string[] = [];
    @Input() public endpoint:string;

	public markdownContent:string;
	constructor(
		private http:HttpClient
	) { }
    ngOnInit(): void {
		// this.http.get(`${this.markdownFile}.md`, {
		// 	headers: new HttpHeaders().set('Accept', 'text/plain'),
		// 	responseType: 'text',
		// }).subscribe(
		// 	(content:string) => this.markdownContent = content,
		// 	(error) => console.error(error)
		// )
    }
}
