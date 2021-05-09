import express from 'express';
import logger from './libs/logger';
import config from './libs/config';
import router from './routes';
import connectMongo from './libs/connect_mongo';

const app = express();

app.use(express.json());

app.use(router);

connectMongo();

app.get('/', (req, res) => {
  res.json({ message: 'Hello world!' });
});

app.listen(config.port, () => {
  logger.info(`Server is running on port ${config.port}`);
});
