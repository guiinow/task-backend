import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
  );

  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.GRPC,
    options: {
      package: 'task',
      protoPath: join(__dirname, 'main.proto'),
      url: process.env.GRPC_HOST || '127.0.0.1:50051',
    },
  });
  console.log(`DEBUGANDOOOOOO ${process.env.GRPC_HOST}`);

  app.useGlobalPipes(new ValidationPipe());

  const config = new DocumentBuilder()
    .setTitle('tasks-ms')
    .setDescription(
      'Aqui é possível encontrar a documentação para o MS de tasks e também testar o crud',
    )
    .setVersion('1.0')
    .addTag('tasks-ms')
    .setContact(
      'Guilherme Ferreira',
      'https://github.com/guiinow/',
      'guilherme.sobrinho@familiapires.com.br',
    )
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);

  await app.startAllMicroservices();
  await app.listen(3001, '0.0.0.0');
  console.log(`Application is running on: ${await app.getUrl()}/tasks`);
}
bootstrap();
