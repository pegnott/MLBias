import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule, FormBuilder }   from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { MarkdownModule } from 'ngx-markdown';

import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './modules/material.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomePageComponent } from './pages/home/home.component';
import { JourneyPageComponent } from './pages/journey/journey.component';
import { ResourcesPageComponent } from './pages/resources/resources.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { DialogComponent } from './components/dialog/dialog.component';
import {
	NextIconComponent,
	PrevComponent,
	XdIconComponent
} from './components/icons';

import { ResourceComponent } from './components/resources/resource/resource.component';
import { ResourcesComponent } from './components/resources/resources.component';
import { SurveyComponent } from './components/survey/survey.component';
import { SurveyBuildComponent } from './components/survey/build/build.component';
import { SurveyLearnComponent } from './components/survey/learn/learn.component';

import {
	BuildPageComponent,
	ContributePageComponent,
	LearnPageComponent,
	ResourcePageComponent,
	SurveyPageComponent,
} from './pages/';

@NgModule({
	bootstrap: [AppComponent],
	declarations: [
		AppComponent,
		HeaderComponent,
		FooterComponent,
		HomePageComponent,
		JourneyPageComponent,
		ResourcesPageComponent,
		XdIconComponent,
		DialogComponent,
		SurveyComponent, SurveyBuildComponent, SurveyLearnComponent,
		ResourcesComponent,
		ResourcesComponent,
		NextIconComponent,
		PrevComponent,
		ResourceComponent,
		SurveyPageComponent,
		BuildPageComponent,
		LearnPageComponent,
		ContributePageComponent,
		ResourcePageComponent
	],
	exports: [],
	imports: [
		BrowserModule,
		FormsModule, ReactiveFormsModule,
        MarkdownModule.forRoot({ loader: HttpClient }),
		AppRoutingModule,
		HttpClientModule,
		MaterialModule,
		BrowserAnimationsModule,
	],
	providers: [
		FormBuilder,
	],
	schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
