import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, UrlSegment } from '@angular/router';
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
	public path: string;
	constructor(
		private router: Router,
		private activatedRoute: ActivatedRoute,
		private surveyService: SurveyService,
	) {
		this.activatedRoute.url.subscribe(this.checkPath.bind(this));
		if (this.router.url.indexOf('?') == -1) {
			this.showSurvey = true;
		} else {
			this.activatedRoute.queryParams.subscribe(this.checkQueryParams.bind(this));
		}
	}
	ngOnInit(): void {
		if (JSON.stringify(Object.keys(this.surveyInput)) == JSON.stringify(Object.keys(this.defaults))) {
			Object.values(this.surveyInput).forEach((value:any) => {
				if (value.length == 0)  this.showSurvey = true;
			});
		} else {
			// @TODO: Do we need to handle this?
		}
	}

	private checkPath(url:UrlSegment[]) {
		if (url[0] && url[0].path) {
			this.path = url[0].path;
			if (this.defaults.intent.values.includes(this.path)) {
				this.defaults.intent.default = this.path;
			}
		}
	}

	private checkQueryParams(params:any) {
		Object.keys(params).forEach((name:any) => {
			let value:string = params[name];
			this.surveyInput[name] = +value;
			if (isNaN(this.surveyInput[name])) {
				this.surveyInput[name] = value;
			}
		});
	}
}