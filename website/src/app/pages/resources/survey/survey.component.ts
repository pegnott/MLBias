import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { SurveyService } from 'src/app/services/survey.service';
@Component({
	selector: 'app-survey',
	templateUrl: './survey.component.html',
	styleUrls: ['./survey.component.scss'],
})
export class SurveyComponent implements OnInit {
    public defaults:any = this.surveyService.defaults;
    public values: any = this.defaults;
    public formGroup: FormGroup;
	constructor(
        private surveyService: SurveyService,
        private route: ActivatedRoute,
	) {
        this.route.queryParams.subscribe(params => {
            Object.keys(params).forEach((name:any) => {
                let value:string = params[name];
            });
        });
    }
	ngOnInit(): void {
        this.formGroup = new FormGroup({
            intent:	new FormControl(this.defaults.intent, Validators.required),
            ai: new FormControl(this.defaults.ai, Validators.required),
            bias: new FormControl(this.defaults.bias, Validators.required)
        });
	}
}