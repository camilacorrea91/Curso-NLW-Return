import express from 'express';
import { NodemailerMailAdapter } from './adapters/nodemailer/node-mailer-mail-adapter';
import { PrismaFedeebacksRepository } from './repositories/prisma/prisma-fedeebacks-repository';
import { SubmitFeedbackUseCase } from './use-cases/submit-feedback-use-case';

export const routes = express.Router()

routes.post('/feedbacks', async (req, res) => {
  const {type, comment, screenshot} = req.body 
  
  const prismaFedeebacksRepository = new PrismaFedeebacksRepository()
  const nodemailerMailAdapter = new NodemailerMailAdapter()

  const submitFeedbacksUseCase = new SubmitFeedbackUseCase(
    prismaFedeebacksRepository,
    nodemailerMailAdapter
  )

  await submitFeedbacksUseCase.execute({
    type,
    comment,
    screenshot,
  });
 
  return res.status(201).send();
});