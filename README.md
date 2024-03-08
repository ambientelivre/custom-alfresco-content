# Desenvolvendo funcionalidade no Alfresco ADF

Alfresco Development Framework facilita a criação de interfaces sobre o framework Angular e integra o Backend do Anfresco Service

## Como instalar

### Geral

```cmd
npm install -g yo generator-alfresco-adf-app@latest @angular/cli
```

### Projeto

```cmd
yo alfresco-adf-app
```

## Requisitos

- Saber desenvolvimento Web
- Saber fazer Angular
- Saber fazer chamadas de API's

## Criando novo componente

```cmd
ng generate component nome-do-meu-novo-componente -m app.module
```

- Ver mais: https://angular.io/cli


## Personalizações

### Barra lateral (Sidenav)

1. Abra o aquivo `src/app/app-layout/app-layout.component.html`
2. ```html
    <a mat-list-item class="adf-sidenav-link" routerLink="/rota-de-meu-novo-componente">
        <mat-icon matListIcon class="sidenav-menu-icon">launch</mat-icon>
        <div class="sidenav-menu-label" *ngIf="!isMenuMinimized">Meu novo componente</div>
    </a>
    ```

- Para adicionar um novo ícone, troque o conteúdo da tag **mat-icon** [matListIcon](https://www.angularjswiki.com/angular/angular-material-icons-list-mat-icon-list/)

### Adicionando Rota para a barra lateral

Após o item estar na barra lateral deve ser dito exibido

1. Abra o arquivo src/app/app.routes.ts
1. Adicione o link da rota do atributo **routerLink** no exemplo foi **rota-de-meu-novo-componente**

## Integrando API's do Alfresco Content Service ACS

### Barra de pesquisa (Searchbar)

- [Componente de barra de pesquisa do ADF](https://github.com/Alfresco/alfresco-ng2-components/blob/develop/docs/core/components/search-text-input.component.md)

1. Injetar o service **SearchService** no component selecionado
1. Atribuir uma função **onChange** no input
1. Armazenar o retorno do método **search**
1. Mostrar dados do resultado no template

## Veja mais
- [ADF Services](https://github.com/Alfresco/alfresco-ng2-components/tree/develop/docs/core/services)
- [ADF Components](https://github.com/Alfresco/alfresco-ng2-components/tree/develop/docs/core/components)
