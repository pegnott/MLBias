import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuildComponent } from './pages/build/build.component';
import { ContributeComponent } from './pages/contribute/contribute.component';

import { HomeComponent } from './pages/home/home.component';
import { LearnComponent } from './pages/learn/learn.component';
import { ResourceComponent } from './pages/resource/resource.component';
// import { JourneyComponent } from './pages/journey/journey.component';
import { ResourcesComponent } from './pages/resources/resources.component';

export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: 'home', component: HomeComponent },
    // { path: 'journey', component: JourneyComponent },
    { path: 'quiz', component: ResourcesComponent },
	{ path: 'resources', component: ResourcesComponent },
    { path: 'resource/:intent/:level/:file', component: ResourceComponent },

	{ path: 'learn', component: LearnComponent },
	{ path: 'build', component: BuildComponent },
	{ path: 'contribute', component: ContributeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
