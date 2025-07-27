# 📚 Mini Bibliothèque - API REST avec NestJS

## 🎯 Objectif
Développer une API REST permettant de gérer des bibliothèques personnelles. Chaque utilisateur possède sa bibliothèque et peut emprunter des livres d'autres bibliothèques.

## 🧱 Technologies utilisées
- Framework : NestJS
- ORM : TypeORM
- Base de données : MySQL
- Documentation : Swagger

## 🚀 Installation
```bash
git clone <url-du-repo>
cd mini-bibliotheque
npm install
npm run start:dev
```

## ⚙️ Configuration TypeORM
Dans `app.module.ts`, ajustez la configuration si besoin :
```ts
TypeOrmModule.forRoot({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '',
  database: 'mini_bibliotheque',
  synchronize: true,
  autoLoadEntities: true,
})
```

## 📬 Routes principales
| Méthode | Route | Description |
|--------|-------|-------------|
| GET | /users | Lister tous les utilisateurs |
| POST | /users | Créer un utilisateur |
| POST | /libraries | Créer une bibliothèque |
| POST | /books | Ajouter un livre |
| GET | /books?available=true | Lister les livres disponibles |
| GET | /books?genre=roman | Lister les livres par genre |
| POST | /loans | Emprunter un livre |
| PATCH | /loans/:id/return | Retourner un livre emprunté |
| GET | /users/:id/loans | Lister les prêts d’un utilisateur |

## 🧭 Documentation Swagger
Swagger est disponible à :
```
http://localhost:3000/api
```


## 🧑‍💻 Auteurs
Projet réalisé dans le cadre d’un challenge technique NestJS.

## 📤 Export BDD (optionnel)
Utilisez `mysqldump` pour exporter les données si besoin :
```bash
mysqldump -u root -p mini_bibliotheque > export.sql
```


---
