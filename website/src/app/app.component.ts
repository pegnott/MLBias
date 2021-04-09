import { Component, HostBinding, Input } from '@angular/core';
import { MainContentService } from './services/main-content.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	public classes: any = this.mainContent.classes;
	constructor(private mainContent: MainContentService) { }
	ngOnInit() {}
	ngAfterViewInit() {	}
  	title = 'bias-in-ai';
}
