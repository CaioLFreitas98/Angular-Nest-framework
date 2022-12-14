import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Music } from './music/entities/music.entity';
import { MusicModule } from './music/music.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 9001,
      username: 'root',
      password: 'admin',
      database: 'music',
      entities: [Music],
      synchronize: true,
      logging: true,
    }), MusicModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
