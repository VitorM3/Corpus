import { INestApplication } from '@nestjs/common';
import {
  SwaggerModule,
  DocumentBuilder,
  OpenAPIObject,
  SwaggerCustomOptions,
} from '@nestjs/swagger';
import { SwaggerTheme } from 'swagger-themes';

export default class Swagger {
  public static config(app: INestApplication) {
    const document = this.defineDocumentBuilder(app);
    const theme = this.theme();
    return this.createSwaggerPage(app, document, theme);
  }

  private static defineDocumentBuilder(app: INestApplication) {
    const config = new DocumentBuilder()
      .setTitle('Corpus-API')
      .setDescription('Api para o trabalho de banco de dados')
      .build();
    return SwaggerModule.createDocument(app, config);
  }

  private static theme(): SwaggerCustomOptions {
    const theme = new SwaggerTheme('v3');
    return {
      customCss: theme.getBuffer('dark'),
    };
  }

  private static createSwaggerPage(
    app: INestApplication,
    document: OpenAPIObject,
    theme: SwaggerCustomOptions,
  ) {
    return SwaggerModule.setup('doc', app, document, theme);
  }
}
