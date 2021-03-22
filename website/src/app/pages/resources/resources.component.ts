import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SurveyService } from 'src/app/services/survey.service';
@Component({
	selector: 'app-resources',
	templateUrl: './resources.component.html',
	styleUrls: ['./resources.component.scss']
})
export class ResourcesComponent implements OnInit {
    public showSurvey: boolean = true;
    public defaults:any = this.surveyService.defaults;
    public surveyInput: any = {};
    constructor(

        private surveyService: SurveyService,
		private activatedRoute: ActivatedRoute,
        private router: Router
	) { 
        this.router.routeReuseStrategy.shouldReuseRoute = () => false;
        this.activatedRoute.queryParams
            .subscribe(params => {
                Object.keys(params).forEach((name:any) => {
                    let value:string = params[name];
                    this.surveyInput[name] = value;
                });
                if (JSON.stringify(Object.keys(this.surveyInput)) == JSON.stringify(Object.keys(this.defaults))) {
                    let emptyValues:boolean = false;
                    Object.values(this.surveyInput).forEach((value:any) => {
                        if (value.length == 0)  emptyValues = true;
                    })  
                    if (emptyValues) this.showSurvey = true; 
                    else this.showSurvey = false;
                }
            });
            
    }
    ngOnInit(): void {}
}
