import { Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MembroCardComponent } from '../../components/membro-card/membro-card.component';
import { Membro } from '../../models/membro.model';

@Component({
  selector: 'app-membros',
  standalone: true,
  imports: [CommonModule, MatIconModule, MembroCardComponent],
  templateUrl: './membros.html',
  styleUrls: ['./membros.css']
})
export class Membros {
  membros = signal<Membro[]>([
    { id: 1, nome: 'João Silva', email: 'joao@empresa.com', cargo: 'Dev Fullstack', projetos: ['Projeto 1', 'Projeto 3'] },
    { id: 2, nome: 'Maria Santos', email: 'maria@empresa.com', cargo: 'UI/UX Designer', projetos: ['Projeto 2'] },
    { id: 3, nome: 'Pedro Costa', email: 'pedro@empresa.com', cargo: 'Product Owner', projetos: ['Projeto 1'] }
  ]);

  total = computed(() => this.membros().length);
}
