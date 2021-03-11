import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { JourneyComponent } from './pages/journey/journey.component';
import { ResourcesComponent } from './pages/resources/resources.component';
import { ToolsComponent } from './pages/tools/tools.component';
import { TutorialComponent } from './pages/tutorial/tutorial.component';

export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: 'home', component: HomeComponent },
    { path: 'journey', component: JourneyComponent },
    { path: 'resources', component: ResourcesComponent },
    { path: 'tutorial', component: TutorialComponent },
    { path: 'tools', component: ToolsComponent },  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
