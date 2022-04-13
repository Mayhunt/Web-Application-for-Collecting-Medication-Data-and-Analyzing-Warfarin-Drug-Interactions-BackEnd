import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { QuestionEntity } from 'src/pkg/dal/question/question.entity';
import { QuestionRepository } from 'src/pkg/dal/question/question.repository';
import { CreateQuestionDto } from './dto/create-Question.dto';

@Injectable()
export class QuestionService {
  constructor(
    @InjectRepository(QuestionRepository)
    private questionRepository: QuestionRepository,
  ) {}

  async createQuestion(
    createQuestionDto: CreateQuestionDto,
  ): Promise<QuestionEntity> {
    const { question, answer } = createQuestionDto;
    const ques = this.questionRepository.create({
      question,
      answer,
    });
    await this.questionRepository.save(ques);
    return ques;
  }
}
