import { Component, input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';

@Component({
  selector: 'app-projeto-card',
  standalone: true,
  imports: [MatCardModule, MatChipsModule],
  template: `
    <mat-card class="projeto-card">
      <mat-card-header>
        <mat-chip [color]="getStatusColor(status())" selected>{{ status() }}</mat-chip>
      </mat-card-header>
      <mat-card-content>
        <h3>{{ titulo() }}</h3>
        <p class="area"> {{ area() }}</p>
        <p class="descricao">{{ descricao() }}</p>
      </mat-card-content>
    </mat-card>
  `,
  styles: [`
    .projeto-card { 
      width: 100%; 
      max-width: 350px; 
      margin: 10px; 
    }
    .area { 
      font-weight: bold; 
      color: #666; 
      margin: 5px 0; 
    }
    .descricao { 
      font-size: 0.9em; 
      color: #888; 
      margin-top: 10px; 
    }
  `]
})
export class ProjetoCardComponent {
  titulo = input.required<string>();
  area = input.required<string>();
  status = input.required<string>();
  descricao = input<string>('');

  getStatusColor(status: string): 'primary' | 'accent' | 'warn' {
    return status === 'concluido' ? 'primary' :
           status === 'em andamento' ? 'accent' : 'warn';
  }
}