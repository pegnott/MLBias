import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './modules/material.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { JourneyComponent } from './pages/journey/journey.component';
import { ResourcesComponent } from './pages/resources/resources.component';
import { PrivacyComponent } from './pages/privacy/privacy.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { XdIconComponent } from './components/xd-icon/xd-icon.component';
import { DialogComponent } from './components/dialog/dialog.component';
import { FormBuilder } from '@angular/forms';
import { SurveyComponent } from './pages/resources/survey/survey.component';

@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		FooterComponent,
		HomeComponent,
		JourneyComponent,
		ResourcesComponent,
		PrivacyComponent,
		XdIconComponent,
		DialogComponent,
		SurveyComponent
	],
	exports: [],
	imports: [
		BrowserModule,
		FormsModule, ReactiveFormsModule,
		AppRoutingModule,
		HttpClientModule,
		MaterialModule,
		BrowserAnimationsModule,
	],
	providers: [
		FormBuilder,
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
