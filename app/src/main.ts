import { NestFactory } from "@nestjs/core";
import { AppModule } from "@app/app.module";

const port = process.env.APP_PORT || 80;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(port);
}
bootstrap();
