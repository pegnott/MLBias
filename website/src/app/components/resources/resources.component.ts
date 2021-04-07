import { Component, Input, OnInit } from '@angular/core';
import { GithubService } from 'src/app/services/github.service';
import { SurveyService } from 'src/app/services/survey.service';

@Component({
	selector: 'app-resources',
	templateUrl: './resources.component.html',
	styleUrls: ['./resources.component.scss']
})
export class ResourcesComponent implements OnInit {
	objectKeys = Object.keys;
	objectValues = Object.values;
	@Input() public showAllResources: boolean = false;
	@Input() public survey: any = this.surveyService.data;

	public levels = this.surveyService.levels;
	public markdownFiles:any = this.github.markdownFiles;

    constructor(
		private surveyService: SurveyService,
		private github:GithubService
	) {	}

	ngOnInit(): void {
		console.log(this.surveyService.levels);
		if (Object.keys(this.survey).length > 0) {
			console.log(this.survey);
		}
	}
}
