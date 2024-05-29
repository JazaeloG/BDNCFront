import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Persona } from '../../models/persona';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dialog-persona',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './dialog-persona.component.html',
  styleUrl: './dialog-persona.component.css'
})
export class DialogPersonaComponent {
  personaEditar : Persona;

  constructor(
    public dialogRef: MatDialogRef<DialogPersonaComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Persona) {
      this.personaEditar = {...data};
    }

  guardarCambios(): void {
    this.dialogRef.close(this.personaEditar);
  }

  cancelar(): void {
    this.dialogRef.close();
  }

}
