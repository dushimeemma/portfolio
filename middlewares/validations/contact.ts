import Joi from 'joi';
import { NextApiRequest, NextApiResponse } from 'next';

const withValidateContact = (handler: Function) => {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    const schema = Joi.object({
      name: Joi.string().required().messages({
        'any.required': 'Username is required',
        'string.empty': 'Username can not be empty',
      }),
      email: Joi.string().email().required().messages({
        'any.required': 'Email is required',
        'string.empty': 'Email can not be empty',
      }),
      message: Joi.string().required().messages({
        'any.required': 'Message is required',
        'string.empty': 'Message can not be empty',
      }),
    });
    const { error } = schema.validate(req.body);
    if (error)
      return res.status(400).json({
        status: 'failed',
        error: error.details[0].message,
        data: error,
      });
    return handler(req, res);
  };
};

export default withValidateContact;
