import { Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ProjetoCardComponent } from '../../components/projeto-card/projeto-card.component';
import { Projeto } from '../../models/projeto.model';

@Component({
  selector: 'app-projetos',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule, ProjetoCardComponent],
  templateUrl: './projetos.html',
  styleUrls: ['./projetos.css']
})
export class Projetos {
  projetos = signal<Projeto[]>([
    {
      id: 1,
      titulo: 'Sistema de Gestão Escolar',
      area: 'Educação',
      status: 'em andamento',
      descricao: 'Plataforma completa para escolas',
      dataInicio: '2024-01-15'
    },
    {
      id: 2,
      titulo: 'App de Delivery',
      area: 'TI',
      status: 'planejado',
      descricao: 'Aplicativo mobile para entregas',
      dataInicio: '2024-02-01'
    },
    {
      id: 3,
      titulo: 'Portal Corporativo',
      area: 'RH',
      status: 'concluido',
      descricao: 'Sistema interno da empresa',
      dataInicio: '2023-11-10'
    }
  ]);

  total = computed(() => this.projetos().length);
  emAndamento = computed(() =>
    this.projetos().filter((p) => p.status === 'em andamento').length
  );

  adicionar() {
    this.projetos.update((lista) => [
      ...lista,
      {
        id: Date.now(),
        titulo: `Projeto ${lista.length + 1}`,
        area: 'Nova Área',
        status: 'planejado',
        descricao: 'Descrição do novo projeto',
        dataInicio: new Date().toISOString().split('T')[0]
      }
    ]);
  }
}
