# Shasser.fr

Le site d'aide à la capture de Pokémon Shinny

## Fonctionnement

Le projet utilise Github Action afin de tester notre code et de le déployer automatiquement sur Heroku

Le code est issu d'un ancien projet en ReactJs, sans l'utilisation des hooks et de typescript

Il y a 2 branches, master et pre-prod, on effectue les modifications sur la branche Pre-prod et on envoit une pull request une fois que des les tests sont validés afin de fusionner
le code avec la branche master.

A chaque push, github actions effectue les tests, build notre application et la déploie.

## Liens
Lien production : [shasser.fr](https://click-the-lilian.herokuapp.com/)

Lien Pre-prod : [pre-pro.shasser.fr](https://pre-prod-click-the-lilian.herokuapp.com/)


## Configurations

Github Workflow
deploy.yml est le fichier pour les actions lors d'un push sur la branche master (Production).
preProdCheck.yml est le fichier pour les actions lors d'un push sur la branche preprod (Preprod).

## Explication des steps actions
- **Init project** permet d'accéder à notre repository.
- **Use Node.js** permet d'installer Nodejs.
- **Install Packages** installe toutes les dépendances du projet.
- **Build page** permet de construire l'application
- **Deploy to Heroku** permet de deployer le projet sur Heroku afin de l'héberger


## Les variables utilisées

Afin de rendre fonctionnel les Github Actions et l'utilisation de la base de données de Firebase en deploiement, on configure les variables suivantes :

Sur Github Actions pour le déploiement sur Heroku
Secrets : 
```yml
# deploy.yml
heroku_api_key: ${{secrets.HEROKU_API_KEY}}
heroku_app_name: ${{secrets.HEROKU_APP}}
heroku_email: ${{secrets.HEROKU_EMAIL}}

# preProdCheck.yml
heroku_api_key: ${{secrets.HEROKU_API_KEY}}
heroku_app_name: ${{secrets.HEROKU_APP2}}
heroku_email: ${{secrets.HEROKU_EMAIL}}
```
Sur Heroku pour la connexion avec Firebase
Variables : 

```yml
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
```
