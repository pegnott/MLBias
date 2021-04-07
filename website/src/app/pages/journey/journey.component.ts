import { Component, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatVerticalStepper } from '@angular/material/stepper';
import { DialogComponent } from 'src/app/components/dialog/dialog.component';
@Component({
	selector: 'app-page-journey',
	templateUrl: './journey.component.html',
	styleUrls: ['./journey.component.scss']
})
export class JourneyPageComponent {
	@ViewChild('stepper') stepper!: MatVerticalStepper;
	constructor(
		public matDialog: MatDialog,
	) { }

	public openDialog(data:any) {
        let dialogRef = this.matDialog.open(DialogComponent, {
            data: data
        });
		dialogRef.afterClosed().subscribe(this.step.bind(this));
	}
	public step(direction:string|boolean) {
        if (direction === 'next' || direction === true)  {
            this.stepper.selected.completed = true;
		    this.stepper.next();
        } else {
            this.stepper.selected.completed = false;
		    this.stepper.previous();
        }

	}
}