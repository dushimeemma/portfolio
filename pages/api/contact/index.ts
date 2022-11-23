import { NextApiRequest, NextApiResponse } from 'next';

import prisma from '../../../helpers/prisma';
import { Contact } from '@prisma/client';
import { Message } from '../../../helpers/types/message.type';
import asyncHandler from '../../../middlewares/errors/async_handler';
import withValidateContact from '../../../middlewares/validations/contact';

const contactHandler = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  if (req.method === 'POST') {
    try {
      const { name, email, message } = req.body;
      const newMessage: Message = {
        name,
        email,
        message,
      };

      const savedMessage: Contact = await prisma.contact.create({
        data: newMessage,
      });

      res.status(200).json({
        status: 'success',
        message: 'Message sent successfully',
        data: savedMessage,
      });
    } catch (error) {
      res.status(400).json({
        status: 'failed',
        error: 'Message not sent, try again later',
        data: error,
      });
    }
  }
};

export default asyncHandler(withValidateContact(contactHandler));
