import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // ✅ Ajout du ValidationPipe global
  app.useGlobalPipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }));

  // ✅ Configuration Swagger
  const config = new DocumentBuilder()
    .setTitle('Mini Bibliothèque API')
    .setDescription('API REST pour la gestion des utilisateurs, livres, bibliothèques et emprunts')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document); // Swagger accessible sur /api

  // ✅ Lancement de l'application
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
