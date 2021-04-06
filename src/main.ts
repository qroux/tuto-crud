import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const PORT = process.env.port || 3000;
  const app = await NestFactory.create(AppModule);
  await app.listen(PORT, () => {
    console.log('NestApp listening on port 3000');
  });
}
bootstrap();
