import model from '../models';
import logger from '../libs/logger';

const userService = {
  async create(params) {
    try {
      const res = await model.user.create(params);
      logger.info('[User Service] Create user successfully');
      return res;
    } catch (error) {
      logger.error('[User Service] Failed to create user to database:', error);
      throw new Error(`Failed to create user database, ${error}`);
    }
  }
};

export default userService;
