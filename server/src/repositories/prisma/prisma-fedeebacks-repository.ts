import { prisma } from "../../prisma";
import { FeedbacksCreateData, FeedbacksRepository } from "../fedeebacks-repository";

export class PrismaFedeebacksRepository implements FeedbacksRepository{
  async create({type, comment, screenshot}: FeedbacksCreateData) {
    await prisma.feedback.create({
      data: {
        type,
        comment,
        screenshot,
      }
    })
  }
}