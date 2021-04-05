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
    public readMes: any =  {};
    public endPoints: any = {};
    public githubBases: any = {
        default: 'https://github.com/XDgov/MLBias/tree/main/',
        raw: 'https://raw.githubusercontent.com/XDgov/MLBias/main/',
    }
    public featuredTopics: string[] = [];
    constructor() { }
    
	ngOnInit(): void { 	
        console.log(this.surveyInput)
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
            this.readMes = this.githubUrlsFromSurvey(`${this.githubBases.raw}${this.humanReadableSurvey.intent}`, true);
            this.endPoints = this.githubUrlsFromSurvey(`${this.githubBases.default}${this.humanReadableSurvey.intent}`);
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

    private githubUrlsFromSurvey(url:string, defaultFile:boolean = false) {
        let filename = (defaultFile) ? `/${this.fileName}` : ``;
        let urls:any = {};
        urls.default =  `${url}${filename}`;
        Object.keys(this.surveyInput).forEach((name:string) => {
            if (name !== 'intent') {
                urls[name] = `${url}/${this.humanReadableSurvey[name]}${filename}`;
            }            
        });
        // let otherResources:string[] = ['Papers.md'];
        // otherResources.forEach((type:string) => {
        //     let resourceUrl = `${url}/${type}`;
        // });
        return urls;
    }
}
