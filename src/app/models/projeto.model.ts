export type StatusProjeto = 'planejado' | 'em andamento' | 'concluido' | 'pausado';

export interface Projeto {
  id: number;
  titulo: string;
  area: string;
  status: StatusProjeto;
  descricao: string;
  dataInicio: string;
}