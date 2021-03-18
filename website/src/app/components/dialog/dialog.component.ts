import { Component, Input, TemplateRef } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
	selector: 'app-dialog',
	templateUrl: './dialog.component.html',
	styleUrls: ['./dialog.component.scss']
})
export class DialogComponent {
	@Input() title: TemplateRef<any>;
	@Input() content: TemplateRef<any>;
	constructor() {
	}
}
