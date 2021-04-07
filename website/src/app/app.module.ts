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
import { HomeComponent } from './pages/home/home.component';
import { JourneyComponent } from './pages/journey/journey.component';
import { ResourcesComponent } from './pages/resources/resources.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogComponent } from './components/dialog/dialog.component';

import { LibraryComponent } from './pages/library/library.component';


import {
	NextIconComponent,
	PrevComponent,
	XdIconComponent
} from './components/icons';
import { ResourceCardComponent } from './components/resources/resource-card/resource-card.component';
import { ResourceListComponent } from './components/resources/resource-list/resource-list.component';

import { SurveyComponent } from './components/survey/survey.component';
import { BuildSurveyComponent } from './components/survey/build/build.component';
import { LearnSurveyComponent } from './components/survey/learn/learn.component';


import { LearnComponent } from './pages/learn/learn.component';
import { BuildComponent } from './pages/build/build.component';
import { ContributeComponent } from './pages/contribute/contribute.component';
import { ResourceComponent } from './pages/resource/resource.component';

@NgModule({
	bootstrap: [AppComponent],
	declarations: [
		AppComponent,
		HeaderComponent,
		FooterComponent,
		HomeComponent,
		JourneyComponent,
		ResourcesComponent,
		XdIconComponent,
		DialogComponent,
		SurveyComponent, BuildSurveyComponent, LearnSurveyComponent,
		ResourceListComponent,
		LibraryComponent,
		ResourceListComponent,
		NextIconComponent,
		PrevComponent,
		ResourceCardComponent,
		BuildComponent,
		LearnComponent,
		ContributeComponent,
		ResourceComponent
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
