/**
 * Default settings for the app.
 */
export const APPCONFIG = {
    habitat: process.env.HABITAT || 'local',
    port: parseInt(process.env.PORT, 10) || 3000,
    enable_cors: process.env.ENABLE_CORS === 'true',
    swagger_scheme: (process.env.SWAGGER_SCHEME as 'http' | 'https') || 'https',
    version: process.env.APP_VERSION,
}

/**
 * Wrapper for passing this config to the ConfigModule.
 */
export default () => APPCONFIG;
