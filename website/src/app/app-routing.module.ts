import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuildPageComponent } from './pages/build/build.component';
import { ContributePageComponent } from './pages/contribute/contribute.component';

import { HomePageComponent } from './pages/home/home.component';
import { LearnPageComponent } from './pages/learn/learn.component';
import { ResourcePageComponent } from './pages/resource/resource.component';
import { ResourcesPageComponent } from './pages/resources/resources.component';
import { SurveyPageComponent } from './pages/survey/survey.component';

export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: 'home', component: HomePageComponent },
    { path: 'quiz', component: SurveyPageComponent },
	{ path: 'learn', component: LearnPageComponent },
	{ path: 'build', component: BuildPageComponent },
	{ path: 'contribute', component: ContributePageComponent },

	{ path: 'resources', component: ResourcesPageComponent },
    { path: 'resource/:intent/:level/:file', component: ResourcePageComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
