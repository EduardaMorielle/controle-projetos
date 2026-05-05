# 📋 Atividade Prática — Controle de Projetos (Angular)

## 📌 Informações da Entrega

- **Aluno**: Eduarda Morielle
- **Disciplina**: Desenvolvimento Web (Angular)
- **Data de Entrega**: 5 de maio de 2026
- **Repositório**: https://github.com/EduardaMorielle/controle-projetos

---

## ✅ Checklist Final Completo

### Requisitos Obrigatórios
- ✅ **Menu lateral funcionando** - Navegação com mat-sidenav
- ✅ **Rotas funcionando** - 5 páginas configuradas e ativas
- ✅ **Signals** - Estado gerenciado com signals em Projetos e Membros
- ✅ **Computed** - Total de projetos, projetos em andamento, total de membros
- ✅ **@for** - Renderizando listas de projetos e membros
- ✅ **@if** - Mensagens condicionais (verificação de membros)
- ✅ **Componentes** - Home, Projetos, Membros, Relatórios, Sobre, ProjetoCard, MembroCard
- ✅ **Models tipados** - Projeto.model.ts e Membro.model.ts
- ✅ **Angular Material** - Toolbar, Sidenav, Cards, Chips, Buttons, Icons
- ✅ **Testes unitários** - AppComponent com 2 testes passando

---

## 📁 Estrutura do Projeto

```
src/app/
├── app.component.ts          # Layout principal com menu e router-outlet
├── app.component.html        # Template com mat-sidenav-container
├── app.component.css         # Estilos
├── app.config.ts            # Configuração com provideRouter
├── app.routes.ts            # Definição de rotas
├── app.spec.ts              # Testes ✅ (2/2 passando)
│
├── models/                   # Models tipados
│   ├── projeto.model.ts     # Type Projeto e StatusProjeto
│   └── membro.model.ts      # Type Membro
│
├── components/
│   ├── projeto-card/
│   │   ├── projeto-card.component.ts   # Input signals
│   │   ├── projeto-card.html
│   │   └── projeto-card.css
│   └── membro-card/
│       ├── membro-card.component.ts    # Input signals
│       ├── membro-card.html
│       └── membro-card.css
│
├── pages/
│   ├── home/                # Página inicial com boas-vindas
│   ├── projetos/            # Lista de projetos com computed
│   ├── membros/             # Lista de membros
│   ├── relatorios/          # Página de relatórios
│   └── sobre/               # Página sobre a aplicação
│
├── pipes/                   # (Preparado para expansão)
├── guards/                  # (Preparado para expansão)
└── interceptors/            # (Preparado para expansão)
```

---

## 🎯 Funcionalidades Implementadas

### 1️⃣ **Componente AppComponent (Layout)**
- Menu lateral com navegação para todas as páginas
- Toolbar com título da aplicação
- Roteamento ativo com highlight visual
- Material Design com ícones

### 2️⃣ **Página de Projetos**
```typescript
// Signals
projetos = signal<Projeto[]>([...])

// Computed
total = computed(() => this.projetos().length)
emAndamento = computed(() => 
  this.projetos().filter(p => p.status === 'em andamento').length
)

// Método
adicionar() { ... }
```

- Exibe cards de projetos com:
  - Status (chip com cor dinâmica)
  - Título, área, descrição
  - Badge de status
- Botão "Novo Projeto" para adicionar projetos dinamicamente

### 3️⃣ **Página de Membros**
- Lista de 3 membros iniciais
- Cards com:
  - Nome e cargo
  - Email
  - Projetos associados
- Computed para total de membros

### 4️⃣ **Outras Páginas**
- **Home**: Boas-vindas com links para Projetos e Membros
- **Relatórios**: Página estruturada
- **Sobre**: Informações sobre a aplicação

---

## 📊 Dados Iniciais

### Projetos (3 itens)
1. **Sistema de Gestão Escolar** - Educação - Em Andamento
2. **App de Delivery** - TI - Planejado
3. **Portal Corporativo** - RH - Concluído

### Membros (3 itens)
1. **João Silva** - Dev Fullstack - joao@empresa.com
2. **Maria Santos** - UI/UX Designer - maria@empresa.com
3. **Pedro Costa** - Product Owner - pedro@empresa.com

---

## 🧪 Testes

```bash
ng test --watch=false
```

### Resultado: ✅ 2/2 Testes Passando

```
✓ should create the app (343ms)
✓ should render title (146ms)
```

**Melhorias feitas nos testes:**
- Adicionado `provideRouter([])` para suportar RouterLink/RouterLinkActive
- Adicionado `provideAnimations()` para suportar Material Animations
- Ajustado seletor para verificar elemento correto (mat-toolbar span)

---

## 🚀 Como Executar

### Instalar dependências
```bash
npm install --legacy-peer-deps
```

### Executar servidor de desenvolvimento
```bash
ng serve
```

### Abrir no navegador
```
http://localhost:4200/
```

### Executar testes
```bash
ng test
```

---

## 🎨 Tecnologias Utilizadas

- **Angular**: 21.2.0
- **Angular Material**: 21.2.9
- **TypeScript**: 5.9.2
- **RxJS**: 7.8.0
- **Vitest**: 4.0.8 (Testes)
- **Material Theme**: Azure/Blue

---

## 📸 Screenshot

![Página de Projetos](./screenshot-projetos.png)

---

## 📝 Melhorias Implementadas

Conforme solicitado, implementamos:

1. ✅ **Mais projetos iniciais** - 3 projetos com dados realistas
2. ✅ **Mais membros** - 3 membros com cargo e projetos associados
3. ✅ **Novos computed** - Total de projetos, em andamento, total membros
4. ✅ **Ícones personalizados** - Home, assignment, groups, bar_chart, info
5. ✅ **Mensagens condicionais com @if** - Validação de dados vazios
6. ✅ **Componentes adicionais** - MembroCard além de ProjetoCard
7. ✅ **Layout aprimorado** - Material Design com tema Azure/Blue
8. ✅ **Testes unitários** - Configurados e passando

---

## 🔗 Links Úteis

- **Repositório GitHub**: https://github.com/EduardaMorielle/controle-projetos
- **Documentação Angular**: https://angular.io
- **Documentação Material**: https://material.angular.io

---

## ✨ Conclusão

Aplicação Angular completa com todos os requisitos solicitados:
- ✅ Estrutura organizada e escalável
- ✅ Componentes reutilizáveis
- ✅ Signals e Computed funcionando
- ✅ Roteamento configurado
- ✅ Material Design aplicado
- ✅ Testes passando
- ✅ Código pronto para produção

**Status**: 🎉 **COMPLETO E FUNCIONAL**
