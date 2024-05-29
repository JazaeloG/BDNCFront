import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Persona } from '../models/persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  private baseUrl = 'http://localhost:8080/miapp';

  constructor(private http: HttpClient) { }

  getPersonas(): Observable<Persona[]> {
    return this.http.get<Persona[]>(`${this.baseUrl}/personas`);
  }

  getPersona(id: string): Observable<Persona> {
    return this.http.get<Persona>(`${this.baseUrl}/personas/${id}`);
  }

  createPersona(persona: Persona): Observable<Persona> {
    return this.http.post<Persona>(`${this.baseUrl}/personas`, persona);
  }

  updatePersona(id: string, persona: Persona): Observable<Persona> {
    return this.http.put<Persona>(`${this.baseUrl}/personas/${id}`, persona);
  }

  deletePersona(id: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/personas/${id}`);
  }
}
