import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-resource-list',
	templateUrl: './resource-list.component.html',
	styleUrls: ['./resource-list.component.scss']
})
export class ResourceListComponent implements OnInit {
	@Input() public showAllResources: boolean = false;
	@Input() public surveyInput: any;

    public humanReadableSurvey: any = {};
    public fileName:string = 'Readme.md';

    public endPoints: any = {};
	public featuredTopics: string[] = [];
	public markdownFiles: any = {
		Learn: new Array("Books", "Datasets", "ExternalTooling", "FrameworkOverview", "Papers"),
		Build: new Array("BuildversusBuy", "Deployment_Retrain", "MachineLearningPipeline", "Model_Explainability", "Results_Interpretation"),
	};
    constructor(
		private http:HttpClient
	) { }
	ngOnInit(): void {

        if (Object.keys(this.surveyInput).length > 0) {
            Object.keys(this.surveyInput).forEach(name => {
                let value = this.surveyInput[name];
                if (name === 'intent') {
                    value = value.charAt(0).toUpperCase() + value.slice(1);
                } else {
                    this.featuredTopics.push(name);
                    value = this.humanReadableLevel(value);
                }
                this.humanReadableSurvey[name] = value;
            });
			// let intent = this.humanReadableSurvey.intent || null;
			// let aiScore = this.humanReadableSurvey.ai || null;
			// let biasScore = this.humanReadableSurvey.bias || null;
			// if (intent) this.markdownFiles[intent].forEach((f:any) => {
			// 	let fileUrl = `${intent}/${aiScore}/${f}.md`;
			// 	// this.http
			// 	// 		.get(fileUrl, { headers: new HttpHeaders().set('Accept', 'text/plain'), responseType: 'text'})
			// 	// 		.subscribe(
			// 	// 			response => {
			// 	// 				this.markdownFiles.push(response);
			// 	// 				console.log(response);
			// 	// 			},
			// 	// 			error => console.error(error))
			// 	// console.log(fileUrl);
			// 	// this.markdownFiles[f] = `${this.githubEntryPoints.raw}`
			// 	// console.log(f);
			// })
			// this.readMes = this.githubUrlsFromSurvey(`${this.githubBases.raw}${this.humanReadableSurvey.intent}`, true);
            // this.endPoints = this.githubUrlsFromSurvey(`${this.githubBases.default}${this.humanReadableSurvey.intent}`);
        }
    }
    public humanReadableLevel(level:number) {
        if (level < 1.5) return "Beginner";
        else if (level >= 2.5) return "Advanced";
        else  return "Intermediate";
    }

    public formatTopic(title:string) {
        if (title === 'ai') title = title.toUpperCase();
        else title = title.charAt(0).toUpperCase() + title.slice(1);
        return title;
    }

	// public githubUrlsFromSurvey(filename?:string) {
	// 	let url = this.githubEntryPoints.default;
	// 	if (filename) {
	// 		url = this.githubEntryPoints.raw;
	// 	}
	// 	let intent = this.humanReadableSurvey.intent;
	// 	let aiLevel = this.humanReadableSurvey.ai;
	// 	let biasLevel = this.humanReadableSurvey.bias;
    // }

    // private githubUrlsFromSurvey(url:string, defaultFile:boolean = false) {
    //     let filename = (defaultFile) ? `/${this.fileName}` : ``;
    //     let urls:any = {};
    //     urls.default =  `${url}${filename}`;
    //     Object.keys(this.surveyInput).forEach((name:string) => {
    //         if (name !== 'intent') {
    //             urls[name] = `${url}/${this.humanReadableSurvey[name]}${filename}`;
    //         }
    //     });
    //     // let otherResources:string[] = ['Papers.md'];
    //     // otherResources.forEach((type:string) => {
    //     //     let resourceUrl = `${url}/${type}`;
    //     // });
    //     return urls;
    // }
}
