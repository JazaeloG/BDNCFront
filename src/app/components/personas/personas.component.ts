import { Component, OnInit } from '@angular/core';
import { PersonaService } from '../../services/persona.service';
import { Persona } from '../../models/persona';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DialogPersonaComponent } from '../dialog-persona/dialog-persona.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-personas',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './personas.component.html',
  styleUrl: './personas.component.css'
})
export class PersonasComponent implements OnInit{
  personas : Persona[] = [];
  persona: Persona = new Persona();

  constructor(
    private personaService: PersonaService,
    private dialog: MatDialog
  ) 
    { }

  ngOnInit() {
    this.getPersonas();
  }

  getPersonas(): void {
    this.personaService.getPersonas().subscribe(data => {
      this.personas = data;
    });
  }

  createPersona(): void {
    this.personaService.createPersona(this.persona).subscribe(data => {
      this.personas.push(data);
      this.persona = new Persona();
    });
  }

  updatePersona(persona: Persona): void {
    const dialogRef = this.dialog.open(DialogPersonaComponent, {
      width: '400px',
      data: persona 
    });
  
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.actualizarPersona(result);
      }
    });
  }

  actualizarPersona(persona: Persona): void {
    this.personaService.updatePersona(persona.id!, persona).subscribe(() => {
      this.getPersonas();
    });
  }

  deletePersona(id?: string): void {
    this.personaService.deletePersona(id!).subscribe(() => {
      this.getPersonas(); 
    });
  }
}
