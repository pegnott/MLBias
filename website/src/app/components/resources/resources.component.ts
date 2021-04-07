import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GithubService } from 'src/app/services/github.service';
import { SurveyService } from 'src/app/services/survey.service';

@Component({
	selector: 'app-resources',
	templateUrl: './resources.component.html',
	styleUrls: ['./resources.component.scss']
})
export class ResourcesComponent {
	objectKeys = Object.keys;
	objectValues = Object.values;
	@Input() public showAllResources: boolean = true;
	@Input() public survey: any = this.surveyService.data;

	public displayNames = this.surveyService.displayNames;
	public markdownFiles:any = this.github.markdownFiles;

    constructor(
		private surveyService: SurveyService,
		private github:GithubService
	) {
		if (Object.keys(this.survey).length > 0) {
			this.showAllResources = false;
			console.log(this.survey);
		}
	}
}
