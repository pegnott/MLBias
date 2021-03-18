import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './modules/material.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { JourneyComponent } from './pages/journey/journey.component';
import { ResourcesComponent } from './pages/resources/resources.component';
import { TutorialComponent } from './pages/tutorial/tutorial.component';
import { ToolsComponent } from './pages/tools/tools.component';
import { TeamComponent } from './pages/team/team.component';
import { AboutComponent } from './pages/about/about.component';
import { PartnersComponent } from './pages/partners/partners.component';
import { ContactComponent } from './pages/contact/contact.component';
import { PrivacyComponent } from './pages/privacy/privacy.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { XdIconComponent } from './components/xd-icon/xd-icon.component';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { DialogComponent } from './components/dialog/dialog.component';

@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		FooterComponent,
		HomeComponent,
		JourneyComponent,
		ResourcesComponent,
		TutorialComponent,
		ToolsComponent,
		TeamComponent,
		AboutComponent,
		PartnersComponent,
		ContactComponent,
		PrivacyComponent,
		XdIconComponent,
		DialogComponent
	],
	exports: [],
	imports: [
		BrowserModule,
		AppRoutingModule,
		HttpClientModule,
		MaterialModule,
		BrowserAnimationsModule,
	],
	providers: [
		// {
		// 	provide: STEPPER_GLOBAL_OPTIONS,
		// 	useValue: { displayDefaultIndicatorType: false }
		// }
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
