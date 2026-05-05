import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';

@Component({
  selector: 'app-membro-card',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatChipsModule],
  template: `
    <mat-card class="membro-card">
      <mat-card-header>
        <mat-card-title>{{ nome() }}</mat-card-title>
        <mat-card-subtitle>{{ cargo() }}</mat-card-subtitle>
      </mat-card-header>
      <mat-card-content>
        <p><strong>Email:</strong> {{ email() }}</p>
        <div *ngIf="projetos().length > 0" class="projetos">
          <h4>Projetos:</h4>
          <mat-chip *ngFor="let proj of projetos()" size="small">{{ proj }}</mat-chip>
        </div>
      </mat-card-content>
    </mat-card>
  `,
  styles: [`
    .membro-card { 
      width: 100%; 
      max-width: 300px; 
    }
    .projetos { margin-top: 15px; }
  `]
})
export class MembroCardComponent {
  nome = input.required<string>();
  email = input.required<string>();
  cargo = input.required<string>();
  projetos = input<string[]>([]);
}