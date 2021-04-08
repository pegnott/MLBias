import { Component } from '@angular/core';
import { SurveyService } from 'src/app/services/survey.service';
@Component({
	selector: 'app-page-learn',
	templateUrl: './learn.component.html',
	styleUrls: ['./learn.component.scss']
})
export class LearnPageComponent {
  	constructor(public survey: SurveyService) { }
}
