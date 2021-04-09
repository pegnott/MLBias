import { Component } from '@angular/core';
import { MainContentService } from 'src/app/services/main-content.service';
import { SurveyService } from 'src/app/services/survey.service';
@Component({
  selector: 'app-page-build',
  templateUrl: './build.component.html',
  styleUrls: ['./build.component.scss']
})
export class BuildPageComponent {
	public thing:string;


	public markdownFiles:string[] = [
		'Bias_Evaluation',
		'DataTools',
		'ModelChoice'
	]
	constructor(
		public survey: SurveyService,
		private mainContent: MainContentService
	) {
		if (this.survey.data.ai === "Intermediate") this.thing = "Intermed";
		else this.thing = this.survey.data.ai;


	 	this.mainContent.classes.push('contain', 'main-overflow-hidden');
	// 	console.log(this.mainContent.classes)
	}
}
