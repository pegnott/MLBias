import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSliderModule } from '@angular/material/slider';
import { MatStepperModule } from '@angular/material/stepper';
// import { MatSidenavModule } from '@angular/material/sidenav';
// import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';

const materialModules = [
	MatButtonModule,
    MatButtonToggleModule,
	MatCardModule,
    MatChipsModule,
	MatDialogModule,
	MatFormFieldModule,
    MatGridListModule,
	MatIconModule,
	MatInputModule,
	MatListModule,
	MatMenuModule,
    // MatSidenavModule,
    MatSliderModule,
    MatStepperModule,
	// MatTableModule,
	MatTabsModule,
    MatToolbarModule
]
@NgModule({
	declarations: [],
	exports: [
		... materialModules
	],
	imports: [
		CommonModule,
		... materialModules
	],
	// providers: [
	// 	{
	// 		provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
	// 		useValue: <MatFormFieldDefaultOptions>{
	// 			appearance: 'outline'
	// 		}
	// 	}
	// ]
})
export class MaterialModule { }