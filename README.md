# TestAngular

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.9.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

## Astuce 

quel est la difference entre component et service sur angular?

1. Component (Composant)
Un composant en Angular, c'est une partie de l'interface utilisateur (UI).
Il gère l'affichage et l'interaction utilisateur.

✅ Il contient :

un template HTML (l'affichage)

un fichier TypeScript (la logique du composant)

parfois du CSS (le style)

👉 But principal : Afficher des données et réagir aux actions de l'utilisateur (clics, saisies,)

2. Service
Un service en Angular, c'est une classe dédiée à la logique métier ou à partager des données entre plusieurs composants.
Un service ne s’occupe pas d’affichage, uniquement de traitement.

✅ Il contient :

de la logique pour appeler des API

gérer des données (mémorisation, calculs, etc.)

partager des données entre plusieurs composants

👉 But principal : Centraliser la logique et réutiliser du code.

## Component and service
Entre le component et le service o qu'est ce que on doit creer en premier ?
On commence par créer le Service d'abord ✅
Pourquoi ?
👉 Parce que le composant a besoin du service pour fonctionner.
Donc, il faut que le service existe avant de l'utiliser dans le composant.

Plan d'action classique :
Créer le service
(ex: UtilisateurService)

Créer le composant
(ex: ProfilComponent)

Injecter le service dans le composant (avec constructor(private service: ServiceName))

Pas l'inverse ! Le composant utilise le service, pas l'inverse.
