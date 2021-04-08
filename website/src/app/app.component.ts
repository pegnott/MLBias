import { Component, HostBinding, Input } from '@angular/core';
import { MainContentService } from './services/main-content.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	//@HostBinding('class.contain') contain: boolean = this.mainContent.classes.includes('contain');
	@HostBinding('class.contain') contain: boolean = true;

	public classes: any = this.mainContent.classes;
	constructor(private mainContent: MainContentService) {

	}
	ngOnInit() {

	}
	ngAfterViewInit() {
		console.log(this.mainContent.classes);
	}
  	title = 'bias-in-ai';
}
