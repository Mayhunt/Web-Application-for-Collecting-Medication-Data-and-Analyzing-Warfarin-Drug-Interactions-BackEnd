import { Body, Controller, Post } from '@nestjs/common';
import { QuestionEntity } from 'src/pkg/dal/question/question.entity';
import { CreateQuestionDto } from './dto/create-Question.dto';
import { QuestionService } from './question.service';

@Controller('question')
export class QuestionController {
  constructor(private questionService: QuestionService) {}
  @Post()
  createQuestion(
    @Body() createQuestionDto: CreateQuestionDto,
  ): Promise<QuestionEntity> {
    return this.questionService.createQuestion(createQuestionDto);
  }
}
