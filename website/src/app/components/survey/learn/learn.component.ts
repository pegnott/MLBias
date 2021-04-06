import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SurveyService } from 'src/app/services/survey.service';
@Component({
  selector: 'app-learn',
  templateUrl: './learn.component.html',
  styleUrls: ['./learn.component.scss']
})
export class LearnComponent implements OnInit {
	public defaults:any = this.surveyService.defaults;
	@Input() step:string = "ai";
	@Output() valueChanged = new EventEmitter<number>();
  	constructor(
		private surveyService: SurveyService,
	) {
		console.log(this.defaults);
	}
	ngOnInit(): void { }

	updateControls(value:number, controls:any[]) {
		controls.forEach(control => control.value = value);
		this.valueChanged.emit(value);
	}
}
