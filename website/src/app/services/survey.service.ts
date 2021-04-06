import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Injectable({
  	providedIn: 'root'
})
export class SurveyService {
	public formGroup: FormGroup;
    public defaults:any = {
        intent: "learn",
        ai:     0.5,
        bias:   0.5
    };
    constructor() {
		this.formGroup = new FormGroup({
            intent:	new FormControl(this.defaults.intent, Validators.required),
            ai: new FormControl(this.defaults.ai, Validators.required),
            bias: new FormControl(this.defaults.bias, Validators.required)
        });
	}
}
