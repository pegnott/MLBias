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
	@Input() public surveyData: any;
	public objectKeys = Object.keys;
	public displayNames = this.survey.displayNames;
	public markdownFiles:any = this.github.markdownFiles;

    constructor(
		public survey: SurveyService,
		private github:GithubService
	) {
		console.log(this.surveyData);
	}
}
