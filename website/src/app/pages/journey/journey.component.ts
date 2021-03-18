import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatVerticalStepper } from '@angular/material/stepper';
@Component({
	selector: 'app-journey',
	templateUrl: './journey.component.html',
	styleUrls: ['./journey.component.scss']
})
export class JourneyComponent {
	@ViewChild('stepper') stepper!: MatVerticalStepper;
	constructor(
		public matDialog: MatDialog,
	) { }

	public openDialog(dialog:any) {
		console.log(dialog);
		// let dialogRef = dialog.open();
		// dialogRef.afterClosed().subscribe(this.completeStep.bind(this));
	}
	public completeStep() {
		this.stepper.selected.completed = true;
		this.stepper.next();
	}
}
