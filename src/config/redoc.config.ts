import { DocumentBuilder } from '@nestjs/swagger';
import { RedocOptions } from 'nestjs-redoc';

/**
 * API version 1 Swagger documentation.
 */
export const SWAGGER_OPTIONS = new DocumentBuilder()
    .setTitle('ENGINS Notify SDK')
    .setDescription('API-driven templated notifications across the ENGINS platform')
    .setVersion('1.0')
    .addBearerAuth()
    .build();

/**
 * API version 1 Redocs options.
 */
export const REDOC_OPTIONS: RedocOptions = {
    title: 'ENGINS Notify SDK',
    logo: {
        url: 'https://www.enginsociety.org/images/icons/ENGINS%20Expanded%20Logo%20White.png',
        altText: 'ENGINS'
    }
}