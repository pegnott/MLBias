import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
	selector: 'app-resources',
	templateUrl: './resources.component.html',
	styleUrls: ['./resources.component.scss']
})
export class ResourcesComponent implements OnInit {
	public formGroupOne: FormGroup;
	public formGroupTwo: FormGroup;
	public formGroupThree: FormGroup;
	constructor(
		private formBuilder: FormBuilder
	) { }

	ngOnInit(): void {
		this.formGroupOne = this.formBuilder.group({
			int:	['learn', Validators.required],
		});
		this.formGroupTwo = this.formBuilder.group({
			ai:		[''],
		});
		this.formGroupThree = this.formBuilder.group({
			bias:	[''],
		});
	}
}
