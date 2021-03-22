import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SurveyService {
    public defaults:any = {
        intent: "learn",
        ai:     "0.5", 
        bias:   "0.5"
    };
    constructor() { }
}
