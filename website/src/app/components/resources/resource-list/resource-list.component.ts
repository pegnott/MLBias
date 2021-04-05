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
    public markdownFiles: string[] =  [];

    public endPoints: any = {};
	public githubEntryPoints: any = {
        default: 'https://github.com/XDgov/MLBias/tree/main/',
        raw: 'https://raw.githubusercontent.com/XDgov/MLBias/main/',
    }

	//public aiEntryPoint:string = this.githubEntryPoints.raw;

    public featuredTopics: string[] = [];

	public levels:any =  {
		// Pretty : For Github Filename
		Advanced: 'Advanced',
		Intermediate: 'Intermed',
		Beginner:	'Beginner'
	}

	public map: any = {
		Learn: {
			ai: new Array("Readme", "Books", "Datasets", "ExternalTooling", "FramworkOverview", "Papers"),
			bias: new Array("MLEthics_Reading")
		},
		Build: {
			ai: new Array("Readme"),
			bias: new Array("DataTools"),
		}
	}



	// public mapper:any = {
	// 	learn: {
	// 		Beginner: 'https://raw.githubusercontent.com/XDgov/MLBias/main/Learn/Beginner_MLEthics_reading.md',
	// 		Intermediate: 'https://raw.githubusercontent.com/XDgov/MLBias/main/Learn/Intermed_MLEthics_Reading.md',
	// 		Advanced: 'https://raw.githubusercontent.com/XDgov/MLBias/main/Learn/Advanced_MLEthics_Reading.md'
	// 	},
	// }
    constructor(
		private http:HttpClient
	) { }
	ngOnInit(): void {
        if (this.surveyInput) {
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
			let intent = this.humanReadableSurvey.intent;
			let aiScore = this.humanReadableSurvey.ai;
			let biasScore = this.humanReadableSurvey.bias;

			this.map[intent].ai.forEach((f:any) => {
				let fileUrl = `${this.githubEntryPoints.raw}${intent}/${aiScore}/${f}.md`;
				this.http
						.get(fileUrl, { headers: new HttpHeaders().set('Accept', 'text/plain'), responseType: 'text'})
						.subscribe(
							response => {
								this.markdownFiles.push(response);
								console.log(response);
							},
							error => console.error(error))
				console.log(fileUrl);
				// this.markdownFiles[f] = `${this.githubEntryPoints.raw}`
				// console.log(f);
			})
			//console.log(this.humanReadableSurvey);
            // this.readMes = this.githubUrlsFromSurvey(`${this.githubBases.raw}${this.humanReadableSurvey.intent}`, true);
            // this.endPoints = this.githubUrlsFromSurvey(`${this.githubBases.default}${this.humanReadableSurvey.intent}`);
        }
    }
    public humanReadableLevel(level:number) {
        if (level < 1.5) return "Beginner";
        else if (level >= 2.5) return "Advanced";
        else  return "Intermediate";
    }

    public formatTopic(topic:string) {
        if (topic === 'ai') topic = topic.toUpperCase();
        else topic = topic.charAt(0).toUpperCase() + topic.slice(1);
        return topic;
    }

	public githubUrlsFromSurvey(filename?:string) {
		let url = this.githubEntryPoints.default;
		if (filename) {
			url = this.githubEntryPoints.raw;
		}
		let intent = this.humanReadableSurvey.intent;
		let aiLevel = this.humanReadableSurvey.ai;
		let biasLevel = this.humanReadableSurvey.bias;



		// let thing = `${url}${intent}/`;
		// console.log(thing);
		// return thing;
		// //let url = `${this.githubBases.raw}`;



        // // let filename = (defaultFile) ? `/${this.fileName}` : ``;
        // // let urls:any = {};
        // // urls.default =  `${url}${filename}`;
        // // Object.keys(this.surveyInput).forEach((name:string) => {
        // //     if (name !== 'intent') {
        // //         urls[name] = `${url}/${this.humanReadableSurvey[name]}${filename}`;
        // //     }
        // // });
    }

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
