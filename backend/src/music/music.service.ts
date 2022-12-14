import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateMusicDto } from './dto/create-music.dto';
import { Music } from './entities/music.entity';

@Injectable()
export class MusicService {
  constructor(
    @InjectRepository(Music)
    private musicRepository: Repository<Music>)
    {}

  create(createMusicDto: CreateMusicDto) {
    return this.musicRepository.save(createMusicDto);
  }

  findAll() {
    return this.musicRepository.find();
  }

  findOne(id: string) {
    return this.musicRepository.findOneBy({ id });
  }



  remove(id: string) {
    return this.musicRepository.delete(id);
  }
}
