import { Logger } from '@nestjs/common';
import { config } from 'dotenv';

// grab the environment path
const habitat = process.env.HABITAT || 'local';
const path = `${__dirname}/envs/.env.${habitat}`;
Logger.log(`Using config ${path}`);
config({ path });

const APPCONFIG = {
    ENABLE_CORS: process.env.ENABLE_CORS === 'true',
    SWAGGER_SCHEME: (process.env.SWAGGER_SCHEME as 'http' | 'https') || 'https',
    VERSION: process.env.APP_VERSION,
    PORT: process.env.PORT || '3000'
};

export default APPCONFIG;
