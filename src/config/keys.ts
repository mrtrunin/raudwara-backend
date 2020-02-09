import { ConfigService } from './config.service';

const configService = new ConfigService('.env');

export default {
  mongoURI: configService.get('MONGO_URI'),
};
