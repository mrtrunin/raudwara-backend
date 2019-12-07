import { ConfigService } from './config.service';

const configService = new ConfigService(
  `${process.env.NODE_ENV || 'development'}.env`,
);

export default {
  mongoURI: configService.get('MONGO_URI'),
  jwtSecret: configService.get('JWT_SECRET'),
};
