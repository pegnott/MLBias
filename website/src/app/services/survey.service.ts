import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  	providedIn: 'root'
})
export class SurveyService {
	public formGroup: FormGroup;
	public levels:any = {
		beginner: "Beginner",
		intermediate: "Intermediate",
		advanced: "Advanced"
	};
    public defaults:any = {
        intent: {
			default: "learn",
			values:	['learn', 'build', 'contribute']
		},
        ai: 0.5,
        bias:  0.5,
    };
	public data:any = {};
	constructor(
		private activatedRoute: ActivatedRoute,
	) {
		this.formGroup = new FormGroup({
            intent:	new FormControl(this.defaults.intent.default, Validators.required),
            ai: new FormControl(this.defaults.ai, Validators.required),
            bias: new FormControl(this.defaults.bias, Validators.required)
        });
		this.activatedRoute.queryParams.subscribe(this.checkQueryParams.bind(this));
	}
	private checkQueryParams(params:any) {
		Object.keys(params).forEach(key => {
			let value = params[key];
			if (this.defaults[key]) {
				if (!isNaN(+value)) value = this.levelToString(value);
				this.data[key] = value;
			}
		});
	}
	private levelToString(level:number) {
        if (level < 1.5) return "Beginner";
        else if (level >= 2.5) return "Advanced";
        else  return "Intermediate";
    }
}
