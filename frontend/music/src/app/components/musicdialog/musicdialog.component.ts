import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Music } from 'src/app/model/musicmodel';

@Component({
  selector: 'app-musicdialog',
  templateUrl: './musicdialog.component.html',
  styleUrls: ['./musicdialog.component.css']
})
export class MusicdialogComponent {

  constructor(
    public dialogRef: MatDialogRef<MusicdialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Music,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
