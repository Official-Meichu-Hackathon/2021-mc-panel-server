import logger from '../libs/logger';
import service from '../service';
import validator from '../libs/validator';

const userController = {
  async register(req, res) {
    const rule = {
      username: {
        type: 'string',
        allowEmpty: false,
        min: 1
      },
      password: {
        type: 'string',
        allowEmpty: false,
        min: 4
      }
    };

    try {
      validator.validate(req.body, rule);
      await service.user.create(req.body);
      res.json({ success: true });
    } catch (error) {
      logger.error('[User Controller] Failed to register:', error);
      res.status(400).json({ message: `Failed to register, ${error}` });
    }
  }
};

export default userController;
