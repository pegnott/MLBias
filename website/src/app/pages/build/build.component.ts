import { Component } from '@angular/core';
import { MainContentService } from 'src/app/services/main-content.service';
import { SurveyService } from 'src/app/services/survey.service';
@Component({
  selector: 'app-page-build',
  templateUrl: './build.component.html',
  styleUrls: ['./build.component.scss']
})
export class BuildPageComponent {
	constructor(
		public survey: SurveyService,
		private mainContent: MainContentService
	) {
	 	this.mainContent.classes.push('contain');
	// 	console.log(this.mainContent.classes)
	}
}
