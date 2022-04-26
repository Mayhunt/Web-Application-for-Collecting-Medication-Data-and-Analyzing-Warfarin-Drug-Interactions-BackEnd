import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { InrEntity } from 'src/pkg/dal/inr/inr.entity';
import { InrRepository } from 'src/pkg/dal/inr/inr.repository';
import { CreateInrDto } from './dto/create-inr.dto';
import { UpdateInrDto } from './dto/update-inr.dto';

@Injectable()
export class InrService {
  constructor(
    @InjectRepository(InrRepository)
    private inrRepository: InrRepository,
  ) {}

  async createInr(createInrDto: CreateInrDto): Promise<InrEntity> {
    const { followDate, inrExpect, inrMeasure } = createInrDto;
    const inr = this.inrRepository.create({
      followDate,
      inrExpect,
      inrMeasure,
    });
    await this.inrRepository.save(inr);
    return inr;
  }

  async getInrs(): Promise<InrEntity[]> {
    const Inrs = await this.inrRepository.find();
    return Inrs;
  }

  async getInrById(id: string): Promise<InrEntity> {
    const Inr = await this.inrRepository.findOneOrFail(id);
    return Inr;
  }

  async updateInr(id: string, updateInrDto: UpdateInrDto) {
    try {
      const Inr = await this.getInrById(id);

      const { followDate, inrExpect, inrMeasure } = updateInrDto;

      if (followDate) {
        Inr.followDate = followDate;
      }

      if (inrExpect) {
        Inr.inrExpect = inrExpect;
      }

      if (inrMeasure) {
        Inr.inrMeasure = inrMeasure;
      }

      await this.inrRepository.save(Inr);
      return Inr;
    } catch (e) {
      throw new NotFoundException({
        message: ['Updating not success'],
      });
    }
  }

  async deleteInr(id: string) {
    try {
      const Inr = await this.getInrById(id);
      await this.inrRepository.delete(id);
      return Inr;
    } catch (e) {
      throw new NotFoundException({
        message: ['Deleting not success'],
      });
    }
  }
}
