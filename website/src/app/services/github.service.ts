import { Injectable } from '@angular/core';
@Injectable({
    providedIn: 'root'
})
export class GithubService {
    public entryPoints: any = {
        default: 'https://github.com/XDgov/MLBias/tree/main/',
        raw: 'https://raw.githubusercontent.com/XDgov/MLBias/main/',
    }
    constructor() { }
    makeUrl(params:any) {
        console.log(params)
    }
}
