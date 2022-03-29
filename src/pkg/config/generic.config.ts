import { registerAs } from '@nestjs/config';

export default registerAs('generic', () => ({
  port: +process.env.PORT || 8080,
  mode: process.env.MODE || 'dev',
  isProduction: process.env.MODE === 'production' || false,
}));
