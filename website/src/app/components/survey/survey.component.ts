import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { MatChip } from '@angular/material/chips';
import { SurveyService } from 'src/app/services/survey.service';
@Component({
	selector: 'app-survey',
	templateUrl: './survey.component.html',
	styleUrls: ['./survey.component.scss'],
})
export class SurveyComponent implements OnInit {
	@ViewChild('form') form: NgForm;
    public defaults:any = this.surveyService.defaults;
    public formGroup: FormGroup = this.surveyService.formGroup;
	constructor(
        private surveyService: SurveyService,
	) {	}
	ngOnInit(): void {
		this.formGroup = new FormGroup({
            intent:	new FormControl(this.defaults.intent.default, Validators.required),
            ai: new FormControl(this.defaults.ai, Validators.required),
            bias: new FormControl(this.defaults.bias, Validators.required)
        });
	}
	setIntent(chip:MatChip) {
		chip.select();
		this.formGroup.controls.intent.setValue(chip.value);
	}
}