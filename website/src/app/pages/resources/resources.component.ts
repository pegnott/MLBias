import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SurveyService } from 'src/app/services/survey.service';
@Component({
	selector: 'app-resources',
	templateUrl: './resources.component.html',
	styleUrls: ['./resources.component.scss']
})
export class ResourcesComponent implements OnInit {
	public defaults:any = this.surveyService.defaults;
	public showAllResources: boolean = true;
	public showSurvey: boolean = false;
	public surveyInput: any = {};
	constructor(
		private router: Router,
		private activatedRoute: ActivatedRoute,
		private surveyService: SurveyService,
	) {
		if (this.router.url.startsWith('/resources')) {
			this.activatedRoute.queryParams
				.subscribe(params => {
					Object.keys(params).forEach((name:any) => {
						let value:string = params[name];
						this.surveyInput[name] = +value;
						if (isNaN(this.surveyInput[name])) {
							this.surveyInput[name] = value;
						}
					});
					if (JSON.stringify(Object.keys(this.surveyInput)) == JSON.stringify(Object.keys(this.defaults))) {
						this.showAllResources = false;
						let emptyValues:boolean = false;
						Object.values(this.surveyInput).forEach((value:any) => {
							if (value.length == 0)  emptyValues = true;
						});
					}
				});
		} else {
			this.showSurvey = true;
			this.showAllResources = true;
		}
	}
	ngOnInit(): void {}
}